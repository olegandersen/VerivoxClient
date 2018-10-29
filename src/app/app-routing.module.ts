import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TariffListComponent } from './tariff-list/tariff-list.component';
import { TariffComponent } from './tariff/tariff.component';

const routes: Routes = [
  { path: '', component: TariffListComponent },
  { path: 'tariff/:id', component: TariffComponent },
  { path: '**', component: TariffListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
