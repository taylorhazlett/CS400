import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() weather: any;


  constructor() { }

  ngOnInit(): void {
   }
}
