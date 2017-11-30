import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import { User } from "./user";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";
import "rxjs/add/operator/toPromise";
import { environment } from "../environments/environment";
import { Permiso } from "./permiso";
import { Payment } from "./payment";

var direccion = "https://t2-shared-server.herokuapp.com";

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
        return response.json() as User[];
      })
      .catch(this.handleError);
  }

  login(correo, pass) {
    this.afAuth.auth
      .signInWithEmailAndPassword(correo, pass)
      .catch(this.handleError);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error);
    return Promise.reject(error.message || error);
  }

  createUser(u) {
    return this.http
      .post(
        direccion +
          "/users?name=" +
          u.name +
          "&last_name=" +
          u.last_name +
          "&mail=" +
          u.mail +
          "&type=" +
          u.type,
        {}
      )
      .toPromise()
      .catch(this.handleError);
  }

  permisos() {
    return this.http
      .get(direccion + "/permisos/" + environment.uid)
      .toPromise()
      .then(response => {
        return response.json() as Permiso[];
      })
      .catch(this.handleError);
  }

  payments() {
    return this.http
      .get(direccion + "/payments")
      .toPromise()
      .then(response => {
        return response.json().items as Payment[];
      })
      // .then(ps => {
      //   var i = 0;
      //   while (i < ps.length) {
      //     ps[i].transaction_id = ps[i].transaction_id.substring(0, )
      //   }
      // })
      .catch(this.handleError);
  }
}
