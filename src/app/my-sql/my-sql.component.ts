import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-sql',
  templateUrl: './my-sql.component.html',
  styleUrls: ['./my-sql.component.css']
})
export class MySQLComponent implements OnInit {
  server = 'Server';
  port = '3306';
  schema = 'Schema';
  //connectionString: string = 'jdbc:as400://'+this.server+':'+this.port+'/'+this.schema;

  constructor() {}

  ngOnInit(): void {
  }

}
