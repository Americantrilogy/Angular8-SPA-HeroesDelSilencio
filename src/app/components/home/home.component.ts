import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private irDiscografia: Router) { }

  ngOnInit() {
  }

  verDiscografia() {
    this.irDiscografia.navigate(['/discografia']);
    window.scroll(0, 0);
  }



}
