import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  logUser(password: any, username: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { password, username })
  }
  getCategories(token: string): Observable<any> {
    let header: any = new Headers({ 'Authorization': `Bearer ${token}` });
    return this.http.get(`${this.apiUrl}/products/categories`, { headers: header });
  }
  getCategoryDetails(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/category/${category}`);
  }
}
