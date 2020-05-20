import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ComoUsarComponent } from 'app/como-usar/como-usar.component';
import { SoobSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from 'app/home/home.route';
import { HomeComponent } from 'app/home/home.component';

export const COMO_USAR: Route = {
  path: 'comousar',
  component: ComoUsarComponent,
  data: {
    authorities: [],
    pageTitle: 'home.title'
  }
};

@NgModule({
  imports: [SoobSharedModule, RouterModule.forChild([COMO_USAR])],
  exports: [ComoUsarComponent],
  declarations: [ComoUsarComponent]
})
export class ComoUsarModule {}
