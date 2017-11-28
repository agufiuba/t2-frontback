import { Component, ViewChild } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";
import { UserService } from "./user.service";
import "rxjs/add/operator/toPromise";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public afAuth: AngularFireAuth, public userService: UserService) {
    // this.admin = afAuth.authState.toPromise().then(u => {
    //   return userService.isAdmin(u.uid).then(x => { return x[0] })
    // })
    this.admin = userService.getUsers().then(x => { return x[0] })
  }
  title = "app";
  public admin;
}
