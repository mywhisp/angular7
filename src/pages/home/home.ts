import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { WelcomePage } from '../welcome/welcome';
import { AngularFireAuth } from "angularfire2/auth";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  loggedInUser:string;
  isLoggedIn:boolean;

    constructor(
      private authService: AuthService, 
      public navCtrl: NavController, 
      public navParams: NavParams) 
      {}
  

  ngOnInit(){

    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
    } else { this.isLoggedIn = false;
    }
    });
    
  }
}