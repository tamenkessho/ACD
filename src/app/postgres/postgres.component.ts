import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postgres',
  templateUrl: './postgres.component.html',
  styleUrls: ['./postgres.component.css']
})
export class PostgresComponent implements OnInit {

  server = 'Server Name';
  port = '5432';
  schema = 'Schema';
  dbname = 'dbname';

  constructor() { }

  ngOnInit(): void {
  }

}
