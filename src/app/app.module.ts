import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsModule } from 'src/app/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [ComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
