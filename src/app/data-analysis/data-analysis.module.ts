import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAnalysisComponent } from './data-analysis.component';
import { DataAnalysisService } from './data-analysis.service';
import { TranslatePipe } from '../translate.pipe';

@NgModule({
  declarations: [DataAnalysisComponent],
  imports: [
    CommonModule
  ],
  providers: [DataAnalysisService,TranslatePipe,
]

})
export class DataAnalysisModule { }
