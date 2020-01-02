import { NgModule } from '@angular/core';

import { ContactPage } from './contact.component'
import { JumbotronModule } from '../../components/jumbotron/jumbotron.module'
import { SectionModule } from '../../components/section/section.module'

@NgModule({
  imports: [JumbotronModule, SectionModule],
  declarations: [ContactPage],
  exports: [ContactPage]

})

export class ContactPageModule { }
