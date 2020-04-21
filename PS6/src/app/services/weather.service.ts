import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  getWeather() {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?zip=10014,us&appid=8b45cba8ac674b0e45817d92dc9328a5');

  }
  // Injections are done in constructor
  constructor(private http: HttpClient) {

  }
}

// dependency injection
// decouples application

// class foo {
//   let theservice = new WeatherService();
// }


