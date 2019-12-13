import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController, LoadingController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private url = "https://citnova.herokuapp.com/api/v1/sign_up";

  newUser = [
    {"user":
      {"email": "",
        "password": "",
        "password_confirmation": "",
        "username": ""
    }
    }
  ]
  constructor(private nav: NavController, private alert: AlertController, private http: HttpClient, public loadingCtrl: LoadingController) { }

  registrar(){
    this.http.post(this.url, this.newUser[0])
    .subscribe(res => {
      if (JSON.stringify(res).includes('Account created')) {
      this.presentLoadingDefault();
        this.nav.push('LoginPage');
      }else {
        this.errorAlert();
      }
    });
  }

  presentAlert() {
    let alert = this.alert.create({
      title: 'New account created',
      buttons: ['Ok']
    });
    alert.present();
  }

  errorAlert() {
    let alert = this.alert.create({
      title: 'Error',
      subTitle: 'Invalid email or password, try again',
      buttons: ['Ok']
    });
    alert.present();
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2800);
  }

}
