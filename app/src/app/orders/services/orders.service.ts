import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrders, IRequestMessage } from '../types/orders.type';


const ENV_URL = 'http://127.0.0.1:8000';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  constructor(private _http: HttpClient) { }

  get(): Observable<IOrders[]> {
    return this._http.get(`${ENV_URL}/orders`) as Observable<IOrders[]>;
  }

  cancel(id: number): Observable<IRequestMessage> {
    return this._http.put(`${ENV_URL}/orders/cancel/${id}`, {}) as Observable<IRequestMessage>;
  }
}
