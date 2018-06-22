import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contentCard',
  templateUrl: './contentCard.component.html',
  styleUrls: ['./contentCard.component.scss']
})

export class ContentCardComponent implements OnInit {

  @Input() errors: Array<any>;

  ngOnInit() {
    
  }
}
