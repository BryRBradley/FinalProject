import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  //----------------------------------------------
  user: User = new User;
  //----------------------------------------------
  constructor(private authService:AuthService, private router:Router) { }
  //----------------------------------------------
  ngOnInit(): void {
  }
  //----------------------------------------------
  login(user:User):void{
    this.authService.login(user.username, user.password).subscribe({
      next:(user)=>{
        this.router.navigateByUrl('/home');
      },
      error:(error)=>{
        console.log("login Failed -- registerComp login()")
      }
    })
  }
}
