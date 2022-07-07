import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  rootURL = '/api';
  addNewsletter(email: any) {
    return this.http.post(this.rootURL + '/add/newsletter', { email });
  }
}
