import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmergencyCreateComponent } from './components/Emergencys/emergency-create/emergency-create.component';
import { EmergencyListComponent } from './components/Emergencys/emergency-list/emergency-list.component';
import { EmergencyEditComponent } from './components/Emergencys/emergency-edit/emergency-edit.component';
import { EmergencyDetailsComponent } from './components/Emergencys/emergency-details/emergency-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EmergencyCreateComponent,
    EmergencyListComponent,
    EmergencyEditComponent,
    EmergencyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
