import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IUserRatingOccuranceResponse } from 'src/app/auth/store/models';

@Component({
  selector: 'app-profile-rating-occurrences',
  templateUrl: './profile-rating-occurrences.component.html',
  styleUrls: ['./profile-rating-occurrences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileRatingOccurrencesComponent {
  @Input() occurrences: IUserRatingOccuranceResponse;
}
