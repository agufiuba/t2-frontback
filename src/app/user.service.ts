import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import { User } from "./user";
import "rxjs/add/operator/toPromise";

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  getUsers(): Promise<User[]> {
    return this.http
      .get("http://192.168.99.100:3000/users")
      .toPromise()
      .then(response => {
        console.log(response)
        response.json().data as User[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error);
    return Promise.reject(error.message || error);
  }
}
