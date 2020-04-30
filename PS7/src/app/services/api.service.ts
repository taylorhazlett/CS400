import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line:class-name
export class apiService {
  wxURLBase = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  getWeather(wxOptions) {
    return this.http.get(`${this.wxURLBase}${wxOptions.city1}&q=${this.wxURLBase}${wxOptions.city2}&appid=`)
  }
  // Injections are done in constructor
  constructor(private http: HttpClient) {

  }
}
