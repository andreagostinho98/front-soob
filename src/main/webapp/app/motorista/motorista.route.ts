import { Route } from '@angular/router';
import { CadastroMotoristaComponent } from 'app/cadastro-motorista/cadastro-motorista.component';

export const MOTORISTA_ROUTE: Route = {
  path: 'motorista',
  component: CadastroMotoristaComponent,
  data: {
    authorities: [],
    pageTitle: 'home.title'
  }
};
