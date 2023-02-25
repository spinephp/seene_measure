import { NgModule } from '@angular/core';
import { TranslatePipe } from '../translate.pipe';


@NgModule({
  declarations: [TranslatePipe],
  imports: [
  ],
  exports:  [TranslatePipe]
})
export class PipeModule { }
export { TranslatePipe };

