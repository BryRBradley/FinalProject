import { Post } from './../models/post';
import { Comment } from './../models/comment';
import { HttpClient } from '@angular/common/http';
import { Injectable, SimpleChanges } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  private baseUrl = 'http://localhost:8085/'; // adjust port to match server
  private url = this.baseUrl + 'api/posts/';

  constructor(private http: HttpClient, private authService: AuthService) { }


  index(post: Post): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url + post.id + "/comments", this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('commentService.index(): error retrieving Comments: ' + err)
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
