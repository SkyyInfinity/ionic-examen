import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

const hasShared: Array<any> = [
    HeaderComponent
];

@NgModule({
  declarations: hasShared,
  imports: [
    CommonModule
  ],
  exports: hasShared,
  providers: [
      // mobile functionalities
      Geolocation
  ]
})
export class SharedModule { }
