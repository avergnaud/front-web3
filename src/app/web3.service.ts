import { Injectable } from "@angular/core";
import * as Web3 from 'web3';

declare let window: any;

@Injectable()
export class Web3Service {
  private web3: any;
  private web3Provider: null;

  constructor() {
    if (!window.web3) {
      window.alert("Please install MetaMask first.");
      return;
    }
    this.web3Provider = window.web3.currentProvider;
    this.web3 = new Web3(this.web3Provider);
  }

  getWalletAddress(): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve(this.web3.eth.coinbase.toLowerCase())
    })
  }

  handleSignMessage(publicAddress: string, nonce: string): Promise<any> {
    return new Promise((resolve, reject) =>
      this.web3.personal.sign(
        this.web3.fromUtf8(`I am signing my one-time nonce: ${nonce}`),
        publicAddress,
        (err, signature) => {
          if (err) return reject(err);
          return resolve({ publicAddress, signature });
        }
      )
    );
  }
}
