import { Component, OnInit } from '@angular/core';
import { JogoComponent } from './components/jogo/jogo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  vitoriasX = localStorage.getItem('vitoriasX') || 0
  vitoriasO = localStorage.getItem('vitoriasO') || 0

  title = 'jogoVelha';

  limparStorage(): void {
    localStorage.clear()
    location.reload()
  }
}
