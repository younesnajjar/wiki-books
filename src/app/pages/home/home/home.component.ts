import { Component, OnInit } from '@angular/core';
import {features} from "../feature-list.data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  features = features;
  constructor() { }

  ngOnInit(): void {
  }

}
