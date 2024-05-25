import { Community } from './../../models/community';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent implements OnInit {


  communities: Community[] = [
    new Community(1, 'community 1', 'The start of commun 1', 'https://gwrench.com/wp-content/uploads/2023/03/AutomotiveVista.jpeg', ''),
    new Community(2, 'community 2', 'The start of commun 2', 'https://gwrench.com/wp-content/uploads/2023/03/AutomotiveVista.jpeg', ''),
    new Community(3, 'community 3', 'The start of commun 3', 'https://gwrench.com/wp-content/uploads/2023/03/AutomotiveVista.jpeg', ''),
    new Community(4, 'community 4', 'The start of commun 4', 'https://gwrench.com/wp-content/uploads/2023/03/AutomotiveVista.jpeg', ''),
    new Community(5, 'community 5', 'The start of commun 5', 'https://gwrench.com/wp-content/uploads/2023/03/AutomotiveVista.jpeg', ''),
    new Community(6, 'community 6', 'The start of commun 6', 'https://gwrench.com/wp-content/uploads/2023/03/AutomotiveVista.jpeg', ''),
    new Community(7, 'community 7', 'The start of commun 7', 'https://gwrench.com/wp-content/uploads/2023/03/AutomotiveVista.jpeg', ''),
    new Community(8, 'community 8', 'The start of commun 8', 'https://gwrench.com/wp-content/uploads/2023/03/AutomotiveVista.jpeg', '')

  ]

  selected: Community | null = null;

  //---------------------------------------------------------------------

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  //---------------------------------------------------------------------

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      {
        next: (params) => {
          console.log(params.get("communityId"))
          let communityIdStr = params.get("communityId");
          if (communityIdStr) {
            let communityId = parseInt(communityIdStr);
            if (isNaN(communityId)) {
              this.router.navigateByUrl("invalid");
            } else (
              console.log(this.selected)
              
              //this.showComunity(CommunityId)
            )
          }
        }
      });
  }

  //---------------------------------------------------------------------


  displayCommunity(communityPage: Community) {
    this.selected = communityPage;
    let url: string = 'community/' + communityPage.id
    this.router.navigateByUrl(url);
  }

  showCommunity(communityId:number){
    // this.communityService.showCommunity(communityId).subscribe({
    //   next: (community) => {
    //     this.selected = community;
    //   },
    //   error: () => { }
    // })
  }
}
