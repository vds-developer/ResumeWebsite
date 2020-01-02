import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

import { All_Projects } from '../../data/all_projects';

declare var $: any;



@Component({
  selector: 'project-page',
  templateUrl: './project.component.html',
  styleUrls: ["./project.css"]
})

export class ProjectPage implements OnInit {
  private All_Projects: any;
  constructor() {
    this.All_Projects = All_Projects;
    console.log(this.All_Projects)
  }

  ngOnInit() {
    $("project-item").each(function (index) {
      $(this).attr('id', 'project' + index);
    })
    

  }
}
