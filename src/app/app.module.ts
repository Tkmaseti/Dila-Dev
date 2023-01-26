import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TsepangComponent } from './components/tsepang/tsepang.component';
import { DildaarComponent } from './components/dildaar/dildaar.component';
import { FaithComponent } from './components/faith/faith.component';
import { CebokaziComponent } from './components/cebokazi/cebokazi.component';
import { ClementineComponent } from './components/clementine/clementine.component';
import { ElonaComponent } from './components/elona/elona.component';
import { SigcobileComponent } from './components/sigcobile/sigcobile.component';
import { RafeeqahComponent } from './components/rafeeqah/rafeeqah.component';
import { AzoleComponent } from './components/azole/azole.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TsepangComponent,
    DildaarComponent,
    FaithComponent,
    CebokaziComponent,
    ClementineComponent,
    ElonaComponent,
    SigcobileComponent,
    RafeeqahComponent,
    AzoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
