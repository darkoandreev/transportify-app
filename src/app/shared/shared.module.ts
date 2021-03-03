import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CitiesDistanceComponent } from './components/cities-distance/cities-distance.component';
import { CommonModule } from '@angular/common';
import { EmptyListContainerComponent } from './empty-list-container/empty-list-container.component';
import { GoogleAutocompleteComponent } from './components/google-autocomplete/google-autocomplete.component';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [IonicModule.forRoot(), CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    GoogleAutocompleteComponent,
    CitiesDistanceComponent,
    EmptyListContainerComponent,
  ],
  declarations: [
    HeaderComponent,
    GoogleAutocompleteComponent,
    CitiesDistanceComponent,
    EmptyListContainerComponent,
  ],
})
export class SharedModule {}
