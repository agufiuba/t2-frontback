import { Component, OnInit } from "@angular/core";
import { environment } from "../../environments/environment";
import { UserService } from "../user.service";
import { User } from "../user";
import { Permiso } from "../permiso";
import { Payment } from "../payment";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  constructor(private userService: UserService) {}

  users: User[];
  nombre: string;
  apellido: string;
  correo: string;
  tipo: number;
  permisos: Permiso[];
  payments: Payment[];
  seeing: number = 1;

  getUsers(): void {
    this.userService.getUsers().then(users => {
      this.users = users;
    });
  }

  getPayments() {
    this.userService.payments().then(ps => {
      this.payments = ps;
    });
  }

  getPermisos() {
    this.userService.permisos().then(ps => {
      this.permisos = ps;
    });
  }

  ngOnInit() {
    this.getUsers();
    this.getPermisos();
  }

  type(t) {
    if (t == "1") return "Pasajero";
    else return "Chofer";
  }

  create() {
    var u = {
      name: this.nombre,
      last_name: this.apellido,
      mail: this.correo,
      type: this.tipo
    };

    this.userService.createUser(u).then(response => {
      this.getUsers();
    });
  }

  canCreate() {
    if (this.permisos) {
      var i = 0;
      var found = false;
      while (i < this.permisos.length && !found) {
        found = this.permisos[i].permiso == 2;
        i++;
      }
      return found;
    }
  }

  isAdmin() {
    if (this.permisos) {
      return this.permisos.length != 0;
    }
    return false;
  }

  canSeePayments() {
    if (this.permisos) {
      var i = 0;
      var found = false;
      while (i < this.permisos.length && !found) {
        found = this.permisos[i].permiso == 3;
        i++;
      }
      return found;
    }
  }

  seePayments() {
    this.getPayments();
    this.seeing = 2;
  }

  seeUsers() {
    this.seeing = 1;
  }
}
