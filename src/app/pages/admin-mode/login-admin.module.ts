import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { LoginAdminComponent } from './login-admin.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AddTokenComponent } from './add-token/add-token.component';
import { AddChangesCapitalComponent } from './add-token/add-changes-capitalization/add-changes-capital.component';
import { AddChangesVolumeComponent } from './add-token/add-changes-volume/add-changes-volume.component';
import { AddChangesOperationsComponent } from './add-token/add-changes-operations/add-changes-operations.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [ LoginAdminComponent, AddTokenComponent, AddChangesCapitalComponent, AddChangesVolumeComponent, AddChangesOperationsComponent ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, AppRoutingModule, MatSelectModule, MatSnackBarModule
  ],
  providers: [
    {provide: MatSnackBar}
  ]
})
export class LoginAdminModule { }