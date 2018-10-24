import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getReminders() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/')
  }
}
