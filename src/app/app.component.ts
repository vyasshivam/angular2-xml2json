import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data-service.service';
import * as x2js from 'xml2js';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  title = 'Agular2 - xml2json';

  busList: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getFoods().subscribe(item => {
      x2js.parseString(item["_body"], (err, result) => {
        this.busList = result.body.route;
        console.log(this.busList);
      });
    })
  }
}
