import { Component,Input } from '@angular/core';

@Component({
  selector: 'image-block',
  templateUrl: './image_block.component.html',
  styleUrls:["./image_block.css"]
})

export class ImageBlockComponent {
  @Input() imageURL: string;
  @Input() imageTxt: string;
  @Input() width: number;
  @Input() height: number;
  @Input() projectCode: string;
  @Input() projectName: string;
  //button
  @Input() showButton: boolean;
  @Input() btnTxt?: string;
  @Input() btnLink?: string;

  constructor() {
  }
  ngOnInit() {
  }
}
