import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './heroes/list/list.component';


import { HeroesModule } from './heroes/heroes.module';
import { HeroComponent } from './heroes/hero/hero.component';
import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [
    AppComponent,
    
  
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule  
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
