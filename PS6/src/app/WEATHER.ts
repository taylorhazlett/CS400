import {formatNumber} from '@angular/common';

export class Weather {
  cod:     string;
  message: number;
  cnt:     number;
  list:    List[];
  city:    City;
}

export interface City {
  name:     string;
  coord:    Coord;
  country:  string;
  timezone: number;
  sunrise:  number;
  sunset:   number;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface List {
  dt:      number;
  main:    Main;
  weather: WeatherElement[];
  clouds:  Clouds;
  wind:    Wind;
  sys:     Sys;
  dt_txt:  string;
  rain?:   Rain;
}

export interface Clouds {
  all: number;
}

export interface Main {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  sea_level:  number;
  grnd_level: number;
  humidity:   number;
  temp_kf:    number;
}

export interface Rain {
  "3h": number;
}

export interface Sys {
  pod: string;
}

export interface WeatherElement {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

export interface Wind {
  speed: number;
  deg:   number;
}
