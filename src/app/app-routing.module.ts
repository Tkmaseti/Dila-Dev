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
  {path: "nwabisa", component: NwabisaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
