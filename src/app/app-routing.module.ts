import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LogoutComponent} from './logout/logout.component';
import {LoginComponent} from './login/login.component';
import {NewsComponent} from './home/news/news.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
    {
      //    canActivate: [StartCanActivateGuard],
      component: HomeComponent,
      path: ''
    },
    {
      component: LoginComponent,
      path: 'login'
    },
    {
      component: LogoutComponent,
      path: 'logout'
    },
    {
      //    canActivate: [AuthCanActivateGuard],
      component: HomeComponent,
      path: 'home'
    },
    {
//      canActivate: [AuthCanActivateGuard],
      component: NewsComponent,
      path: 'news'
    },
  {
 //   canLoad: [AuthCanActivateGuard, AdministrationsGuard],
    loadChildren: 'app/administration/administration.module#AdministrationModule',
    path: 'pool-administration'
  },
    {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'home'
    }
  ]
;

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {enableTracing: false, useHash: false})],
  providers: []
})
export class AppRoutingModule {
}

