import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { TabsPage } from '../../pages/tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage implements User{

   

  email: string;
  password: string;
  

  text: string;

  constructor(private authService: AuthService, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

login(){
  this.authService.login(this.email, this.password)
  .then((res)=>{
    this.navCtrl.push(TabsPage)
  })
  .catch((err)=>{
    console.log("Error");
    this.navCtrl.push(WelcomePage);
  });
}

  signup(){
    this.navCtrl.push(SignupPage)
  }

}
