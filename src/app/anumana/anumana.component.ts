import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anumana } from '../anumana';
import { AnumanaService } from '../anumana.service';
import { Predicados } from '../models/predicados';
import { Sujeitos } from '../models/sujeitos';

@Component({
  selector: 'app-anumana',
  templateUrl: './anumana.component.html',
  styleUrls: ['./anumana.component.css']
})
export class AnumanaComponent implements OnInit {

  posicao: any;

  texto : any;

  anumana: Anumana = new Anumana();

  constructor(private anumanaService: AnumanaService) { }


  clickPosition(position: any){
    this.posicao = position;
    if(position==1){
      this.texto = "teste1";

    }
    if(position==2){
    this.texto = "teste2";

    }
    if(position==3){
      this.texto = "teste3"
    }
    if(position==4){
      this.texto = "teste4"
    }
    if(position==5){
      this.texto = "teste5"
    }
    if(position==6){
      this.texto = "teste6"
    }
    if(position==7){
      this.texto = "teste7"
    }
    if(position==8){
      this.texto = "teste8"
    }
    if(position==9){
      this.texto = "teste9"
    }
  }


  saveAnumana(){
    this.anumanaService.createAnumana(this.anumana).subscribe(data => {
      this.posicao = data;
      console.log(data);
    })
  }

  ngOnInit(): void{

  }

  onSubmit(){
    console.log(this.anumana);
    this.saveAnumana();
  }



}
