import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrettyPipe} from './pretty-num/prettyNum.pipe';



@NgModule({
  declarations: [PrettyPipe],
  imports: [
    CommonModule
  ],
  exports: [PrettyPipe]
})
export class PipesModule { }
