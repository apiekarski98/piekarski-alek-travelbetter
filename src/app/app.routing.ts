/**
 * Created by sesha on 7/26/17.
 */

import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {SearchComponent} from "./components/search/search.component";
import {SearchDetailsComponent} from "./components/search/search-details/search-details/search-details.component";

const APP_ROUTES: Routes = [
  {path: '', component: SearchComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search/:countryName', component: SearchDetailsComponent},
  {path: 'test', component: TestComponent},
  {path: 'website', component: WebsiteListComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
