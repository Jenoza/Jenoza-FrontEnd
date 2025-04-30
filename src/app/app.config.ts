import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation
} from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation()
      // Remove scrollPositionRestoration for Angular v19
    ),
    provideHttpClient(
      withInterceptors([
        // Optional interceptors
      ])
    ),
    provideAnimations()
  ]
};
