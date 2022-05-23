import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-as400',
  templateUrl: './as400.component.html',
  styleUrls: ['./as400.component.css']
})
export class AS400Component implements OnInit {
  server = 'Host';
  port = '446';
  schema = 'Schema';

  constructor() { }

  ngOnInit(): void {
  }

}
