import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {TestComponent} from './components/test/test.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {WebsiteService} from './services/website.service.client';
import {SearchComponent} from './components/search/search.component';
import {SearchService} from "./services/search.service.client";
import {SearchDetailsComponent} from './components/search/search-details/search-details/search-details.component';
import {SharedService} from "./services/shared.service.client";
import {LoginComponent} from './components/user/login/login/login.component';
import {RegisterComponent} from './components/user/register/register/register.component';
import {ProfileComponent} from './components/user/profile/profile/profile.component';
import {UserService} from "./services/user.service.client";
import {AuthGuard} from "./services/auth-guard.service";

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    WebsiteListComponent,
    SearchComponent,
    SearchDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [
    TestService,
    WebsiteService,
    SearchService,
    SharedService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
