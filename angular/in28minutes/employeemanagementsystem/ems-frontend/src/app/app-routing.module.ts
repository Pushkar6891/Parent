import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProductComponent } from './components/product/product.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/:username', component: DashboardComponent, canActivate: [RouteGuardService] },
  { path: 'listProducts', component: ListProductComponent, canActivate: [RouteGuardService] },
  { path: 'products', component: ProductComponent, canActivate: [RouteGuardService] },
  /*
  { path: 'products/:id', component: TodoComponent, canActivate: [RouteGuardService] },
  */
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }