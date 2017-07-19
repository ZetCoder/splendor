import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http, Response } from '@angular/http';
import { Aristocrats } from './aristocrats.model';
import { RandomizeItemsService } from '../services/randomize.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-aristocrats',
  templateUrl: './aristocrats.component.html',
  styleUrls: ['./aristocrats.component.css']
})
export class AristocratsComponent implements OnInit {
  data: Object;
  currentCollection: Array<Object>;
  newCollection: Array<Object>;
  randomCollection: RandomizeItemsService;
  count: number;

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.makeRequest();
  }
  
  makeRandom(random: Array<Object>, current: Array<Object>, count: number): any {
    this.randomCollection = new RandomizeItemsService();
    return this.randomCollection.randomizeCollection(random, current, count);
  }

  makeRequest() {
    return this.http.get('https://www.jasonbase.com/things/m4Ek')
    .subscribe(
      res => {
        this.data = res.json();
        this.count = 4;
        this.currentCollection = this.data['aristocrats'];
        this.newCollection = [];
        this.randomCollection = this.makeRandom(this.newCollection, this.currentCollection, this.count);
      },
      err => {
        console.log(err);
      }
    );
  }
}
