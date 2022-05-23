import {Component, OnInit} from '@angular/core';
import {StorageService} from "../storage.service";

@Component({
  selector: 'app-mssql',
  templateUrl: './mssql.component.html',
  styleUrls: ['./mssql.component.css']
})
export class MSSQLComponent implements OnInit {
  optionsModuleStatus: boolean;
  additionalOptions: any;
  currentStatus: any;

  server = 'Server';
  port = '1433';

  constructor(service: StorageService) {
    this.optionsModuleStatus = service.optionsModuleStatus
  }

  ngOnInit(): void {
  }

}
