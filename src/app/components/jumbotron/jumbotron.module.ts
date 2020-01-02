import { NgModule } from '@angular/core'
import { JumbotronComponent} from './jumbotron.component'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [JumbotronComponent],
  exports: [JumbotronComponent],
  imports: [CommonModule],
})

export class JumbotronModule { }
