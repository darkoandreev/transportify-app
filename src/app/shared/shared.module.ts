import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [IonicModule.forRoot(), CommonModule, RouterModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
})
export class SharedModule {}
