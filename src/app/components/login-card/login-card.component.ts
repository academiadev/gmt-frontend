import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'loginCard',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})

export class LoginCardComponent implements OnInit {

  @Input() errors: Array<any>;

  ngOnInit() {
    
  }
}
