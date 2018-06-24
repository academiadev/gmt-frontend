import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  logado: Boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
  ) { }

  onClick(){
    this.authService.logoutAndRedirect();
  }

  ngOnInit() {
    this.logado = this.authService.isLoggedIn();
  }
  
  
}
