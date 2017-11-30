import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../user";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  constructor(private userService: UserService) {}

  users: User[];

  getUsers(): void {
    this.userService.getUsers().then(users => {
      console.log(users);
      this.users = users;
    });
  }

  click(): void {
    console.log(this.users);
  }

  ngOnInit() {
    this.getUsers();
  }

  type(t) {
    if (t == "1") return "Pasajero"
    else return "Chofer"
  }
}
