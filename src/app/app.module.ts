import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyComponent } from './componente-b/body/body.component';
import { FooterComponent } from './componente-f/footer/footer.component';
import { HeaderComponent } from './componente-h/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: 
  [AppComponent,
   BodyComponent,
   HeaderComponent,
   FooterComponent]
})
export class AppModule { }
