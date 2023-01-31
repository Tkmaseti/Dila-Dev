import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TsepangComponent } from './components/tsepang/tsepang.component';
import { DildaarComponent } from './components/dildaar/dildaar.component';
import { CebokaziComponent } from './components/cebokazi/cebokazi.component';
import { ElonaComponent } from './components/elona/elona.component';
import { AzoleComponent } from './components/azole/azole.component';
import { ClementineComponent } from './components/clementine/clementine.component';
import { FaithComponent } from './components/faith/faith.component';
import { RafeeqahComponent } from './components/rafeeqah/rafeeqah.component';
import { SigcobileComponent } from './components/sigcobile/sigcobile.component';
import { NwabisaComponent } from './components/nwabisa/nwabisa.component';
import { SiyonelaComponent } from './components/siyonela/siyonela.component';
import { FrontendComponent } from './components/category/frontend/frontend.component';
import { SongezoComponent } from './components/songezo/songezo.component';
import { DesingerComponent } from './components/category/desinger/desinger.component';
import { CybersecurityComponent } from './components/category/cybersecurity/cybersecurity.component';
import { SasComponent } from './components/category/sas/sas.component';
import { BackendComponent } from './components/category/backend/backend.component';
import { TestingComponent } from './components/category/testing/testing.component';
import { ChrisComponent } from './components/chris/chris.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "tsepang", component: TsepangComponent},
  {path: "dildaar", component: DildaarComponent},
  {path: "cebokazi", component: CebokaziComponent},
  {path: "elona", component: ElonaComponent},
  {path: "azole", component: AzoleComponent},
  {path: "clementine", component: ClementineComponent},
  {path: "faith", component: FaithComponent},
  {path: "rafeeqah", component: RafeeqahComponent},
  {path: "sigcobile", component: SigcobileComponent},
  {path: "nwabisa", component: NwabisaComponent},
  {path: "siyonela", component: SiyonelaComponent},
  {path: "songezo", component: SongezoComponent},
  {path: "chris", component: ChrisComponent},
  {path: "login", component: LoginComponent},



  // cybersecurity
  {path: "cybersecurity", component: CybersecurityComponent},

  {path: "cybersecurity/tsepang", component: TsepangComponent},
  {path: "cybersecurity/siyonela", component: SiyonelaComponent},

  //Designer

  {path: "designer", component: DesingerComponent},
  {path: "designer/sigcobile", component: SigcobileComponent},

  //Frontend
  {path: "frontend", component: FrontendComponent},

  {path: "frontend/clementine", component: ClementineComponent},
  {path: "frontend/dildaar", component: DildaarComponent},
  {path: "frontend/cebokazi", component: CebokaziComponent},
  {path: "frontend/nwabisa", component: NwabisaComponent},
  {path: "frontend/chris", component: ChrisComponent},



  //SAS

  {path: "sas", component: SasComponent},

  {path: "sas/rafeeqah", component: RafeeqahComponent},
  {path: "sas/elona", component: ElonaComponent},

  //Testing
  {path: "testing", component: TestingComponent},

  {path: "testing/faith", component: FaithComponent},

  //Backend
  {path: "backend", component: BackendComponent},

  {path: "backend/dildaar", component: DildaarComponent},
  {path: "backend/tsepang", component: TsepangComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
