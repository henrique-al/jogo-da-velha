import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'caixa',
    templateUrl: './caixa.component.html',
    styleUrls: ['./caixa.component.css']
})

export class CaixaComponent{

    @Output()
    index = new EventEmitter();

    jogando: boolean = true;
    text: string = '';
    valor: number = 0;
    static x = true;
    handleClick(){
        if (this.jogando) {   
            const x = localStorage.getItem('x');
            const xClass = new X();
            const oClass = new O()
            this.text = x === 'true' ? xClass.text: oClass.text
            localStorage.setItem('x', x === 'true'? 'false':'true')
            this.valor = this.text === 'X' ? xClass.valor : oClass.valor
            this.jogando = false;
            this.index.emit(this.valor)
        }
    }
}

class X{
    text: string;
    valor: number;
    constructor(){
        this.text = 'X'
        this.valor = 1
    }
}

class O{
    text: string;
    valor: number;
    constructor(){
        this.text = 'O'
        this.valor = -1
    }
}
