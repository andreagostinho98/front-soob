import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CadastroUsuarioComponent } from 'app/cadastro-usuario/cadastro-usuario.component';
import { CADASTRO_USUARIO_ROUTE } from 'app/cadastro-usuario/cadastro-usuario.route';
import { SoobSharedModule } from 'app/shared/shared.module';
import { CalendarModule, InputMaskModule } from 'primeng';

@NgModule({
  imports: [RouterModule.forChild([CADASTRO_USUARIO_ROUTE]), SoobSharedModule, InputMaskModule, CalendarModule],
  exports: [CadastroUsuarioComponent],
  declarations: [CadastroUsuarioComponent]
})
export class CadastroUsuarioModule {}
