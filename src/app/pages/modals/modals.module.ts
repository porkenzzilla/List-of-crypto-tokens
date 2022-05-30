import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { Details1Component } from './details-1/details-1.component';
import { Details2Component } from './details-2/details-2.component';
import {SharedModule} from '../../shared/shared.module';
import {MatButtonModule} from "@angular/material/button";
import { Details3Component } from './details-3-custom-token/details-3.component';
import { Details4Component } from './details-4-custom-token/details-4.component';

const MATERIAL_MODULES = [MatIconModule, MatFormFieldModule, MatDialogModule, MatIconModule, MatButtonModule];

@NgModule({
  declarations: [Details1Component, Details2Component, Details3Component, Details4Component],
  entryComponents: [],
  imports: [
    CommonModule, ...MATERIAL_MODULES, FormsModule, SharedModule
  ],

})
export class ModalsModule { }
