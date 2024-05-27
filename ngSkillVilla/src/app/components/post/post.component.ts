import { Post } from './../../models/post';
import { Comment } from './../../models/comment';
import { Component, EventEmitter, Input, OnInit, Output, output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PostService } from "../../services/post.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PostCategory } from "../../models/post-category";



@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  @Output() selectedPost = new EventEmitter<Post | null>();
  @Input() communityId!: number

  posts: Post[] = [];
  newPost: Post | null = null;
  selected: Post | null = null;
  selectedPostComments: Comment[] = [];

  editPost: Post | null = null;
  currentCommunityId: number = 0;


  commentedPost: Post | null = null;
  newComment: Comment | null = null;

  //---------------------------------------------------------------------

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService) {

  }
  // ngOnInit(): void {
  //   this.reload(this.communityId);
  // }
  //---------------------------------------------------------------------

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      {
        next: (params) => {
          console.log(params.get("communityId"))
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

  
  generateNewComment(){
    this.newComment = new Comment();
  }

  addComment(post: Post, comment:Comment){
    console.log("postcomp: " + post)
    this.postService.createComment(post, comment).subscribe({
      next: (resp)=>{
        console.log("postComp - addComment(): " + resp);
      },
      error:(err)=>{"Unable to add comment : postService addcomment()"}
    })
  }
}

