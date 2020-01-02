import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls:['./jumbotron.css', ]
})

export class JumbotronComponent {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() showButton: boolean;
  @Input() buttonTxt?: string;
  @Input() videoSrc?: string;
  @Input() imageSrc?: string;
  constructor() { }
}
