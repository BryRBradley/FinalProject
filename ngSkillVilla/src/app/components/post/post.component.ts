import { Component, Input, OnInit } from "@angular/core";
import { Post } from "../../models/post";
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
export class PostComponent implements OnInit{
@Input () communityId!: number

  posts: Post[] = [];
  newPost: Post = new Post();
  selected: Post | null = null;
  editPost: Post | null = null;
  currentCommunityId: number=0;

  //---------------------------------------------------------------------

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService : PostService) {

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


  displaySinglePost(postPage: Post) {
    this.selected = postPage;
    let url: string = '[post]/' + postPage.id
    this.router.navigateByUrl(url);
  }

  // displayAllPosts(communityId:string) {
  //   this.postService.index(communityId).subscribe({
  //     next: (posts: Post[]) => {
  //       console.log(posts)
  //       this.posts = posts
  //     },
  //     error: (err) => {
  //       console.log("something went wrong loading posts")
  //     }
  //   })
  // }

  // reload(communityId: string) {
  //   this.postService.index(communityId).subscribe({
  //     next: (posts: Post[]) => {
  //       if(posts != null){this.posts = posts}
  //     },
  //     error: (err) => {
  //       console.log("something went wrong with Post.Component reload()")
  //     }
  //   })
  // }


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

  addPost(post: Post, communityId: number): void {
    this.postService.create(post, communityId).subscribe({
      next: () => {
        this.reload(communityId);
        this.newPost = new Post();
      },
      error: (err) => {
        console.log("Error adding post", err);
      }
    });
  }

 


  updatePost(post: Post): void {
    this.postService.update(post, post.id).subscribe({
      next: () => {
        this.reload(this.communityId);
        this.editPost = null;
      },
      error: (err) => {
        console.log("Error updating post", err);
      }
    });
  }

  deletePost(id: number): void {
    this.postService.destroy(id).subscribe({
      next: () => {
        this.reload(this.communityId);
      },
      error: (err) => {
        console.log("Error deleting post", err);
      }
    });
  }

  setEditPost(post: Post): void {
    this.editPost = { ...post };
  }
}

