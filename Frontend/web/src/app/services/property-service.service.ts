import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {

  appUrl = 'https://localhost:13760/';
  apiUrl = 'api/property/';
  
  httpOptions = 
  {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  delete(id: number): Observable<Property>
  {
    return this.http.delete<Property>(this.appUrl + this.apiUrl + id)
  }

  get() : Observable<Property[]>
  {
    return this.http.get<Property[]>(this.appUrl + this.apiUrl)
  }

  getById(id: number) : Observable<Property>
  {
    return this.http.get<Property>(this.appUrl + this.apiUrl + id);
  }

  post(property: Property): Observable<Property>
  {
    return this.http.post<Property>(this.appUrl + this.apiUrl, property, this.httpOptions);
  }

  put(id: number, property: Property): Observable<Property>
  {
    return this.http.put<Property>(this.appUrl + this.apiUrl + id, property, this.httpOptions);
  }
}