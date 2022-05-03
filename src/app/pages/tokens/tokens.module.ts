import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { TableVolumeComponent } from './table-volume/table-volume.component';
import { TableOperationsComponent } from './table-operations/table-operations.component';
import { TableCapitalComponent } from './table-capital/table-capital.component';
import { StylesTableDirective } from 'src/app/shared/directives/styles-table.directive';

@NgModule({
  declarations: [ TableVolumeComponent, TableOperationsComponent, TableCapitalComponent, StylesTableDirective ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class TokensModule {
}
