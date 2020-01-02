import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { DomSanitizer, } from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'video-section',
  templateUrl: './video.component.html',
  styleUrls: ['../section.css', './video.css']
})

export class VideoSectionComponent implements OnInit {
  @Input() title: string;
  @Input() detail: string;
  @Input() backgroundColor?: string;
  @Input('src') videoUrl: string;
  @Input() showButton: boolean;
  @Input() buttonTxt?: string;
  private videoId: string;
  private player: any;
  private YT: any;

  ngOnInit() {

  }

  thumbNailClick(): void {
    $("#frame0").css("display", "block");
  }
  closeVideoOverlay():void {
    $("#frame0").css("display", "none");
  }


  constructor(private sanitizer: DomSanitizer) { }
}
