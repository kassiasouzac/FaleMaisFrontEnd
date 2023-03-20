import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';
import { CalculatorComponent } from '../pages/calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToastModule } from '@coreui/angular';

@NgModule({
  declarations: [
    HomeComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  exports:[
    CalculatorComponent
  ]
})
export class PagesModule { }
