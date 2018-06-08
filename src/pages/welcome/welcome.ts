import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  database : SQLiteObject;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private sqlite: SQLite) {
    platform.ready().then(() => {

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

    // Initialisation de la BD

  initDb() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.database = db;
        this.createNumberTable();
      })
      .catch(e => console.log(e));
  }

    // Création de la table
    
  createNumberTable(): any {
    this.database.executeSql('CREATE TABLE IF NO EXIST number (id INTEGER PRIMARY KEY, numb INTEGER', {})
      .then(() => console.log('Executed SQL'))
      .catch(e => console.log(e));

  }

}
