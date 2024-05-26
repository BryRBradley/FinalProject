import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from '../profile/profile.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ProfileComponent],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  users: User[] = [];
  newUser: User = new User();
  selected: User | null = null;
  editUser: User | null = null;
  loggedInUser: User | null = null;
  //---------------------------------------------------------------------

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService : UserService, private authService: AuthService) {

  }

  //---------------------------------------------------------------------

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  //---------------------------------------------------------------------


  displayUser(userPage: User) {
    this.selected = userPage;
    let url: string = '[profile]/' + userPage.id
    this.router.navigateByUrl(url);
  }

  reload() {
    this.userService.index().subscribe({
      next: (dbSkillVilla: User[]) => {
        console.log(dbSkillVilla)
        this.users = dbSkillVilla
      },
      error: () => {
        console.log("something went wrong with reload()");
      }
    })
  }
  
  getLoggedInUser(): void{
   this.authService.getLoggedInUser().subscribe({
    next: (user : User) => {
      this.editUser = user;
      console.log(user);
    },
    error: (err) => {
      console.log("something went wrong updating user")}
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
        console.log("something went wrong updating user")}
    });
  }

  setUpdatedUserProfile() {
    this.editUser = Object.assign({}, this.selected);
  }

  deleteUserProfile(id: number) {
    this.userService.destroy(id).subscribe({
      next: () => {
      this.reload();
      },
      error: () => {}
    });
  }
}
