import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { UserService } from "../user.service";
import { Rule } from "../rule";

@Component({
  selector: "app-rules",
  templateUrl: "./rules.component.html",
  styleUrls: ["./rules.component.css"]
})
export class RulesComponent implements OnInit {
  constructor(
    public afAuth: AngularFireAuth,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(x => {
      if (x) {
        this.getRules();
      }
    });
  }

  getRules() {
    this.userService.rules().then(rs => {
      this.rules = rs;
      this.rules.forEach(r => {
        this[r.descripcion] = r.valor;
      });
    });
  }

  actualizarRules() {
    this.rules.forEach(r => {
      r.valor = this[r.descripcion];
    });
    this.userService.actualizarRules(this.rules);
  }

  rules;
  pMinimo;
  pPPK;
  cMinimo;
  cPPK;
  primerViaje;
}
