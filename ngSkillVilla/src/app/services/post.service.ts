import { Community } from './../models/community';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, catchError, throwError } from 'rxjs';
import { PostCategory } from '../models/post-category';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 
  posts: Post[] = []
  
  private baseUrl = 'http://localhost:8085/'; // adjust port to match server
  private url = this.baseUrl + 'api/communities/';

  constructor(private http: HttpClient, private authService: AuthService) { }

  index(communityId: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + communityId + "/posts").pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('userService.index(): error retrieving Community: ' + err)
        );
      })
    );
  }



  create(post: Post, communityId: number): Observable<Post> {
   
    let postCategory:PostCategory = new PostCategory;
    postCategory.id = 1;
    post.postCategory = postCategory;
  

    return this.http.post<Post>(this.url + communityId + "/posts", post, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('userService.create(): error retrieving posts -- post.Service: ' + err)
        );
      })
    );
  }

  update(posts: Post, id:number, communityId: number): Observable<Post> {
    console.log(posts);
    return this.http.put<Post>(this.url + communityId + "/posts" +"/" + id, posts, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('users.create(): error retrieving community: ' + err)
        );
      })
    );
  }

  destroy(id: number): Observable<void> {
    return this.http.delete<void>(this.url + "/" + id, this.getHttpOptions()).pipe(
      catchError((error: any) => {
        console.log(error);
        return throwError(
          () => new Error('userService.delete(): error deleting community' + error)
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
