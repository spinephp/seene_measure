import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAnalysisComponent } from './data-analysis.component';
import { DataAnalysisService } from './data-analysis.service';
import { TranslatePipe } from '../translate.pipe';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [DataAnalysisComponent],
  imports: [
    MaterialModule,
    CommonModule
  ],
  providers: [DataAnalysisService,
]

})
export class DataAnalysisModule { }
