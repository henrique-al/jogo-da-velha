import { Component, OnInit } from "@angular/core";
import { CaixaComponent } from "../caixa/caixa.component";

@Component({
  selector: "jogo",
  templateUrl: "./jogo.component.html",
  styleUrls: ["./jogo.component.css"],
})
export class JogoComponent implements OnInit {
  static vitoriasO: number = 0;
  static vitoriasX: number = 0;
  
  ngOnInit(): void {
    localStorage.setItem("x", "true");
    JogoComponent.vitoriasO = +localStorage.getItem('vitoriasO')
    JogoComponent.vitoriasX = +localStorage.getItem('vitoriasX')
  }

  jogada = 0;
  linha1 = [];
  linha2 = [];
  linha3 = [];

  jogo: number[][] = [this.linha1, this.linha2, this.linha3];

  inserirJogada(event: number, i: number) {
    if (i <= 3) {
      this.linha1[i - 1] = event;
    } else if (i <= 6) {
      this.linha2[i - 4] = event;
    } else {
      this.linha3[i - 7] = event;
    }

    const ganhador = this.verificarVitorias();
    setTimeout(() => {
      if (ganhador === "X" || ganhador === "O") {
        alert("Ganhador: " + ganhador);
      } else if (ganhador === "Velha") {
        alert("Deu velha");
      }
    }, 100);

    if (ganhador) {
      setTimeout(() => {
        localStorage.setItem('vitoriasX', String(JogoComponent.vitoriasX))
        localStorage.setItem('vitoriasO', String(JogoComponent.vitoriasO))
        location.reload()
      }, 1000);
    }
  }

  verificarVitorias = (): string => {
    //linhas
    for (let i = 0; i < 3; i++) {
      if (this.jogo[i][0] + this.jogo[i][1] + this.jogo[i][2] === 3) {
        JogoComponent.vitoriasX++;
        return "X";
      }
      if (this.jogo[i][0] + this.jogo[i][1] + this.jogo[i][2] === -3) {
        JogoComponent.vitoriasO++;
        return "O";
      }
    }
    //colunas
    for (let j = 0; j < 3; j++) {
      if (this.jogo[0][j] + this.jogo[1][j] + this.jogo[2][j] === 3) {
        JogoComponent.vitoriasX++;
        return "X";
      }
      if (this.jogo[0][j] + this.jogo[1][j] + this.jogo[2][j] === -3) {
        JogoComponent.vitoriasO++;
        return "O";
      }
    }
    //diagonais
    if (
      this.jogo[0][0] + this.jogo[1][1] + this.jogo[2][2] === 3 ||
      this.jogo[0][2] + this.jogo[1][1] + this.jogo[2][0] === 3
    ) {
      JogoComponent.vitoriasX++;
      return "X";
    }
    if (
      this.jogo[0][2] + this.jogo[1][1] + this.jogo[2][0] === -3 ||
      this.jogo[0][0] + this.jogo[1][1] + this.jogo[2][2] === -3
    ) {
      JogoComponent.vitoriasO++;
      return "O";
    }

    if (this.jogada === 8) {
      return "Velha";
    }

    this.jogada++;
  };
}
