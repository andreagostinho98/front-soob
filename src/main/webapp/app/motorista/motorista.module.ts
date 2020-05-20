import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SoobSharedModule } from 'app/shared/shared.module';
import { InputMaskModule, SpinnerModule } from 'primeng';
import { MOTORISTA_ROUTE } from 'app/motorista/motorista.route';
import { MotoristaComponent } from 'app/motorista/motorista.component';

@NgModule({
  imports: [RouterModule.forChild([MOTORISTA_ROUTE]), SoobSharedModule, InputMaskModule, SpinnerModule],
  exports: [MotoristaComponent],
  declarations: [MotoristaComponent]
})
export class MotoristaModule {}
