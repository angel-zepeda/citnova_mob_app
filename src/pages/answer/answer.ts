import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import {Headers} from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-answer',
  templateUrl: 'answer.html',
})
export class AnswerPage {
  private token = {
    tk : localStorage.getItem('token')
  }
  private url = "https://citnova.herokuapp.com/api/v1/answer/create";
  ids = localStorage.getItem("complain_id");
  comment:any = [{
    "answer" : {
      "content" : "",
      "complain_id": this.ids
    }
   }
  ]


  head = {
    headers: new HttpHeaders ({"Content-Type": "application/json", "Authorization": "Bearer " + this.token.tk})
  };


  constructor(public navCtrl: NavController, private http: HttpClient,private alert: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {

  }

  public createAnswer() {
    this.http.post(this.url, this.comment[0], this.head)
    .subscribe(res => {
      this.presentAlert();
      this.navCtrl.pop();
    });
  }

  presentAlert() {
  let alert = this.alert.create({
    title: 'Respuesta creada!',
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
