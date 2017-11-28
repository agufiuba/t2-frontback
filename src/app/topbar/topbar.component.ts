import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.css"]
})
export class TopbarComponent implements OnInit {
  constructor(private userService: UserService) {}

  logout() {
    console.log("logout")
    this.userService.logout();
  }

  ngOnInit() {}
}
