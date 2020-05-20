import { Route } from '@angular/router';
import { ConfirmacaoComponent } from 'app/confirmacao/confirmacao.component';

export const CONFIRMACAO_ROUTE: Route = {
  path: 'success-email',
  component: ConfirmacaoComponent,
  data: {
    authorities: [],
    pageTitle: 'home.title'
  }
};
