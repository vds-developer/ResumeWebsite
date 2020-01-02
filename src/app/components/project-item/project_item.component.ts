import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: "project-item",
  templateUrl: "./project_item.component.html",
  styleUrls: ["./project_item.css"]
})

export class ProjectItemComponent {
  @Input() projectName:string;
  @Input() projectDescription:string;
  @Input() projectMetaData:string[];
  constructor() {
    console.log(this.projectMetaData)
  }

  getMetaDataClass(element) {
    switch (element) {
      case 'HTML':
        return 'metadata-html'
      case 'CSS':
        return 'metadata-css'
      case 'Javascript':
        return 'metadata-javascript'
      case 'Python':
        return 'metadata-python'
      case 'Java':
        return 'metadata-java'
    }
  }
}
