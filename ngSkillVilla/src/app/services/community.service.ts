import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Community } from '../models/community';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  
    communities: Community[] = []
  
    private baseUrl = 'http://localhost:8085/'; // adjust port to match server
    private url = this.baseUrl + 'api/communities';

  
  
    constructor(private http: HttpClient, private authService: AuthService) { }
  
    index(): Observable<Community[]> {
      return this.http.get<Community[]>(this.url, this.getHttpOptions()).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError(
            () => new Error('commService.index(): error retrieving Community: ' + err)
          );
        })
      );
    }
  
  
  
    create(communities: Community): Observable<Community> {
  
      return this.http.post<Community>(this.url, communities, this.getHttpOptions()).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError(
            () => new Error('commService.create(): error retrieving todo: ' + err)
          );
        })
      );
    }
  
    update(communities: Community, id:number): Observable<Community> {
      return this.http.put<Community>(this.url + "/" + id, communities, this.getHttpOptions()).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError(
            () => new Error('communities.create(): error retrieving community: ' + err)
          );
        })
      );
    }
  
    destroy(id: number): Observable<void> {
      return this.http.delete<void>(this.url + "/" + id, this.getHttpOptions()).pipe(
        catchError((error: any) => {
          console.log(error);
          return throwError(
            () => new Error('commService.delete(): error deleting community' + error)
          );
        })
      );
    }
  
  
    getHttpOptions() {
      let options = {
        headers: {
          Authorization: 'Basic ' + this.authService.getCredentials(),
          'X-Requested-With': 'XMLHttpRequest',
        },
      };
      return options;
    }

  }
  

