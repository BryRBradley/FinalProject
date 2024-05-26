import { Component } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  loggedInUser: User | null = null;
  users: User[] = [];
  newUser: User = new User();
  selected: User | null = null;
  editUser: User | null = null;

  constructor(private authService: AuthService, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.getuserProfile();
  }

  getuserProfile(): void {
    this.authService.getLoggedInUser().subscribe({
      next: (loggedInUser) => {
        this.loggedInUser = loggedInUser;
      },
      error: (error) => {
        console.log(
          'Error requesting user profile data. ProfileComponent.getUserProfile()'
        );
        this.router.navigateByUrl('login');
      },
    });
  }


}
