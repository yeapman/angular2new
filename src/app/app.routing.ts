import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'app-add-order', component: AddOrderComponent},
  {path: 'app-order-list', component: OrderListComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
