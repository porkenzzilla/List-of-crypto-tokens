import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TokensComponent } from './tokens.component'
import { PrettyPipe } from './prettyNum.pipe';

@NgModule({
  declarations: [ TokensComponent, PrettyPipe ],
  imports: [
    CommonModule
  ]
})
export class TokensModule { }
