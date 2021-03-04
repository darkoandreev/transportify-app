import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { IChatMessage } from '../../store/models/transport-chat-message.model';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss'],
})
export class ChatBubbleComponent implements OnChanges {
  @Input() chatMessage: IChatMessage;

  messageType: 'MSG_REQ' | 'MSG_RES' = 'MSG_REQ';

  constructor() {}

  ngOnChanges() {
    console.log(this.chatMessage);
  }
}
