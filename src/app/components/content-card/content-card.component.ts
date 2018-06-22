import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contentCard',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})

export class ContentCardComponent implements OnInit {

  @Input() errors: Array<any>;

  ngOnInit() {
    
  }
}
