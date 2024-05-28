import { CommentsComponent } from './../comments/comments.component';
import { Post } from './../../models/post';
import { Comment } from './../../models/comment';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild, output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PostService } from "../../services/post.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CommentsComponent
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  @ViewChild(CommentsComponent) childComponent!: CommentsComponent;
  @Output() selectedPost = new EventEmitter<Post | null>();
  @Input() communityId!: number

  userId: number = 0;

  posts: Post[] = [];
  newPost: Post | null = null;
  selected: Post | null = null;

  editPost: Post | null = null;
  currentCommunityId: number = 0;

  selectedPostComments: Post | null = null;
  newComment: Comment | null = null;
  expandedPosts: number[] = [];
deleteComment: any;
  //---------------------------------------------------------------------

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService, private authService: AuthService) { }

  //---------------------------------------------------------------------

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      {
        next: (params) => {
          let postIdStr = params.get("communityId");
          if (postIdStr) {
            let postId = parseInt(postIdStr);
            if (isNaN(postId)) {
              this.router.navigateByUrl("invalid");
            } else (
              this.currentCommunityId = Number(postIdStr),
              this.reload(Number(postIdStr))
            )
          }
        }
      });
      this.validUser()
  }

  //---------------------------------------------------------------------

  sendSelectedPost(post: Post | null) {
    this.selected = post
    this.selectedPost.emit(this.selected);
  }

  displaySinglePost(postPage: Post) {
    this.selected = postPage;
    let url: string = '[post]/' + postPage.id
    this.router.navigateByUrl(url);
  }

  reload(communityId: number): void {
    this.postService.index(communityId.toString()).subscribe({
      next: (posts: Post[]) => {
        this.posts = posts;
      },
      error: (err) => {
        console.log("Error loading posts", err);
      }
    });
  }

  createNewPost() {
    this.newPost = new Post();
  }

  addPost(post: Post, communityId: number): void {
    this.postService.create(post, communityId).subscribe({
      next: () => {
        this.reload(communityId);
        this.newPost = null;
      },
      error: (err) => {
        console.log("Error adding post", err);
      }
    });
  }


  updatePost(post: Post, communityId: number): void {
    this.postService.update(post, communityId).subscribe({
      next: () => {
        this.reload(this.currentCommunityId);
        this.editPost = null;
        this.router.navigate(['/community', communityId]);
      },
      error: (err) => {
        console.log("Error updating post", err);
      }
    });
  }

  deletePost(communityId: number, postId: number): void {
    this.postService.destroy(communityId, postId).subscribe({
      next: () => {
        this.reload(this.currentCommunityId);
      },
      error: (err) => {
        console.log("Error deleting post", err);
      }
    });
  }

  setEditPost(post: Post): void {
    this.editPost = Object.assign({}, post);
  }

  log(anything: any) {
    console.log(anything)
  }


  generateNewComment() {
    this.newComment = new Comment();
  }

  showComments(post: Post) {
    this.selectedPostComments = post
    this.childComponent.getComments(post);
  }

  toggleComments(post: Post): void {
    const index = this.expandedPosts.indexOf(post.id);
    if (index !== -1) {
      this.expandedPosts.splice(index, 1);
    } else {
      this.expandedPosts.push(post.id);
      this.showComments(post)
    }
  }

  isCommentsVisible(post: Post): boolean {
    return this.expandedPosts.includes(post.id);
  }

  validUser() {
    this.authService.getLoggedInUser().subscribe({
      next: (user: User) => { this.userId = user.id; console.log(user) },
      error: () => { }
    })
  }
}

