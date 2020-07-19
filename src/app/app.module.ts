import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BridgeInfoComponent } from './bridge-info/bridge-info.component';
import { BridgeInfoPanelComponent } from './bridge-info-panel/bridge-info-panel.component';
import { BridgeInfoMapComponent } from './bridge-info-map/bridge-info-map.component';
import { BridgeFormTemplateDrivenComponent } from './bridge-form-template-driven/bridge-form-template-driven.component';
import { BridgeFormReactiveComponent } from './bridge-form-reactive/bridge-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BridgeInfoComponent,
    BridgeInfoPanelComponent,
    BridgeInfoMapComponent,
    BridgeFormTemplateDrivenComponent,
    BridgeFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
