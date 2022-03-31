import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImovelComponent } from 'src/app/imovel/imovel/imovel.component';

const routes: Routes = [
  { path: '', component: ImovelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImovelRoutingModule { }
