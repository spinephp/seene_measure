import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterService } from './register.service';
import { PipeModule, TranslatePipe } from '../pipe/pipe.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    MaterialModule,
    PipeModule,
    CommonModule
  ],
  providers: [
    TranslatePipe,
    RegisterService
  ]
})
export class RegisterModule { }
