import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

	private token = {tk : localStorage.getItem('token')}
  	private url = 'https://citnova.herokuapp.com/api/v1/current_user/complains';
    private url2 = 'https://citnova.herokuapp.com/api/v1/answers';
    answer:any = [];
  	content:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
  	 this.http.get<any>(this.url, {headers : {'Authorization': 'Bearer ' + this.token.tk}})
      .subscribe(res => {
      	this.content = res;
      	console.log(res);
    });

    this.http.get<any>(this.url2, {headers : {'Authorization': 'Bearer ' + this.token.tk}})
    .subscribe(res => {
      this.answer = res;
      console.log(this.answer);
    });
	}

   updateWindow(){
     location.reload(true);
  }

}
