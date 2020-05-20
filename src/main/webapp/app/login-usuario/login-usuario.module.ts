import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SoobSharedModule } from 'app/shared/shared.module';
import { InputMaskModule } from 'primeng';
import { LoginUsuarioComponent } from 'app/login-usuario/login-usuario.component';
import { LOGIN_USUARIO_ROUTE } from 'app/login-usuario/login-usuario.route';
import { LoginUsuarioService } from 'app/login-usuario/login-usuario.service';

@NgModule({
  imports: [RouterModule.forChild([LOGIN_USUARIO_ROUTE]), SoobSharedModule, InputMaskModule],
  exports: [LoginUsuarioComponent],
  providers: [LoginUsuarioService],
  declarations: [LoginUsuarioComponent]
})
export class LoginUsuarioModule {}
