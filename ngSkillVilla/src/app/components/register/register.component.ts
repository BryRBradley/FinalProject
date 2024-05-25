import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  newUser = new User();

  //--------------------------------------------
    constructor(){}

  //--------------------------------------------

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  //--------------------------------------------

  
  



}
