import { ActionSheetController, Platform } from '@ionic/angular';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FileStorageService } from 'src/app/core/services/file-storage.service';
import { GenderEnum } from '../../store/enums';
import { IUploadFileResponse } from 'src/app/core/model/upload-file.response';
import { IUser } from '../../store/models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const { Camera } = Plugins;

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsFormComponent {
  @Input()
  set user(user: IUser) {
    if (user) {
      this._user = user;
      user = {
        ...user,
        gender: GenderEnum[user.gender?.toUpperCase()],
      };
      this.userDetailsForm.patchValue(user);
    }
  }
  get user(): IUser {
    return this._user;
  }

  @Output() submitChange = new EventEmitter<IUser>();

  userDetailsForm: FormGroup;
  fileUploadResponse$: Observable<IUploadFileResponse>;
  readonly env = environment;

  private _user: IUser;

  constructor(
    private fb: FormBuilder,
    private actionSheet: ActionSheetController,
    private platform: Platform,
    private fileStorageService: FileStorageService,
    private cdr: ChangeDetectorRef
  ) {
    this.initForm();
  }

  async openCameraOptions() {
    const actionSheet = await this.actionSheet.create({
      header: 'Options',
      cssClass: 'stc-action-sheet',
      buttons: [
        {
          text: 'Gallery',
          icon: 'image',
          handler: async () => await this.captureInventory(CameraSource.Photos),
        },
        {
          text: 'Camera',
          icon: 'camera',
          handler: async () => await this.captureInventory(CameraSource.Camera),
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  private async captureInventory(source: CameraSource): Promise<void> {
    if (!this.platform.is('cordova')) {
      return;
    }
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source,
      quality: 50,
    });

    const imageBlob = this.fileStorageService.b64toBlob(
      capturedPhoto.base64String,
      `image/${capturedPhoto.format}`
    );

    const imageName = `${new Date().getTime()}_avatar_image.${capturedPhoto.format}`;
    this.fileUploadResponse$ = this.fileStorageService.uploadFile(imageBlob, imageName);

    this.userDetailsForm.get('imageUrl').setValue(imageName);
    this.cdr.markForCheck();
  }

  private initForm(): void {
    this.userDetailsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      imageUrl: ['', Validators.required],
      additionalDetails: '',
    });
  }
}
