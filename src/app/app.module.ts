import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BankListComponent } from './bank-list/bank-list.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: BankListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    BankListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
