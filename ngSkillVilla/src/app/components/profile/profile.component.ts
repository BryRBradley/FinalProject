import { Component } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, EditProfileComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  loggedInUser: User | null = null;
  users: User[] = [];
  newUser: User = new User();
  selected: User | null = null;
  editUser: User | null = null;
  reload: any;

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
        this.router.navigateByUrl('editProfile');
      },
    });
  }

  getEditProfile(loggedInUser: User){
    this.authService.getLoggedInUser().subscribe({
      next: (loggedInUser) => {
        this.loggedInUser = loggedInUser;
        this.router.navigateByUrl('editProfile');
      },
      error: (error) => {
        console.log(
          'Error requesting user profile data. ProfileComponent.getUserProfile()'
        );
        this.router.navigateByUrl('profile');
      },
    });
  }

  updateUserProfile(user : User){
    this.userService.update(user, user.id).subscribe({
      next: (user) => {
        this.reload();
        this.selected = null;
        this.editUser = null;
      },
      error: (err) => {
        console.log("something went wrong updating user");
      }
    });
  }

  setUpdatedUserProfile() {
    this.editUser = Object.assign({}, this.selected);
  }


}
