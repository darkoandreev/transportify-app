import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { IChatMessage } from '../store/models/transport-chat-message.model';
import { IDriverTransport } from '../store/models/drive.transport.model';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-transport-chat',
  templateUrl: './transport-chat.component.html',
  styleUrls: ['./transport-chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportChatComponent implements OnInit {
  @Input() driveTransport: IDriverTransport;

  readonly env = environment;

  private serverUrl = 'http://192.168.0.101:8080/transport-chat-socket';
  private stompClient: Stomp.Client;

  message: any;
  messages: IChatMessage[] = [
    {
      type: 'MSG_REQ',
      message: 'Hello',
      username: 'Darko',
      image:
        'http://192.168.0.111:8080/api/file-storage/downloadFile/1614774185505_avatar_image.jpeg',
    },
    {
      type: 'MSG_RES',
      message: 'Hello',
      username: 'Darko1',
      image:
        'http://192.168.0.111:8080/api/file-storage/downloadFile/1614774185505_avatar_image.jpeg',
    },
    {
      type: 'MSG_RES',
      message: 'Hello',
      username: 'Darko2',
      image:
        'http://192.168.0.111:8080/api/file-storage/downloadFile/1614774185505_avatar_image.jpeg',
    },
    {
      type: 'MSG_RES',
      message: 'Hello',
      username: 'Darko2',
      image:
        'http://192.168.0.111:8080/api/file-storage/downloadFile/1614774185505_avatar_image.jpeg',
    },
    {
      type: 'MSG_REQ',
      message: 'Hello',
      username: 'Darko',
      image:
        'http://192.168.0.111:8080/api/file-storage/downloadFile/1614774185505_avatar_image.jpeg',
    },
  ];

  constructor(public modalController: ModalController, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, (callback) => {
      console.log(callback);

      this.stompClient.subscribe('/topic/greetings', (message) => {
        this.messages.push({
          message: message.body,
          type: 'MSG_REQ',
          image:
            'http://192.168.0.111:8080/api/file-storage/downloadFile/1614774185505_avatar_image.jpeg',
          username: 'darko1',
        });
        this.cdr.markForCheck();
        console.log(this.messages);
      });
    });
  }

  addChat() {
    const emit = this.stompClient.send('/app/send', {}, this.message);
  }
}
