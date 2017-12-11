import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {TestComponent} from './components/test/test.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import {SearchComponent} from './components/search/search.component';
import {SearchService} from "./services/search.service.client";
import {SearchDetailsComponent} from './components/search/search-details/search-details/search-details.component';
import {SharedService} from "./services/shared.service.client";
import {LoginComponent} from './components/user/login/login/login.component';
import {RegisterComponent} from './components/user/register/register/register.component';
import {ProfileComponent} from './components/user/profile/profile/profile.component';
import {UserService} from "./services/user.service.client";
import {AuthGuard} from "./services/auth-guard.service";
import {UserListComponent} from './components/user/user-list/user-list/user-list.component';
import {AdminService} from "./services/admin.service.client";
import {UserCreateComponent} from './components/user/user-create/user-create/user-create.component';
import {UserEditComponent} from './components/user/user-edit/user-edit/user-edit.component';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    SearchComponent,
    SearchDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UserListComponent,
    UserCreateComponent,
    UserEditComponent
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
    SearchService,
    SharedService,
    UserService,
    AdminService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
