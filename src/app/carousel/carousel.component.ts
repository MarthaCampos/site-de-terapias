import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  imagens = ["assets/massagem.png", "assets/fito.png", "assets/reflexo.png"];
  imagensMudando = 0;
  intervalo;

  mudarImagem(){
    this.imagensMudando ++;
    if (this.imagensMudando > this.imagens.length -1){
      this.imagensMudando = 0;
    }
  }

  constructor() {
    this.intervalo = setInterval(this.mudarImagem.bind(this), 1500);
  }

  onHover(){
    clearInterval(this.intervalo);
  }
  offHover(){
    this.intervalo = setInterval(this.mudarImagem.bind(this), 2000);
}
  ngOnInit() {
  }

}

