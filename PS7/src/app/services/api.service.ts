import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class apiService {
  getWeather(wxOptions) {
    return this.http.get(`http://localhost:3000/ps4/${wxOptions.city1}`);
  }

  // Injections are done in constructor
  constructor(private http: HttpClient) {

  }
}
