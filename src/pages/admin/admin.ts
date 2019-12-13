import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  private token = {tk : localStorage.getItem('token')}
  public userName = localStorage.getItem("username");
  public area = localStorage.getItem("currentAreaId");
  private url = 'http://localhost:3000/api/v1/complains';
  content:any = [];

  constructor(public nav: NavController, public navParams: NavParams, private http: HttpClient) {}

  ionViewDidLoad() {
    this.http.get<any>(this.url, {headers : {'Authorization': 'Bearer ' + this.token.tk}})
    .subscribe( res => {
      this.content = res;
    });
  }

}
