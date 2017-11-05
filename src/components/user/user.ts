import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';


@Component({
  selector: 'user',
  templateUrl: 'user.html'
})
export class UserComponent implements OnInit{

  text: string;
  users: any[];

  constructor(private userService: UserService) {
    console.log('Hello UserComponent Component');
    this.text = 'Hello User Component';
  }

  ngOnInit(){
    this.userService.getUsers().subscribe(users =>{
      console.log(users);
    });
  }
}
