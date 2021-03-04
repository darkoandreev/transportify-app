import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AuthFacade } from '../store/facade/auth.facade';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.page.html',
  styleUrls: ['./confirm-account.page.scss'],
})
export class ConfirmAccountPage implements OnInit {
  confirmationToken: string;

  private readonly CONFIRMATION_TOKEN_KEY = 'CONFIRMATION_TOKEN_KEY';

  constructor(public authFacade: AuthFacade, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.confirmationToken = this.route.snapshot.queryParamMap.get(this.CONFIRMATION_TOKEN_KEY);
  }
}
