import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {PoolHeaderComponent} from './pool-header/pool-header.component';
import {SharedModule} from './shared/modules/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {LogoutComponent} from './logout/logout.component';
import {LoginComponent} from './login/login.component';
import {NewsComponent} from './home/news/news.component';
import {AdministrationComponent} from './administration/administration.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    PoolHeaderComponent,
    HomeComponent,
    LogoutComponent,
    LoginComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],

})
export class AppModule {
}
