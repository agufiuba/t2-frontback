import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import { User } from "./user";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";
import "rxjs/add/operator/toPromise";

var direccion = "http://localhost:4000";

@Injectable()
export class UserService {
  constructor(private http: Http, private afAuth: AngularFireAuth) {
    firebase.auth().onAuthStateChanged(function (user) {
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
      .then(response => { return response.json() as User[]; })
      .catch(this.handleError);
  }

  login() {
    this.afAuth.auth
      .signInWithEmailAndPassword("admin@uber.com", "admin123")
      .catch(this.handleError);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  isAdmin(uid: String) {
    return this.http
      .get(direccion + "/permisos/" + uid)
      .toPromise()
      .then(response => {
        return response
      })
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error);
    return Promise.reject(error.message || error);
  }
}
