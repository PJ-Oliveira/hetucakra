import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnumanaComponent } from './anumana/anumana.component';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { PosicaoUmComponent } from './anumana/posicao-um/posicao-um.component';
import { PosicaoDoisComponent } from './anumana/posicao-dois/posicao-dois.component';
import { PosicaoTresComponent } from './anumana/posicao-tres/posicao-tres.component';
import { PosicaoQuatroComponent } from './anumana/posicao-quatro/posicao-quatro.component';
import { PosicaoCincoComponent } from './anumana/posicao-cinco/posicao-cinco.component';
import { PosicaoSeisComponent } from './anumana/posicao-seis/posicao-seis.component';
import { PosicaoSeteComponent } from './anumana/posicao-sete/posicao-sete.component';
import { PosicaoOitoComponent } from './anumana/posicao-oito/posicao-oito.component';
import { PosicaoNoveComponent } from './anumana/posicao-nove/posicao-nove.component';

@NgModule({
  declarations: [
    AppComponent,
    AnumanaComponent,
    PosicaoUmComponent,
    PosicaoDoisComponent,
    PosicaoTresComponent,
    PosicaoQuatroComponent,
    PosicaoCincoComponent,
    PosicaoSeisComponent,
    PosicaoSeteComponent,
    PosicaoOitoComponent,
    PosicaoNoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
