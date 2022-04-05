import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { TableVolumeComponent } from './table-volume/table-volume.component';
import { TableOperationsComponent } from './table-operations/table-operations.component';
import { TableCapitalComponent } from './table-capital/table-capital.component';

@NgModule({
  declarations: [ TableVolumeComponent, TableOperationsComponent, TableCapitalComponent ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class TokensModule {
}
