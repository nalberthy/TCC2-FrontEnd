import { Component, OnInit } from '@angular/core';

declare var gramLogic: any;
declare var gramLogic2: any;

@Component({
  selector: 'app-area-interna',
  templateUrl: './area-interna.component.html',
  styleUrls: ['./area-interna.component.css']
})
export class AreaInternaComponent implements OnInit {

  entrada;
  formula;
  constructor() { }

  ngOnInit(): void {
  }


  testeFormula(){
    //funcionando
    // var validacao = gramLogic.validar(this.formula,false)
    // console.log(validacao)

    //em testes -----------------------
    //  var validacao22 = gramLogic.validar(this.formula,false)
    // var validacao = gramLogic2.validarEntrada(this.entrada,false)


    console.log(this.entrada)
    var validacao2 = gramLogic2.validarEntrada(this.entrada,false)

  console.log(validacao2)
  }
}
