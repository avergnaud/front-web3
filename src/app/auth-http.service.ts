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
export class AuthHttpService {

  constructor(private http: HttpClient) { }

  auth(claimedAddress: string, signedMssage: string): Promise<any> {
    return this.http
      .post<any>(
        // `https://${apiHost}/slack-commands-server/users?wallet_address=${walletAddress}`,
        `http://${apiHost}:5001/auth`,
        {"claimed_address": claimedAddress, "signed_message": signedMssage},
        httpOptions
      )
      .toPromise();
  }

}
