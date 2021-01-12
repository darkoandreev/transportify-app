import { ActivatedRoute } from '@angular/router';
import { AuthFacade } from '../store/facade/auth.facade';
import { Component } from '@angular/core';
import { IUploadFileResponse } from 'src/app/core/model/upload-file.response';
import { IUser } from '../store/models';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  fileUploadResponse$: Observable<IUploadFileResponse>;
  user$: Observable<IUser> = this.authFacade$.userDetails$;

  constructor(private authFacade$: AuthFacade, private route: ActivatedRoute) {}

  ionViewWillEnter(): void {
    const userId = +this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.authFacade$.getUserDetails();
    }
  }

  onSubmit(user: IUser): void {
    this.authFacade$.updateUserDetails(user);
  }
}
