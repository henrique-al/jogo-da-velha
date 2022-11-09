import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CaixaModule } from '../caixa/caixa.module';

import { JogoComponent } from './jogo.component';

@NgModule({
    imports: [CommonModule, CaixaModule],
    exports: [JogoComponent],
    declarations: [JogoComponent],
    providers: [],
})
export class JogoModule { }
