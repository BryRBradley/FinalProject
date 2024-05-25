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
          console.log(params.get("postId"))
          let postIdStr = params.get("postId");
          if (postIdStr) {
            let postId = parseInt(postIdStr);
            if (isNaN(postId)) {
              this.router.navigateByUrl("invalid");
            } else (
              console.log(this.selected)
              
              
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

  displayAllPosts() {
    this.postService.index().subscribe({
      next: (dbSkillVilla: Post[]) => {
        console.log(dbSkillVilla)
        this.posts = dbSkillVilla
      },
      error: (err) => {
        console.log("something went wrong loading posts")
      }
    })
  }

  reload() {
    this.postService.index().subscribe({
      next: (dbSkillVilla: Post[]) => {
        console.log(dbSkillVilla)
        this.posts = dbSkillVilla
      },
      error: (err) => {
        console.log("something went wrong with reload()")
      }
    })
  }

  addPost(post : Post){
    this.postService.create(post).subscribe({
      next: (post) => {
        this.reload();
        this.newPost = new Post();
      }
    })
  }
  
  updatePost(post : Post){
    this.postService.update(post, post.id).subscribe({
      next: (post) => {
        this.reload();
        this.selected = null;
        this.editPost = null;
      },
      error: () => {}
    });
  }

  setUpdatedPost() {
    this.editPost = Object.assign({}, this.selected);
  }

  deleteCommunity(id: number) {
    this.postService.destroy(id).subscribe({
      next: () => {
      this.reload();
      },
      error: () => {}
    });
  }

}
