import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-restricted',
  templateUrl: './restricted.component.html',
  styleUrls: ['./restricted.component.scss']
})
export class RestrictedComponent implements OnInit {

  user: any = {};

  constructor(public oAuthService: OAuthService) { }

  ngOnInit(): void {
    this.oAuthService
      .events
      .pipe(
        filter(e => e.type === 'discovery_document_loaded'),
        switchMap(() => this.oAuthService.loadUserProfile())
      )
      .subscribe(user => this.user = user);
  }

}
