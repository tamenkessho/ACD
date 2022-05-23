import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AS400Component } from './as400/as400.component';
import { MySQLComponent } from './my-sql/my-sql.component';
import { MSSQLComponent } from './mssql/mssql.component';
import { H2Component } from './h2/h2.component';
import { OracleComponent } from './oracle/oracle.component';
import { PostgresComponent } from './postgres/postgres.component';
import {StorageService} from "./storage.service";

@NgModule({
  declarations: [
    AppComponent,
    AS400Component,
    MySQLComponent,
    MSSQLComponent,
    H2Component,
    OracleComponent,
    PostgresComponent
  ],
  imports: [
    // AlertModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
