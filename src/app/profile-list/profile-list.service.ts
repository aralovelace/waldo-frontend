import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";


@Injectable( {
  providedIn: 'root'
})

export class ProfileListService {
  constructor(private http: HttpClient) { }

  getProfileList(page) {
    return this.http.get('https://tools.hiwaldo.com/hiring/?key='+environment.access_key+'&page='+page);
  }


}
