import { CommentService } from './../../services/comment.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Post } from '../../models/post';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Comment } from '../../models/comment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {
 
  @Input() parentPost: Post | null = null;

  comments: Comment[] = [];



  //--------------------------------------------------------------------------


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private commentService: CommentService) {

  }
  //--------------------------------------------------------------------------
  ngOnInit(): void {
    
  }

  //--------------------------------------------------------------------------


  // reload(): void {
  //   if (this.parentPost != null) {
  //     this.commentService.index(this.parentPost).subscribe({
  //       next: (comments: Comment[]) => {
  //         this.comments = comments;
  //       },
  //       error: (error: any) => {
  //         console.log("Error loading comments", error);
  //       }
  //     });
  //   }
  // }
  
  getComments(post:Post): void {
    if (post != null) {
      this.commentService.index(post).subscribe({
        next: (comments: Comment[]) => {
          this.comments = comments;
        },
        error: (error: any) => {
          console.log("Error loading comments", error);
        }
      });
    }
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['parentPost'] && this.parentPost) {
      this.getComments(this.parentPost);
    }
  }
  deleteComment(comment: Comment): void {
    this.deleteComment(comment).subscribe({
      next: () => {
        this.getComments(comment.post);
      },
      error: (error: any) => {
        console.log("Error deleting comment", error);
      }
    });
  }
}
