import { Login } from 'src/app/login/login';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/service/login.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Observable<Login>;

  constructor(private loginService: LoginService) {
    this.login = this.loginService.get();
  }

  ngOnInit(): void {
  }

}
