import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IUserRating } from 'src/app/auth/store/models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-ratings-list',
  templateUrl: './profile-ratings-list.component.html',
  styleUrls: ['./profile-ratings-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileRatingsListComponent {
  @Input() userRatings: IUserRating[];

  readonly env = environment;
}
