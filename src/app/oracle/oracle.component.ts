import {Component, OnInit} from '@angular/core';
import {StorageService} from "../storage.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-oracle',
  templateUrl: './oracle.component.html',
  styleUrls: ['./oracle.component.css'],
  providers: [StorageService]
})
export class OracleComponent implements OnInit {
  optionsModuleStatus: boolean;
  additionalOptions: any;
  currentStatus: any = null;

  server = 'Server';
  port = '1512';
  dbname = 'dbname';

  constructor(storage: StorageService) {
    this.optionsModuleStatus = storage.optionsModuleStatus
  }

  ngOnInit(): void {
  }

  onClick(thing: NgForm) {
    console.log(thing.form);
  }
}
