import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/interface/app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/app.routes';
import { provideHttpClient } from '@angular/common/http'; // <-- Add this import

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig),
    provideHttpClient(),
  ],
}).catch((err) => console.error(err));
