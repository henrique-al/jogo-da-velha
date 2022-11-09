import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JogoModule } from './components/jogo/jogo.module';
import { CaixaModule } from './components/caixa/caixa.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JogoModule,
    CaixaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
