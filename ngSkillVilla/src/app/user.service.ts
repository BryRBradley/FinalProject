import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8085/'; // adjust port to match server
  private url = this.baseUrl + 'api/users';


  constructor(private http: HttpClient) { }

showUser(id: number): Observable<User> {
  return this.http.get<User>(this.url + '/' + id);
  catchError((err: any) => {
    console.log(err);
    return throwError(
      () => new Error('UserService.show(): error showing user: ' + err)
    );
  })
}

createUser(user: User): Observable<User> {
  return this.http.post<User>(this.url, user);
  catchError((err: any) => {
    console.log(err);
    return throwError(
      () => new Error('UserService.create(): error creating user: ' + err)
    );
  })
}

updateUser(user: User): Observable<User> {
  return this.http.put<User>(this.url + '/' + user.id, user);
  catchError((err: any) => {
    console.log(err);
    return throwError(
      () => new Error('UserService.update(): error updating user: ' + err)
    );
  })
}

deleteUser(id: number): Observable<User> {
  return this.http.delete<User>(this.url + '/' + id);
  catchError((err: any) => {
    console.log(err);
    return throwError(
      () => new Error('UserService.destroy(): error deleting user: ' + err)
    );
  })
}

}

