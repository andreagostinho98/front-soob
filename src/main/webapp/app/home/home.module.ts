import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SoobSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { ComoUsarModule } from 'app/como-usar/como-usar.module';
import { ServicosModule } from 'app/servicos/servicos.module';
import { CardModule, DialogModule, InputMaskModule } from 'primeng';
import { LeadComponentDialogComponent } from 'app/lead-component-dialog/lead-component-dialog.component';
import { CadastroUsuarioModule } from 'app/cadastro-usuario/cadastro-usuario.module';
import { LoginUsuarioModule } from 'app/login-usuario/login-usuario.module';
import { CadastroMotoristaModule } from 'app/cadastro-motorista/cadastro-motorista.module';
import { LoginMotoristaModule } from 'app/login-motorista/login-motorista.module';
import { MotoristaModule } from 'app/motorista/motorista.module';
import { ConfirmacaoModule } from 'app/confirmacao/confirmacao.module';

@NgModule({
  imports: [
    SoobSharedModule,
    RouterModule.forChild([HOME_ROUTE]),
    ComoUsarModule,
    ServicosModule,
    CardModule,
    DialogModule,
    InputMaskModule,
    CadastroUsuarioModule,
    LoginUsuarioModule,
    CadastroMotoristaModule,
    LoginMotoristaModule,
    MotoristaModule,
    ConfirmacaoModule
  ],
  exports: [LeadComponentDialogComponent],
  declarations: [HomeComponent, LeadComponentDialogComponent]
})
export class SoobHomeModule {}
