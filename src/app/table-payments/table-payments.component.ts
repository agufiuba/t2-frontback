import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { UserService } from "../user.service";

@Component({
  selector: "app-table-payments",
  templateUrl: "./table-payments.component.html",
  styleUrls: ["./table-payments.component.css"]
})
export class TablePaymentsComponent implements OnInit {
  constructor(
    public afAuth: AngularFireAuth,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.page = 1;
    this.afAuth.authState.subscribe(x => {
      if (x) {
        this.getPayments();
      }
    });
  }

  getPayments() {
    this.userService.payments().then(ps => {
      this.payments = ps;
      this.paymentsSize = this.payments.length;
      this.getPage(1);
      this.numberOfPages = Array(Math.ceil(this.payments.length / 100))
        .fill(0)
        .map((x, i) => i + 1);
    });
  }

  getPage(n) {
    this.pagePayments = [];
    this.limitStart = (n - 1) * 100;
    this.limitEnd = Math.min(this.limitStart + 100, this.payments.length);
    var i = this.limitStart;
    while (i >= this.limitStart && i < this.limitEnd) {
      this.pagePayments.push(this.payments[i]);
      i++;
    }
  }

  changePage(n) {
    this.page = n;
    this.getPage(n);
  }

  refresh() {
    this.page = 1;
    this.payments = [];
    this.pagePayments = [];
    this.getPayments();
  }
  limitStart;
  limitEnd;
  page;
  pagePayments;
  payments;
  paymentsSize;
  numberOfPages;
}
