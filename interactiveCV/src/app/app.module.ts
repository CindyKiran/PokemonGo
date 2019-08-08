import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SamsungComponent } from './components/samsung/samsung.component';
import { LevelUpComponent } from './components/level-up/level-up.component';
import { MusicComponent } from './components/music/music.component';
import { MenuComponent } from './components/menu/menu.component';
import { DemoComponent } from './components/demo/demo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EeveeComponent } from './components/eevee/eevee.component';

@NgModule({
  declarations: [
    AppComponent,
    SamsungComponent,
    LevelUpComponent,
    MusicComponent,
    MenuComponent,
    DemoComponent,
    EeveeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
