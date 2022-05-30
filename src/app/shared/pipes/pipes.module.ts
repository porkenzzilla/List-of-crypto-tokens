import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrettyPipe} from './pretty-num/pretty-num.pipe';
import { ImageTokenPipe } from './image-token/image-token.pipe';
import {DetailsImageTokenPipe} from "./details-image-token/details-image-token.pipe";



@NgModule({
  declarations: [PrettyPipe, ImageTokenPipe, DetailsImageTokenPipe],
  imports: [
    CommonModule
  ],
  exports: [PrettyPipe, ImageTokenPipe, DetailsImageTokenPipe]
})
export class PipesModule { }
