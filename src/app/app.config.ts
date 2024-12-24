import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { BrowserAnimationsModule, provideAnimations } from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { provideToastr, ToastrModule } from "ngx-toastr";
import { JWTInterceptor } from "./interceptor/jwt.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule,
      ToastrModule.forRoot({ maxOpened: 1, autoDismiss: true, easeTime: 100 })
    ),
    provideToastr(),
    provideAnimations(),
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
  ],
};
