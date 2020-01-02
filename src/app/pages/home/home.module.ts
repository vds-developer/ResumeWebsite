import { NgModule } from '@angular/core'
import { HomePage } from './home.component'

import { SectionModule } from '../../components/section/section.module'
import { ImageBlockModule } from '../../components/image-block/image_block.module'
import { JumbotronModule } from '../../components/jumbotron/jumbotron.module'

@NgModule({
  declarations: [HomePage],
  imports:
    [
    SectionModule,
    ImageBlockModule,
    JumbotronModule
    ],
  exports: [HomePage]
})

export class HomePageModule { };
