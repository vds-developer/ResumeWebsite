import { NgModule } from "@angular/core"

import { ResumePage } from "./resume.component"
import { JumbotronModule } from '../../components/jumbotron/jumbotron.module'

@NgModule({
  imports: [JumbotronModule],
  declarations: [ResumePage],
  exports: [ResumePage]
})

export class ResumePageModule {}
