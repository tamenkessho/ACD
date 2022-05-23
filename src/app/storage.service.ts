import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public title = 'ACD';
  public DBtype = 'MySQL';
  public optionsModuleStatus = false;

  constructor() { }
}
