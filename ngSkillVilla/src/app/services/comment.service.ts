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

  private indexObservable(post: Post): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url + post.id + "/comments", this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('commentService.index(): error retrieving comments: ' + err)
        );
      })
    );
  }

  loadComments(post: Post, onSuccess: (comments: Comment[]) => void, onError: (error: any) => void): void {
    this.indexObservable(post).subscribe({
      next: (comments) => {
        console.log('Comments loaded successfully', comments);
        onSuccess(comments);
      },
      error: (err) => {
        console.error('Error loading comments', err);
        onError(err);
      }
    });
  }

  private updateCommentObservable(post: Post, comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(this.url + post.community?.id + "/posts/" + post.id + "/comments/" + comment.id, comment, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('commentService.updateComment(): error updating comment: ' + err)
        );
      })
    );
  }

  updateComment(post: Post, comment: Comment, onSuccess: (updatedComment: Comment) => void, onError: (error: any) => void): void {
    this.updateCommentObservable(post, comment).subscribe({
      next: (updatedComment) => {
        console.log('Comment updated successfully', updatedComment);
        onSuccess(updatedComment);
      },
      error: (err) => {
        console.error('Error updating comment', err);
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
