import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService) {}

  correo: string;
  pass: string;

  login() {
    this.userService.login(this.correo, this.pass);
  }

  ngOnInit() {}
}
