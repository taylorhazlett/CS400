import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { apiService } from './services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  weather: any;

  // inject weather service into constructor
  city1: FormControl = new FormControl('ABC');

  location: FormGroup = new FormGroup(
    {
      city1: new FormControl('ABC'),
    }
  );
  wxOptions: {};

  constructor(private wx: apiService, private form: FormBuilder) {
  }

  getWeather() {
    this.wxOptions = {
      city1: this.location.get('city1').value,
    };

    this.wx.getWeather(this.wxOptions).subscribe(
      response => {
        this.weather = response;
        console.log(this.weather.list[0].weather[0].main);
      }
    );
  }

  ngOnInit(): void {
  }
}
