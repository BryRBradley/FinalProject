import { Comment } from './../models/comment';
import { Post } from './../models/post';
import { Community } from './../models/community';
import { Injectable } from '@angular/core';
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

    let postCategory: PostCategory = new PostCategory;
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

  update(post: Post, communityId: number): Observable<Post> {
    console.log(post);
    return this.http.put<Post>(this.url + communityId + "/posts/" + post.id, post, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('post.service update() error: ' + err)
        );
      })
    );
  }

  destroy(communityId: number, postId: number): Observable<void> {
    return this.http.delete<void>(this.url + communityId + "/posts/" + postId, this.getHttpOptions()).pipe(
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

  createComment(post: Post, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.url + post.community?.id + "/posts/" + post.id, Comment, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('userService.create(): error retrieving posts -- post.Service: ' + err)
        );
      })
    );
  }

}
