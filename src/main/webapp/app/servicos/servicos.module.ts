import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosComponent } from './servicos.component';
import { Route, RouterModule } from '@angular/router';
import { ComoUsarComponent } from 'app/como-usar/como-usar.component';
import { SoobSharedModule } from 'app/shared/shared.module';
import { CarouselModule, TooltipModule } from 'primeng';
import { MatTooltipModule } from '@angular/material/tooltip';

export const SERVICOS: Route = {
  path: 'servico',
  component: ServicosComponent,
  data: {
    authorities: [],
    pageTitle: 'home.title'
  }
};

@NgModule({
  imports: [SoobSharedModule, RouterModule.forChild([SERVICOS]), CarouselModule, TooltipModule, MatTooltipModule],
  exports: [ServicosComponent],
  declarations: [ServicosComponent]
})
export class ServicosModule {}
