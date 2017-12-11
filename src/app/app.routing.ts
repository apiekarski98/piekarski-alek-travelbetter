import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {SearchComponent} from "./components/search/search.component";
import {SearchDetailsComponent} from "./components/search/search-details/search-details/search-details.component";
import {LoginComponent} from "./components/user/login/login/login.component";
import {RegisterComponent} from "./components/user/register/register/register.component";
import {ProfileComponent} from "./components/user/profile/profile/profile.component";
import {AuthGuard} from "./services/auth-guard.service";
import {UserListComponent} from "./components/user/user-list/user-list/user-list.component";
import {UserEditComponent} from "./components/user/user-edit/user-edit/user-edit.component";
import {AdminService} from "./services/admin.service.client";
import {UserCreateComponent} from "./components/user/user-create/user-create/user-create.component";

const APP_ROUTES: Routes = [
  {path: '', component: SearchComponent},
  {path: 'search', component: SearchComponent},
  {path: 'user/:userId/search', component: SearchComponent, canActivate: [AuthGuard]},
  {path: 'search/:countryName', component: SearchDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile/:userId', component: ProfileComponent},
  {path: 'user/:userId', component: ProfileComponent},
  {path: 'user/:userId/users', component: UserListComponent},
  {path: 'admin/user/:userId/users/:otherId', component: UserEditComponent, canActivate: [AdminService]},
  {path: 'admin/user/:userId/users/new', component: UserCreateComponent, canActivate: [AdminService]},
  {path: 'test', component: TestComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
