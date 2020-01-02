import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'carousel-section',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.css']
})

export class CarouselSectionComponent implements OnInit {
  @Input() title: string;
  @Input() imageURLS: string[];
  @Input() backgroundColor?: string;

  ngOnInit() {

  }

  constructor() { }
}
