import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImovelRoutingModule } from './imovel-routing.module';
import { ImovelComponent } from './imovel/imovel.component';


@NgModule({
  declarations: [
    ImovelComponent
  ],
  imports: [
    CommonModule,
    ImovelRoutingModule
  ]
})
export class ImovelModule { }
