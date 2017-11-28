import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import { User } from "./user";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";
import "rxjs/add/operator/toPromise";

var direccion = "http://192.168.99.100:4000";

@Injectable()
export class UserService {
  constructor(private http: Http, private afAuth: AngularFireAuth) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.logged = true;
      } else {
        this.logged = false;
      }
    });
  }

  getUsers(): Promise<User[]> {
    return this.http
      .get(direccion + "/users")
      .toPromise()
      .then(response => {
        response.json().data as User[];
      })
      .catch(this.handleError);
  }

  login() {
    this.afAuth.auth
      .signInWithEmailAndPassword("admin@uber.com", "admin123")
      .catch(function(error) {
        console.log(error);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error);
    return Promise.reject(error.message || error);
  }
}
