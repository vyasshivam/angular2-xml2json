import { Injectable } from '@angular/core';
import { Http,  Headers } from '@angular/http';
import { Observable } from 'rxjs';
import * as x2js from 'xml2js';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  url = `http://api.plos.org/search?q=title:DNA`;
  constructor(public http: Http) { }

  getFoods() {
    return this.http.get('http://webservices.nextbus.com/service/publicXMLFeed?command=routeList&a=ttc');
  }
}
