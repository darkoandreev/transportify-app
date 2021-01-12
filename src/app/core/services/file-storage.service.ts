import { HttpClient } from '@angular/common/http';
import { IUploadFileResponse } from '../model/upload-file.response';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class FileStorageService {
  constructor(private http: HttpClient) {}

  uploadFile(file: Blob, fileName: string): Observable<IUploadFileResponse> {
    const formData = new FormData();
    formData.set('file', file, fileName);
    return this.http.post<IUploadFileResponse>(
      `${environment.API_URL}file-storage/uploadFile`,
      formData
    );
  }

  public b64toBlob(b64Data: any, contentType = '', sliceSize = 512): Blob {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
}
