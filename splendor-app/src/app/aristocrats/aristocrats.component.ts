import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http, Response } from '@angular/http';
import { Aristocrats } from './aristocrats.model';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-aristocrats',
  templateUrl: './aristocrats.component.html',
  styleUrls: ['./aristocrats.component.css']
})
export class AristocratsComponent implements OnInit {
  imgUrl: Object;
  loading: boolean;
  aristocrat: Aristocrats;

  constructor(private http: Http) {
    this.aristocrat = new Aristocrats(
      0, ["0", "0", "0"], ""
    );
  }

  ngOnInit() {
    this.makeRequest();
  }

  makeRequest() {
    this.loading = true;
    let aristocratUrl;

    return this.http.get('https://www.jasonbase.com/things/m4Ek')
    .subscribe(
      res => {
        this.imgUrl = res.json();
        this.imgUrl = this.imgUrl['aristocrats'][0]['imgUrl'];
      },
      err => {
        console.log(err);
      }
    );
  }
}
