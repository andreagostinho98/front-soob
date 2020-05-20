import { Route } from '@angular/router';
import { LoginUsuarioComponent } from 'app/login-usuario/login-usuario.component';

export const LOGIN_USUARIO_ROUTE: Route = {
  path: 'login-usuario',
  component: LoginUsuarioComponent,
  data: {
    authorities: [],
    pageTitle: 'home.title'
  }
};
