import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdministrationComponent} from './administration.component';
import {SharedModule} from '../shared/modules/shared.module';
import {RouterModule} from '@angular/router';

const ROUTES = [
  {
    component: AdministrationComponent,
    path: '',

  }
];

@NgModule({
  declarations: [AdministrationComponent],
  entryComponents: [],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})

export class AdministrationModule { }
