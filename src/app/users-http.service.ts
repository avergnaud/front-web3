import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/toPromise";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
// https;
// const apiHost: string = "allstack.fr";
const apiHost: string = "localhost";

@Injectable()
export class UsersHttpService {
  constructor(private http: HttpClient) {}

  getNonce(walletAddress): Promise<any> {
    if (walletAddress == null) {
      console.log("erreur nonce");
    }
    return this.http
      .get<any>(
        // `https://${apiHost}/slack-commands-server/users?wallet_address=${walletAddress}`,
        `http://${apiHost}:5001/users?wallet_address=${walletAddress}`,
        httpOptions
      )
      .toPromise();
  }
  
}
