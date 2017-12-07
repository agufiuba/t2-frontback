import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { UserService } from "../user.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  constructor(
    public afAuth: AngularFireAuth,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(x => {
      if (x) {
        this.getServers();
      }
    });
  }

  getServers() {
    this.userService.getServers().then(ss => {
      this.ss = ss;
    });
  }

  logout(id) {
    this.userService.logoutServer(id).then(() => {
      this.getServers();
    });
  }
  ss;
}
