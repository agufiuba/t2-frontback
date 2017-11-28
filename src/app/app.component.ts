import { Component } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    afAuth.authState.subscribe(function(a) {
      console.log(a.uid);
      this.admin = db.object("admins/MvHD1b7yYxa7rzQ1XsxMVo6Yvgy1");
    });
  }
  title = "app";
  isAdmin2;
  isAdmin(uid: String) {
    // console.log(uid);
    // return this.db.object("admins/" + uid).valueChanges();
  }
}
