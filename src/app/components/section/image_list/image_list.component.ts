import { Component, Input, Pipe } from '@angular/core';
import { ImageListItem } from '../../../model/image_list_item';
import { ImageBlockModule } from '../../image-block/image_block.module';
import { CommonModule } from '@angular/common';

//for now it is static to 3

@Component({
  selector: 'image-list-section',
  templateUrl: './image_list.component.html',
  styleUrls: ['./../section.css']
})

export class ImageListSectionComponent {
  @Input() list: any[];
  @Input() stopIndex: number;
  @Input() columnClass: number
  @Input("imageWidth") width?: number;
  @Input("imageHeight") height?: number;
  @Input() backgroundColor?: string;
  @Input() showButton: boolean;
  @Input() buttonTxt?: string;
  column: number;


  constructor() { }
  ngOnInit() {
    if (!this.width) this.width = 400;
    if (!this.height) this.height = 400;
    this.column = this.getColumns();
  }
   getColumnClass(): string {
     switch (this.columnClass) {
       case 1:
         return 'col-md-1'
       case 2:
         return 'col-md-2'
       case 3:
         return 'col-md-3'
       case 4:
         return 'col-md-4'
       case 5:
         return 'col-md-5'
       case 6:
         return 'col-md-6'
       case 7:
         return 'col-md-7'
       case 8:
         return 'col-md-8'
       case 9:
         return 'col-md-9'
       case 10:
         return 'col-md-10'
       case 11:
         return 'col-md-11'
       case 12:
         return 'col-md-12'
       default:
         return 'col-md-4'
     }
  }

  getColumns(): number {
    switch (this.columnClass) {
      case 1:
        return 12
      case 2:
        return 6
      case 3:
        return 4
      case 4:
        return 3
      case 5:
        return 2
      case 6:
        return 2
      default:
        return 1
    }
  }
}
