import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AristocratsComponent } from './aristocrats/aristocrats.component';
import { CardsStacksComponent } from './cards-stacks/cards-stacks.component';
import { CardsComponent } from './cards/cards.component';
import { TokensComponent } from './tokens/tokens.component';

@NgModule({
  declarations: [
    AppComponent,
    AristocratsComponent,
    CardsStacksComponent,
    CardsComponent,
    TokensComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
