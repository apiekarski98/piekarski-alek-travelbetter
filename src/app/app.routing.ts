import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {SearchComponent} from "./components/search/search.component";
import {SearchDetailsComponent} from "./components/search/search-details/search-details/search-details.component";
import {LoginComponent} from "./components/user/login/login/login.component";
import {RegisterComponent} from "./components/user/register/register/register.component";
import {ProfileComponent} from "./components/user/profile/profile/profile.component";
import {AuthGuard} from "./services/auth-guard.service";

const APP_ROUTES: Routes = [
  {path: '', component: SearchComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search/:countryName', component: SearchDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile/:userId', component: ProfileComponent},
  {path: 'user/:userId', component: ProfileComponent},
  {path: 'test', component: TestComponent},
  {path: 'website', component: WebsiteListComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
