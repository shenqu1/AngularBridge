import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

import {Observable} from 'rxjs';
import {BridgeId, Bridge} from './bridge';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  apiUrl: string = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getBridges(): Observable<BridgeId[]> {
    const url = `${this.apiUrl}/bridges`;
    return this.http.get<Bridge[]>(url);
  }

  getBridge(id: string): Observable<Bridge> {
    const url = `${this.apiUrl}/bridges/${id}`;
    return this.http.get<Bridge>(url);
  }
}
