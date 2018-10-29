import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TariffComponent } from './tariff/tariff.component';
import { TariffListComponent } from './tariff-list/tariff-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TariffComponent,
    TariffListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
