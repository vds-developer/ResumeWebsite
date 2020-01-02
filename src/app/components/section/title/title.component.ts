import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'title-section',
  templateUrl: './title.component.html',
  styleUrls:['../section.css']
})

export class TitleSectionComponent {
  @Input() title: string;
  @Input() detail: string;
  @Input() backgroundColor?: string;
  @Input() showButton: boolean;
  @Input() buttonTxt?: string;


  constructor() { }
}
