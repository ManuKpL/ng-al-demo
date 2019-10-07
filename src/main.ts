import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import assets
import './favicon.ico';

// import angular module to be used as application
import { AppModule } from './app/app.module';

// declare the global variable provided by webpack define plugin
// to allow usage in TS file without compiler error
declare const PRODUCTION: boolean;
if (PRODUCTION) {
  enableProdMode(); // disable angular development mode
}

// start an angular module as an application for the browser
platformBrowserDynamic().bootstrapModule(AppModule);
