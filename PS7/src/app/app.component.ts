import { Component } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {apiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS7';
}
