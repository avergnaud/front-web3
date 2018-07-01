import { Component, OnInit } from "@angular/core";
import { Web3Service } from "../web3.service";
import { UsersHttpService } from "../users-http.service";
import "rxjs/add/operator/mergeMap";
import { AuthHttpService } from "../auth-http.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  jsonWebToken = "PAS DE JWT";

  constructor(
    private usersHttpService: UsersHttpService,
    private web3Service: Web3Service,
    private authHttpService: AuthHttpService
  ) {}

  ngOnInit() {}

  onClickMe() {
    this.web3Service
      .getWalletAddress()
      .then(address => {
        return this.usersHttpService.getNonce(address);
      })
      .then(response => {
        return this.web3Service.handleSignMessage(
          response["publicAddress"],
          response["nonce"]
        );
      })
      .then(retour => {
        return this.authHttpService.auth(retour["publicAddress"], retour["signature"])
      })
      .then(jwt => {
        this.jsonWebToken = jwt;
      });
  }
}
