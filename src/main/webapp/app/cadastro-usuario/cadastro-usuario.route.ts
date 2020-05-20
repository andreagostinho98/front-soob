import { Route } from '@angular/router';
import { CadastroUsuarioComponent } from 'app/cadastro-usuario/cadastro-usuario.component';

export const CADASTRO_USUARIO_ROUTE: Route = {
  path: 'cadastro-usuario',
  component: CadastroUsuarioComponent,
  data: {
    authorities: [],
    pageTitle: 'home.title'
  }
};
