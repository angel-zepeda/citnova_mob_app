import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //username = '';
  //email = '';
  username = localStorage.getItem("correo");
  email = localStorage.getItem("contra");

  constructor(private nav: NavController) {
    //let info = this.auth.getUserInfo();
    //this.username = info['name'];
    //this.email = info['email'];
  }


}
