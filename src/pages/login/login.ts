import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;

  private url = 'https://citnova.herokuapp.com/api/v1/sign_in';

  userLogin = [
    {"auth":
      {"email": "",
        "password": ""
    }
    }
  ]

  constructor(private nav: NavController, private http: HttpClient, private alert: AlertController, public loadingCtrl: LoadingController) { }

  public createAccount() {
    this.nav.push('RegisterPage');
  }
  ionViewDidLoad() {
  }

  inicioSesion() {
    this.http.post(this.url, this.userLogin[0])
    .subscribe(res => {
      if (res[0].msg == 'Invalid email address or password') {
        this.errorAlert();
      }else {
        localStorage.setItem('username', res[1].username);
        localStorage.setItem('token', res[0]);
        switch(res[1].username) {
          case 'innovacion':
            this.presentLoadingDefault();
            this.nav.push('InnovationPage');
            break;
          case 'gestiont':
            this.presentLoadingDefault();
            this.nav.push('TalentPage');
            break;
          case 'difusiond':
            this.presentLoadingDefault();
            this.nav.push('DifusionPage');
            break;
          case 'desarcyt':
            this.presentLoadingDefault();
            this.nav.push('DcientPage');
            break;
          case 'infrascyt':
            this.presentLoadingDefault();
            this.nav.push('InfraPage');
            break;
          default:
            this.presentLoadingDefault();
            this.nav.push('MainMenuPage');
            break;
        }
      }
    });
  }

    presentAlert() {
    let alert = this.alert.create({
      title: 'Welcome!',
      buttons: ['Ok']
    });
    alert.present();
  }

    errorAlert() {
      let alert = this.alert.create({
        title: 'Error',
        subTitle: 'Invalid email or password, try again',
        cssClass: '',
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
