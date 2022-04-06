import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home.component';
import { TableSiteComponent } from './components/table-site/table-site.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'table-site', component: TableSiteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
