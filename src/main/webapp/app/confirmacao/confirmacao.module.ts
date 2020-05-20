import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SoobSharedModule } from 'app/shared/shared.module';
import { CONFIRMACAO_ROUTE } from 'app/confirmacao/confirmacao.route';
import { ConfirmacaoComponent } from 'app/confirmacao/confirmacao.component';

@NgModule({
  imports: [RouterModule.forChild([CONFIRMACAO_ROUTE]), SoobSharedModule],
  exports: [ConfirmacaoComponent],
  declarations: [ConfirmacaoComponent]
})
export class ConfirmacaoModule {}
