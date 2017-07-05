import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Aristocrats } from './aristocrats.model';

@Component({
  selector: 'app-aristocrats',
  templateUrl: './aristocrats.component.html',
  styleUrls: ['./aristocrats.component.css']
})
export class AristocratsComponent implements OnInit {
  data: Object;
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

  makeRequest(): void {
    this.loading = true;
    this.http.request('https://www.jasonbase.com/things/m4Ek')
    .subscribe((res: Response) => {
      this.data = res.json;
      this.loading = false;
      console.log(JSON.parse(res['_body']));
    });
  }
}
