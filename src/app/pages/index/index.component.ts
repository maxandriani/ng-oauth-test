import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private oAuthService: OAuthService) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.oAuthService.initCodeFlow();
  }

}
