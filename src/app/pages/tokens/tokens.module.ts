import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TokensComponent} from './tokens.component'
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [TokensComponent ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TokensModule {
}
