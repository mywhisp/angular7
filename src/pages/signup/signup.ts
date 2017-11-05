import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { WelcomePage } from '../welcome/welcome';
import { AngularFireAuth } from "angularfire2/auth";
import { AuthService } from '../../services/auth.service';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  email: string;
  password: string;
  

  constructor(private authService: AuthService, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  OnSubmit(){
    this.authService.register(this.email, this.password)
    .then((res)=>{
      this.navCtrl.push(TabsPage)
    })
    .catch((err)=>{
      console.log("Error");
      this.navCtrl.push(SignupPage);
    });
  }
}
