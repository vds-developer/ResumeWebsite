import { NgModule } from '@angular/core'
import { ProjectPage } from './project.component'
import { ProjectItemModule } from '../../components/project-item/project_item.module'
import { JumbotronModule } from '../../components/jumbotron/jumbotron.module'

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProjectPage],
  imports: [ProjectItemModule, CommonModule, JumbotronModule, CommonModule],
  exports: [ProjectPage],

})

export class ProjectPageModule {}
