import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'OJT Training Application';
  greeting = 'Hahaha';

  constructor() { }

  ngOnInit() {
  }

}
