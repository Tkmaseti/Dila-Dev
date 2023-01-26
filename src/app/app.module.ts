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
import { NavbarComponent } from './components/navbar/navbar.component';
import { NwabisaComponent } from './components/nwabisa/nwabisa.component';
import { SiyonelaComponent } from './components/siyonela/siyonela.component';
import { SongezoComponent } from './components/songezo/songezo.component';
import { FrontendComponent } from './components/category/frontend/frontend.component';
import { RouterLink } from '@angular/router';
import { SasComponent } from './components/category/sas/sas.component';
import { TestingComponent } from './components/category/testing/testing.component';
import { CybersecurityComponent } from './components/category/cybersecurity/cybersecurity.component';
import { BackendComponent } from './components/category/backend/backend.component';
import { DesingerComponent } from './components/category/desinger/desinger.component';
import { NtlantlaComponent } from './components/ntlantla/ntlantla.component';
import { ChrisComponent } from './components/chris/chris.component';

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
    AzoleComponent,
    NavbarComponent,
    NwabisaComponent,
    SiyonelaComponent,
    SongezoComponent,
    FrontendComponent,
    SasComponent,
    TestingComponent,
    CybersecurityComponent,
    BackendComponent,
    DesingerComponent,
    NtlantlaComponent,
    ChrisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
