/**
 * Created by sesha on 7/26/17.
 */

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {SearchComponent} from "./components/search/search.component";

const APP_ROUTES: Routes = [
  {path: '', component: SearchComponent},
  {path: 'test', component: TestComponent},
  {path: 'website', component: WebsiteListComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
