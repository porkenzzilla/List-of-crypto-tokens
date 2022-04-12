import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrettyPipe} from './pretty-num/prettyNum.pipe';
import { ImageTokenPipe } from './image-token/image-token.pipe';



@NgModule({
  declarations: [PrettyPipe, ImageTokenPipe],
  imports: [
    CommonModule
  ],
  exports: [PrettyPipe, ImageTokenPipe]
})
export class PipesModule { }
