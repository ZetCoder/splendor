import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RandomizeItemsService } from '../services/randomize.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  data: Object;
  firstCollection: Array<Object>;
  newFirstCollection: Array<Object>;
  secondCollection: Array<Object>;
  newSecondCollection: Array<Object>;
  thirdCollection: Array<Object>;
  newThirdCollection: Array<Object>;
  randomCollection: RandomizeItemsService;
  count: number;
  imgUrl: Object;

  //same as   constructor(http: Http) {this.http = http;}
  constructor(private http: Http) { 
    this.imgUrl = {
      lvl1: '../assets/img/back_l1.jpg',
      lvl2: '../assets/img/back_l2.jpg',
      lvl3: '../assets/img/back_l3.jpg'
    }
   }

  ngOnInit() {
    this.makeRequest();
  }

  makeRandom(random: Array<Object>, current: Array<Object>, count: number): any {
    this.randomCollection = new RandomizeItemsService();
    return this.randomCollection.randomizeCollection(random, current, count);
  }

  makeRequest() {
    return this.http.get('https://www.jasonbase.com/things/Q2b3')
    .subscribe(
      res => {
        this.data = res.json();
        this.count = 4;
        this.firstCollection = this.data['firstLevelCards'];
        this.newFirstCollection = [];
        this.randomCollection = this.makeRandom(this.newFirstCollection, this.firstCollection, this.count);
      },
      err => {
        console.log(err);
      }
    );
  }

}
