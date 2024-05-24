import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8085/'; // adjust port to match server
  private url = this.baseUrl + 'api/users';


  constructor(private http: HttpClient) { }

showUser(id: number): Observable<User> {
  return this.http.get<User>(this.url + '/' + id);
  
}

createUser(user: User): Observable<User> {
  return this.http.post<User>(this.url, user);
}

updateUser(user: User): Observable<User> {
  return this.http.put<User>(this.url + '/' + user.id, user);
}

deleteUser(id: number): Observable<User> {
  return this.http.delete<User>(this.url + '/' + id);
}

}

