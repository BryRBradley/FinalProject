import { Component } from "@angular/core";
import { Post } from "../../models/post";
import { ActivatedRoute, Router } from "@angular/router";
import { PostService } from "../../services/post.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  posts: Post[] = [];
  newPost: Post = new Post();
  selected: Post | null = null;
  editPost: Post | null = null;
  //---------------------------------------------------------------------

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService : PostService) {

  }

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
              this.reload(postIdStr)
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

  reload(communityId: string) {
    this.postService.index(communityId).subscribe({
      next: (posts: Post[]) => {
        if(posts != null){this.posts = posts}
      },
      error: (err) => {
        console.log("something went wrong with Post.Component reload()")
      }
    })
  }

  // addPost(post : Post){
  //   this.postService.create(post).subscribe({
  //     next: (post) => {
  //       this.reload();
  //       this.newPost = new Post();
  //     },
  //     error: (err) => {
  //       console.log("something went wrong adding post")
  //     }
  //   })
  // }
  
  // updatePost(post : Post){
  //   this.postService.update(post, post.id).subscribe({
  //     next: (post) => {
  //       this.reload();
  //       this.selected = null;
  //       this.editPost = null;
  //     },
  //     error: (err) => {
  //       console.log("something went wrong updating post")}
  //   });
  // }

  // setUpdatedPost() {
  //   this.editPost = Object.assign({}, this.selected);
  // }

  // deleteCommunity(id: number) {
  //   this.postService.destroy(id).subscribe({
  //     next: () => {
  //     this.reload();
  //     },
  //     error: () => {}
  //   });
  // }

}
