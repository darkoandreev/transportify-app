import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CitiesDistanceComponent } from './components/cities-distance/cities-distance.component';
import { CommonModule } from '@angular/common';
import { GoogleAutocompleteComponent } from './components/google-autocomplete/google-autocomplete.component';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [IonicModule.forRoot(), CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent, GoogleAutocompleteComponent, CitiesDistanceComponent],
  declarations: [HeaderComponent, GoogleAutocompleteComponent, CitiesDistanceComponent],
})
export class SharedModule {}
