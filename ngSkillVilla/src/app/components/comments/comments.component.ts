import { PostService } from './../../services/post.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Post } from '../../models/post';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Comment } from '../../models/comment';
import { CommentService } from './../../services/comment.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() parentPost: Post | null = null;
  comments: Comment[] = [];
  newComment: Comment | null = null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private commentService: CommentService, private PostService: PostService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['parentPost'] && this.parentPost) {
      this.getComments(this.parentPost);
    }
  }

  getComments(post: Post): void {
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

  createNewComment(): void {
    this.newComment = new Comment();
  }

  addComment(post: Post, comment: Comment): void {
    this.commentService.addComment(post, comment, 
      (newComment) => {
        console.log("Comment added successfully", newComment);
        this.getComments(post); // Reload comments
        this.newComment = null;
      },
      (error) => {
        console.error("Error adding comment", error);
      }
    );
  }

  deleteComment(comment: Comment): void {
    if (comment.post) {
      this.commentService.destroyComment(comment.post, comment)  
    }
  }
}
