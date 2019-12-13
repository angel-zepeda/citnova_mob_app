import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import {Headers} from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-innovation',
  templateUrl: 'innovation.html',
})

export class InnovationPage {
  private token = {tk : localStorage.getItem('token')}
  private url = 'https://citnova.herokuapp.com/api/v1/complain/area/1';
  private url2 = 'https://citnova.herokuapp.com/api/v1/answers';
  content:any = [];
  answer:any = [];
  currentId = '';

  head= {
    headers: new HttpHeaders ({"Content-Type": "application/json", "Authorization": "Bearer " + this.token.tk})
  };

  constructor(public nav: NavController, public navParams: NavParams, private http: HttpClient) {
  }
  ionViewDidLoad() {
     this.http.get<any>(this.url, {headers : {'Authorization': 'Bearer ' + this.token.tk}})
     .subscribe( res => {
       console.log(res);
       this.content = res;
     });
     this.http.get<any>(this.url2, {headers : {'Authorization': 'Bearer ' + this.token.tk}})
     .subscribe( res => {
       this.answer = res;
       console.log(this.answer);
     });
   }

   mostrarId(id) {
     localStorage.setItem("complain_id", id);
     this.nav.push("AnswerPage");
   }


    updateWindow(){
      location.reload(true);
   }
}
