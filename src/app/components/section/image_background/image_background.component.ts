import { Component, Input,OnInit, PACKAGE_ROOT_URL } from '@angular/core'

@Component({
  selector: "image-background-section",
  templateUrl: "./image_background.component.html"
})

export class ImageBackgroundSectionComponent implements OnInit {
  @Input() width: string;
  @Input() height: string;
  @Input() imageSrc: string;

  ngOnInit() {
    //if (this.width.search(/%{1}/i) != -1){
    //  this.width += "px"
    //}
    //if (this.height.search(/%{1}/i) != -1){
    //  this.height += "px"
    //}
    
  }
  
}
