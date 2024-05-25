import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { RouterLink } from '@angular/router';
import { CommunityComponent } from '../community/community.component';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    LoginComponent,
    RegisterComponent,
    CommunityComponent
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

}
