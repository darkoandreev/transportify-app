import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { AuthFacade } from 'src/app/auth/store/facade/auth.facade';
import { IUser } from 'src/app/auth/store/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDetailsComponent {
  // @Input() user: IUser;

  @Output() logOutChange = new EventEmitter<void>();

  user$: Observable<IUser> = this.authFacade.userDetails$;

  constructor(public authFacade: AuthFacade) {}

  ionViewWillEnter(): void {
    this.authFacade.getUserDetails();
  }
}
