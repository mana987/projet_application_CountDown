import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private sqlite: SQLite) {
    platform.ready().then(() => {
    
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  initDb(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    
    
        db.executeSql('create table danceMoves(name VARCHAR(32))', {})
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
    
    
      })
      .catch(e => console.log(e));
  }

}
