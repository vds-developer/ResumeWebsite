import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'detail-section',
  templateUrl: './detail.component.html',
  styleUrls: []
})

export class DetailSectionComponent implements OnInit {
  @Input() title: string;
  @Input() detail: string;
  @Input() backgroundColor?: string;

  ngOnInit() {

  }

  constructor() { }
}
