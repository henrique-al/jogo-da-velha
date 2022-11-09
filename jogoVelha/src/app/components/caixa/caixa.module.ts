import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CaixaComponent } from './caixa.component';

@NgModule({
    imports: [CommonModule],
    exports: [CaixaComponent],
    declarations: [CaixaComponent],
    providers: [],
})
export class CaixaModule { }
