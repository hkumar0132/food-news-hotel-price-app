import { Injectable } from '@angular/core';
import {
  Stitch,
  RemoteMongoDatabase,
  StitchAppClient,
  UserPasswordCredential,
  AnonymousCredential,
  RemoteMongoClient} from 'mongodb-stitch-browser-sdk';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })

export class DBService {
  db: RemoteMongoDatabase;
  client: StitchAppClient;
  error : boolean = false;
  loggedIn : boolean = false;
  auth;
  user_id;

  constructor(private router : Router) {

  }

  initDB() : any {

    this.client = Stitch.initializeDefaultAppClient('projecthotel-askji');
    
    this.auth = this.client.auth;

    this.db = this.client
    .getServiceClient(RemoteMongoClient.factory, 'abc')
    .db('ng-db');

  }

  register(details: { email : string, password : string }) {
    this.error = false
    this.client.auth.loginWithCredential(new AnonymousCredential())
    .catch(err =>  {
      this.error = true
      console.log(err)
     })
    .then(() => setTimeout(() => {
      this.db.collection('details').insertOne(details);
      if(!this.error) {
        alert('Successfully registered!')
        // this.router.navigate(['/login']);
      }
      else 
        alert('Can\'t register')
    }, 0));
  }

  addTodo(details: { email: string, password : string }) {
    this.client.auth.loginWithCredential(new AnonymousCredential()).then(() => {
      this.db.collection('details').insertOne(details);
    });
  }

  // getTodos() {
  //   return this.client.auth
  //     .loginWithCredential(new AnonymousCredential())
  //     .then(() => {
  //       return this.db
  //         .collection<{ email : string, password : string }>('details')
  //         .find()
  //         .asArray();
  //     });
  // }

  login(email, password) {
    
    this.error = false;

    if(this.loggedIn) {
      alert('Already logged in');
      return;
    }
    const app = Stitch.defaultAppClient

    app.auth.loginWithCredential(new UserPasswordCredential(email, password))
      .catch(() => {
        this.error = true;
      })
      .then(() => { setTimeout(() => {  
        if(!this.error) {
          alert('You have been logged in!')
          this.router.navigate(['/home'])
          this.loggedIn = true
        }
        else 
          alert('Trouble login in')
        }, 10)
      });

  }
}