import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageGuard, LoginPageGuard} from './guards';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule),
        canActivate: [LoginPageGuard]
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
        canActivate: [HomePageGuard]
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
