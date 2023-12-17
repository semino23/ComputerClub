import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClient, HttpClientModule, provideHttpClient, withJsonpSupport } from '@angular/common/http';

provideHttpClient(withJsonpSupport())

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
