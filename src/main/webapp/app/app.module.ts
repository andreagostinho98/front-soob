import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SoobSharedModule } from 'app/shared/shared.module';
import { SoobCoreModule } from 'app/core/core.module';
import { SoobHomeModule } from './home/home.module';
import { SoobEntityModule } from './entities/entity.module';
import { ComoUsarModule } from 'app/como-usar/como-usar.module';
import { ServicosModule } from 'app/servicos/servicos.module';
import { CadastroUsuarioModule } from 'app/cadastro-usuario/cadastro-usuario.module';
import { LoginUsuarioModule } from 'app/login-usuario/login-usuario.module';
import { AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { MotoristaModule } from 'app/motorista/motorista.module';
import { ConfirmacaoModule } from 'app/confirmacao/confirmacao.module';
import {MainComponent} from "app/layouts/main/main.component";
import {NavbarComponent} from "app/layouts/navbar/navbar.component";
import {ErrorComponent} from "app/layouts/error/error.component";
import {PageRibbonComponent} from "app/layouts/profiles/page-ribbon.component";
import {ActiveMenuDirective} from "app/layouts/navbar/active-menu.directive";
import {FooterComponent} from "app/layouts/footer/footer.component";

export function socialConfigs(): any {
  const config = new AuthServiceConfig([
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('Key')
    },
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('Key')
    }
  ]);
  return config;
}

@NgModule({
  imports: [
    BrowserModule,
    SoobSharedModule,
    SoobCoreModule,
    SoobHomeModule,
    ComoUsarModule,
    SoobEntityModule,
    ServicosModule,
    CadastroUsuarioModule,
    LoginUsuarioModule,
    SocialLoginModule,
    MotoristaModule,
    ConfirmacaoModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  exports: [],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: socialConfigs
    }
  ],
  bootstrap: [MainComponent]
})
export class SoobAppModule {}
