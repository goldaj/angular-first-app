import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { DirectivesModule } from '../directives/directives.module';
import { TimeServiceService } from '../services/time-service.service';



@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    InfoComponent
  ]
})
export class UsersModule { }
