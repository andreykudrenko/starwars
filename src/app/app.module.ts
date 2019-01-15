import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { FilterComponent } from './main-content/filter/filter.component';
import { HeroListComponent } from './main-content/hero-list/hero-list.component';

@NgModule({
  declarations: [
      AppComponent,
      SidebarComponent,
      HeaderComponent,
      MainContentComponent,
      FilterComponent,
      HeroListComponent,
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      MatSidenavModule,
      BrowserAnimationsModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
