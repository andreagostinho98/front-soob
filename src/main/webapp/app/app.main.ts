import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SoobAppModule } from './app.module';


if (module['hot']) {
  module['hot'].accept();
}

platformBrowserDynamic()
  .bootstrapModule(SoobAppModule, { preserveWhitespaces: true })
  // eslint-disable-next-line no-console
  .then(() => console.log('Application started'))
  .catch(err => console.error(err));
