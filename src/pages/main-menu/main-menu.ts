import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-main-menu',
  templateUrl: 'main-menu.html',
})
export class MainMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) { }

    quejaEmpre():void {
      localStorage.setItem('currentAreaId', "1");
      this.navCtrl.push('FormPage');
    }
    quejaGesti():void {
      localStorage.setItem('currentAreaId', "2");
      this.navCtrl.push('FormPage');
    }
    quejaDif():void {
      localStorage.setItem('currentAreaId', "3");
      this.navCtrl.push('FormPage');
    }
    quejaInfra():void {
      localStorage.setItem('currentAreaId', "4");
      this.navCtrl.push('FormPage');
    }
    quejaDesa():void {
      localStorage.setItem('currentAreaId', "5");
      this.navCtrl.push('FormPage');
    }

    public login() {
      this.navCtrl.push('LoginPage');
    }

    public profile() {
      this.navCtrl.push('ProfilePage');
    }



}
