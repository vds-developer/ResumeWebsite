import { Component } from '@angular/core'
import { All_Projects } from '../../data/all_projects';
import { All_Personal } from '../../data/all_personal';
import { Project } from '../../model/project'


import { SectionModule } from '../../components/section/section.module'
import { ImageBlockModule } from '../../components/image-block/image_block.module'
import { JumbotronModule } from '../../components/jumbotron/jumbotron.module'

@Component({
  selector: "home-page",
  templateUrl:"./home.component.html"
})

export class HomePage{
  title = 'This is section';
  detail = `They got there early, and they got really good seats.
  She works two jobs to make ends meet; at least, that was her reason for not having time to join us.
I am happy to take your donation; any amount will be greatly appreciated.
She advised him to come back at once.
We need to rent a room for our party.`;
  myProjects = All_Projects;
  myPersonal = All_Personal;
  constructor(){
  }
}
