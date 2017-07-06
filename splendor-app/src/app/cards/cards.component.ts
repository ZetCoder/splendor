import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  data: Object;
  loading: boolean;

  //same as   constructor(http: Http) {this.http = http;}
  constructor(private http: Http) { }

  ngOnInit() {
    this.makeRequest();
  }

  makeRequest(): void {
    this.loading = true;
    this.http.request('https://www.jasonbase.com/things/Q2b3')
    .subscribe((res: Response) => {
      this.data = res.json;
      this.loading = false;
      //console.log(JSON.parse(res['_body']));
    });
  }

}
