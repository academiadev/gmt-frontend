import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'request-password-sent',
  templateUrl: './request-password-sent.component.html',
  styleUrls: ['./request-password-sent.component.scss']
})

export class RequestPasswordSentComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

}
