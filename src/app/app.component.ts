import { Component, ViewChild } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";
import { UserService } from "./user.service";
import "rxjs/add/operator/toPromise";
import { environment } from "../environments/environment"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public afAuth: AngularFireAuth, public userService: UserService) {
    afAuth.authState.subscribe((x) => {
      if (x) {
        environment.uid = x.uid
        this.uid = x.uid
      }
    })
  }
  title = "app";
  uid;
  public admin;
}
