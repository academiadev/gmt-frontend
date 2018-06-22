import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.scss']
})

export class RequestPasswordComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private toaster: ToastrService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
  }

}
