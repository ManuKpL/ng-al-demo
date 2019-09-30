import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import './styles.scss';

declare const PRODUCTION: boolean;
if (PRODUCTION) {
  enableProdMode();
}

// start an angular module as an application for the browser
platformBrowserDynamic().bootstrapModule(AppModule);
