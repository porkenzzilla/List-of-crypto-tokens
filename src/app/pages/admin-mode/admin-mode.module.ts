import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

import { AdminModeComponent } from './admin-mode.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AddTokenComponent } from './add-token/add-token.component';
import { AddChangesCapitalComponent } from './add-token/add-changes-capitalization/add-changes-capital.component';
import { AddChangesVolumeComponent } from './add-token/add-changes-volume/add-changes-volume.component';
import { AddChangesOperationsComponent } from './add-token/add-changes-operations/add-changes-operations.component';

@NgModule({
  declarations: [ AdminModeComponent, AddTokenComponent, AddChangesCapitalComponent, AddChangesVolumeComponent, AddChangesOperationsComponent ],
  imports: [
    CommonModule, FormsModule, AppRoutingModule, MatSelectModule
  ]
})
export class AdminModeModule { }