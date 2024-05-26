import { Community } from './../../models/community';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunityService } from '../../services/community.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    CommonModule, FormsModule
  ],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent implements OnInit {

  communities: Community[] = [
    //   new Community(1, 'community 1', 'The start of commun 1', 'https://gwrench.com/wp-content/uploads/2023/03/AutomotiveVista.jpeg', ''),
    //   new Community(2, 'community 2', 'The start of commun 2', 'https://gwrench.com/wp-content/uploads/2023/03/AutomotiveVista.jpeg', ''),
    //   new Community(3, 'community 3', 'The start of commun 3', 'https://gwrench.com/wp-content/uploads/2023/03/AutomotiveVista.jpeg', ''),
    //   new Community(4, 'community 4', 'The start of commun 4', 'https://gwrench.com/wp-content/uploads/2023/03/AutomotiveVista.jpeg', ''),
    //   new Community(5, 'community 5', 'The start of commun 5', 'https://gwrench.com/wp-content/uploads/2023/03/AutomotiveVista.jpeg', ''),
    //   new Community(6, 'community 6', 'The start of commun 6', 'https://gwrench.com/wp-content/uploads/2023/03/AutomotiveVista.jpeg', ''),
    //   new Community(7, 'community 7', 'The start of commun 7', 'https://gwrench.com/wp-content/uploads/2023/03/AutomotiveVista.jpeg', ''),
    //   new Community(8, 'community 8', 'The start of commun 8', 'https://gwrench.com/wp-content/uploads/2023/03/AutomotiveVista.jpeg', '')
  ];

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private commService: CommunityService,private authService: AuthService) { }

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
    //this.selected = community;
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

  updateCommunity(): void {
    this.editing = true;
    this.creatingNew = false;
    if (this.selected) {
      this.formData = { ...this.selected };
    }
  }

  cancel(): void {
    this.creatingNew = false;
    this.editing = false;
    this.selected = null;
  }

  // onSubmit(): void {
  //   if (this.creatingNew) {
  //     const newCommunity = new Community(
  //       this.communities.length + 1,
  //       this.formData.name,
  //       this.formData.description,
  //       this.formData.imageUrl,
  //       this.formData.discordUrl,
  //       this.formData.enabled ? 1 : 0,
  //       this.formData.enabled ? this.selected!.updatedAt : undefined, // Pass updatedAt if enabled is true, otherwise undefined
  //       this.formData.enabled ? (this.selected!.createdAt?.toString() || undefined) : undefined // Pass createdAt if enabled is true, otherwise undefined
  //     );
  //     this.communities.push(newCommunity);
  //     this.creatingNew = false;
  //   } else if (this.editing && this.selected) {
  //     const index = this.communities.findIndex(c => c.id === this.selected!.id);
  //     if (index !== -1) {
  //       this.communities[index] = {
  //         ...this.formData, id: this.selected!.id, enabled: true, locationId: this.selected!.locationId,
  //         updatedAt: this.selected!.updatedAt,
  //         createdAt: this.selected!.createdAt
  //       };
  //       this.editing = false;
  //     }
  //   }
  //   this.selected = null;
  //   this.formData = {
  //     name: '',
  //     description: '',
  //     discordUrl: '',
  //     imageUrl: '',
  //     enabled: true
  //   };
  // }

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
