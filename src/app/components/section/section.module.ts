import { NgModule } from '@angular/core'
import { TitleSectionComponent } from './title/title.component';
import { ImageListSectionComponent } from './image_list/image_list.component';
import { VideoSectionComponent } from './video/video.component';
import { DetailSectionComponent } from './detail/detail.component';
import { CarouselSectionComponent} from './carousel/carousel.component'
import { ImageBackgroundSectionComponent} from './image_background/image_background.component'


import { ImageBlockModule } from '../image-block/image_block.module';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [TitleSectionComponent,
    ImageListSectionComponent,
    VideoSectionComponent,
    DetailSectionComponent,
    CarouselSectionComponent,
    ImageBackgroundSectionComponent],
  exports: [TitleSectionComponent,
    ImageListSectionComponent,
    VideoSectionComponent,
    DetailSectionComponent,
    CarouselSectionComponent,
    ImageBackgroundSectionComponent],
  imports: [ImageBlockModule, CommonModule]
})

export class SectionModule { }
