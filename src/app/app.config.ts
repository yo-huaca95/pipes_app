import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import localeEs from '@angular/common/locales/es-CO';
import localeEUS from '@angular/common/locales/en-ES';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs,'es');
registerLocaleData(localeEUS,'us');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide:LOCALE_ID,
      useValue:'es'
    }
  ]
};
