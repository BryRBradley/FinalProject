import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  newUser = new User();

  //--------------------------------------------
  constructor(private authService: AuthService, private router: Router) { 
  };

  //--------------------------------------------

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  register(newUser: User): void {
    //console.log(newUser)
    this.authService.register(newUser).subscribe({
      next:(user)=>{
        this.login(user)
      },
      error:(error)=>{
        console.log("Registration Failed -- registerComp register()")
      }
    })
  }
  
  login(userLoggingin:User){
    this.authService.login(this.newUser.username, this.newUser.password).subscribe({
      next:(user)=>{
        this.router.navigateByUrl('/home')
      },
      error:(error)=>{
        console.log("login Failed -- registerComp login()")
      }
    })
  }
  //--------------------------------------------

  
  



}
