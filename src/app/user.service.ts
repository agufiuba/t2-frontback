import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import { User } from "./user";
// import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import "rxjs/add/operator/toPromise";

var config = {
  apiKey: "AIzaSyDAkSl9LK4IHsaJynBY8uutraaqluEfLII",
  authDomain: "t2t2-9753f.firebaseapp.com",
  databaseURL: "https://t2t2-9753f.firebaseio.com/"
};
firebase.initializeApp(config);
var direccion = "http://localhost:4000";

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  getUsers(): Promise<User[]> {
    return this.http
      .get(direccion + "/users")
      .toPromise()
      .then(response => {
        console.log(response)
        response.json().data as User[];
      })
      .catch(this.handleError);
  }

  login() {
    console.log(firebase.auth())
    if(firebase.auth().currentUser) {
      console.log("logged")
      console.log(firebase.auth().currentUser)
    } else {
      console.log("not logged")
    }
    firebase.auth().signInWithEmailAndPassword("admin@uber.com", "admin123").catch(function(error) {
      console.log(error)
    });
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error);
    return Promise.reject(error.message || error);
  }
}
