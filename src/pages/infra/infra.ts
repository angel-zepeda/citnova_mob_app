import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-infra',
  templateUrl: 'infra.html',
})
export class InfraPage {
  private token = {tk : localStorage.getItem('token')}
  private url = 'https://citnova.herokuapp.com/api/v1/complain/area/4';
  private url2 = 'https://citnova.herokuapp.com/api/v1/answers';
  content:any = [];
  answer:any = [];
  currentId = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }
  ionViewDidLoad() {
    this.http.get<any>(this.url, {headers : {'Authorization': 'Bearer ' + this.token.tk}})
    .subscribe( res => {
      this.content = res;                                                                                                                             });
      console.log(this.content);
    this.http.get<any>(this.url2, {headers : {'Authorization': 'Bearer ' + this.token.tk}})
    .subscribe( res => {
      this.answer = res;
      console.log(this.answer);
    });
  }
  mostrarId(id) {
    localStorage.setItem("complain_id", id);
    this.navCtrl.push("AnswerPage");

  }

   updateWindow(){
     location.reload(true);
  }
}
