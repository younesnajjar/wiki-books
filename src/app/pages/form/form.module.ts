import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form/form.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    SharedModule
  ]
})
export class FormModule { }
