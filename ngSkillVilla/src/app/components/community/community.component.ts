import { Community } from './../../models/community';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunityService } from '../../services/community.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { PostComponent } from '../post/post.component';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    PostComponent
  ],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent implements OnInit {

  communities: Community[] = [];
  selected: Community | null = null;
  creatingNew = false;
  editing = false;
  newCommunity = new Community();
  editCommunity: Community | null = null;
  formData = {
    name: '',
    description: '',
    discordUrl: '',
    imageUrl: '',
    enabled: true
  };

  //--------------------------------------------------------------------------------------------

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private commService: CommunityService,private authService: AuthService, private postService: PostService) { }

  //--------------------------------------------------------------------------------------------

  ngOnInit(): void {
    this.reload()
    this.activatedRoute.paramMap.subscribe(params => {
      const communityIdStr = params.get("communityId");
      if (communityIdStr) {
        const communityId = parseInt(communityIdStr);
        if (!isNaN(communityId)) {
          this.showCommunity(communityId);
          // this.selected = this.communities.find(c => c.id === communityId) || null;
        } else {
          this.router.navigateByUrl("invalid");
        }
      }
    });
  }

  //--------------------------------------------------------------------------------------------

  displayCommunity(community: Community): void {
    let url: string = 'community/' + community.id
    this.router.navigateByUrl(url)
  }

  showCreateForm(): void {
    this.creatingNew = true;
    this.editing = false;
    this.formData = {
      name: '',
      description: '',
      discordUrl: '',
      imageUrl: '',
      enabled: true
    };
  }

  updateCommunity(community: Community) {
    this.commService.update(community, community.id).subscribe({
      next: (community) => {
        this.reload();
        this.selected = null;
        this.editCommunity = null;
      },
      error: (err) => {
        console.log('Error updating community');
      }
    });
  }

  setEditCommunity(){
    this.editCommunity = Object.assign({}, this.selected);
  }

  cancel(): void {
    this.creatingNew = false;
    this.editing = false;
    this.selected = null;
  }
  
  //------------------------------------------------------------------

  reload() {
    this.commService.index().subscribe({
      next: (dbCommunities: Community[]) => {
        console.log(dbCommunities)
        this.communities = dbCommunities
      },
      error: (err) => {
        console.log("something went wrong with reload()")
      }
    })
  }

  showCommunity(communityId: number) {
    this.commService.showCommunity(communityId).subscribe({
      next: (community) => {
        this.selected = community;
      },
      error: () => { }
    })


  }

  displayCommunities(): void {
      this.selected = null;
      this.router.navigateByUrl("community")
  }

  checkLogin():boolean{
    return this.authService.checkLogin();
  }

  createCommmunity(community:Community){
    console.log(community)
    this.commService.create(community).subscribe({
      next: (todo) => {
        this.reload();
        this.newCommunity = new Community();
      },
      error: () => { }
    })
  }

}
