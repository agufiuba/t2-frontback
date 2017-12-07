import { Component, ViewChild } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";
import { UserService } from "./user.service";
import "rxjs/add/operator/toPromise";
import { environment } from "../environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public afAuth: AngularFireAuth, public userService: UserService) {
    afAuth.auth.onAuthStateChanged(x => {
      if (x) {
        this.logged = true;
        environment.logged = true;
      } else {
        this.logged = false;
        environment.logged = false;
      }
    });
    afAuth.authState.subscribe(x => {
      if (x) {
        console.log(x);
        environment.uid = x.uid;
        this.uid = x.uid;
        this.logged = true;
        environment.logged = true;
      }
    });
  }
  title = "app";
  uid;
  logged;
  public admin;
}
