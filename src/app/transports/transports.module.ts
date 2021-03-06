import * as fromReducer from './store/reducers';

import { ChatBubbleComponent } from './transport-chat/chat-bubble/chat-bubble.component';
import { CommonModule } from '@angular/common';
import { DriveTransportDetailsComponent } from './drive-transport-preview/drive-transport-details/drive-transport-details.component';
import { DriveTransportPreviewComponent } from './drive-transport-preview/drive-transport-preview.component';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { RideTransportEffect } from './store/effects/ride-transport.effects';
import { SharedModule } from '../shared/shared.module';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { StoreModule } from '@ngrx/store';
import { TransportChatComponent } from './transport-chat/transport-chat.component';
import { TransportDetailsModule } from './transport-details/transport-details.module';
import { TransportEffect } from './store/effects/transport.effects';
import { TransportHistoryEffect } from './store/effects/transport-history.effects';
import { TransportListComponent } from './transport-list/transport-list.component';
import { TransportListItemComponent } from './transport-list/transport-list-item/transport-list-item.component';
import { TransportPageRoutingModule } from './transports-routing.module';
import { TransportSearchEffect } from './store/effects/transport-search.effects';
import { TransportSearchResultListComponent } from './transport-search-results/transport-search-result-list/transport-search-result-list.component';
import { TransportSearchResultListItemComponent } from './transport-search-results/transport-search-result-list/transport-search-result-list-item/transport-search-result-list-item.component';
import { TransportSearchResultsPage } from './transport-search-results/transport-search-results.page';
import { TransportsPage } from './transports.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TransportPageRoutingModule,
    TransportDetailsModule,
    ReactiveComponentModule,
    SharedModule,
    StoreModule.forFeature('transport', fromReducer.reducerMap),
    EffectsModule.forFeature([
      TransportEffect,
      TransportSearchEffect,
      RideTransportEffect,
      TransportHistoryEffect,
    ]),
  ],
  declarations: [
    TransportsPage,
    TransportListComponent,
    TransportListItemComponent,
    TransportSearchResultsPage,
    TransportSearchResultListComponent,
    TransportSearchResultListItemComponent,
    DriveTransportPreviewComponent,
    DriveTransportDetailsComponent,
    TransportChatComponent,
    ChatBubbleComponent,
  ],
  providers: [SpeechRecognition],
})
export class TransportPageModule {}
