import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { BooleanPipe } from './boolean.pipe';



@NgModule({
  declarations: [HighlightDirective, BooleanPipe],
  imports: [
    CommonModule
  ],
  exports : [
    HighlightDirective,
    BooleanPipe
  ]
})
export class DirectivesModule { }
