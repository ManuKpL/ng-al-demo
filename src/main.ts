import 'reflect-metadata';
import 'zone.js';

import { AppModule } from './app/app.module';
import './styles.scss';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule);
