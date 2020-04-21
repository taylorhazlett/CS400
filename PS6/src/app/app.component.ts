import { Component } from '@angular/core';
import {FIVEDAY} from "./WEATHER-MOCK";
import {Weather} from './WEATHER';
import {WeatherService} from './services/weather.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'DAILY CITY FORECAST/httpTest';
  cities = FIVEDAY;
  public selectedCity: Weather;
  weather: any;

  selectCity(city: Weather) {
    console.log('in selectCity')
    this.selectedCity = city;
    console.log(this.selectedCity)

  }

  getWeather () {
    this.wx.getWeather().subscribe(
      response => {
        this.weather = response['cnt']
      }
    )
  }

  //inject weather serv into constructor
  constructor(private wx: WeatherService) {}

}
