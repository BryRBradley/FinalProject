import { Comment } from './../models/comment';
import { Post } from './../models/post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, catchError, throwError } from 'rxjs';
import { PostCategory } from '../models/post-category';
import { Router } from '@angular/router';

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
    return this.http.post<Comment>(this.url + post.community?.id + "/posts/" + post.id, comment, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('userService.create(): error retrieving posts -- post.Service: ' + err)
        );
      })
    );
  }
  private createCommentObservable(post: Post, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.url + post.community?.id + "/posts/" + post.id, comment, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('commentService.createComment(): error creating comment: ' + err)
        );
      })
    );
  }

  addComment(post: Post, comment: Comment, onSuccess: (comment: Comment) => void, onError: (error: any) => void): void {
    this.createCommentObservable(post, comment).subscribe({
      next: (newComment) => {
        console.log('Comment added successfully', newComment);
        onSuccess(newComment);
      },
      error: (err) => {
        console.error('Error adding comment', err);
        onError(err);
      }
    });
  }
  private destroyCommentObservable(post: Post, comment: Comment): Observable<void> {
    return this.http.delete<void>(this.url + post.community?.id + "/posts/" + post.id + "/comments/" + comment.id, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('commentService.destroyComment(): error deleting comment: ' + err)
        );
      })
    );
  }

  deleteComment(post: Post, comment: Comment, onSuccess: () => void, onError: (error: any) => void): void {
    this.destroyCommentObservable(post, comment).subscribe({
      next: () => {
        console.log('Comment deleted successfully');
        onSuccess();
      },
      error: (err) => {
        console.error('Error deleting comment', err);
        onError(err);
      }
    });
  }
}
