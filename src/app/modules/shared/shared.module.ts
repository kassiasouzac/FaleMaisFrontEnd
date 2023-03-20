import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,

  ],
  exports:[
    HeaderComponent,
    SliderComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
