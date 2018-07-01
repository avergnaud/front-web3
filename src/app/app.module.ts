import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Web3Service } from './web3.service'
import { UsersHttpService } from './users-http.service'
import { AuthHttpService } from './auth-http.service';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MetamaskMovingLogoComponent } from './metamask-moving-logo/metamask-moving-logo.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MetamaskMovingLogoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [Web3Service, UsersHttpService, AuthHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
