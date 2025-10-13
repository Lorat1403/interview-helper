import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { httpInterceptorProviders } from './app.interceptors.provider';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(HttpClient),
  httpInterceptorProviders,],
  
};
