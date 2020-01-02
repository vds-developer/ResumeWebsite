import { NgModule } from '@angular/core'
import { LifePage } from './life.component'

import { SectionModule } from '../../components/section/section.module'
import { ImageBlockModule } from '../../components/image-block/image_block.module'
import { JumbotronModule } from '../../components/jumbotron/jumbotron.module'



@NgModule({
  declarations: [LifePage],
  imports:
    [
      SectionModule,
      ImageBlockModule,
      JumbotronModule
    ],
  exports: [LifePage]
})

export class LifePageModule {}
