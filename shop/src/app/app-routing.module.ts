import { LoginComponent } from './Components/account/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Components/core/MainLayout/MainLayout.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'shop', component: MainLayoutComponent, children: [

      {
        path: 'cart', loadChildren: () => import('./Components/basket/basket.module')
          .then(mod => mod.BasketModule), data: { breadcrumb: { skip: true } }
      },
      {
        path: '', loadChildren: () => import('./Components/home/home.module')
          .then(mod => mod.HomeModule), data: { breadcrumb: { skip: true } }
      },

    ]
  },
  {
    path: 'login',
    loadChildren: () => import("./Components/account/account.module")
      .then(mod => mod.AccountModule), data: { breadcrumb: { skip: true } }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
