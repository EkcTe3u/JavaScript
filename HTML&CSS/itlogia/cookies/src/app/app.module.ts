import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpBackend, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClient],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
