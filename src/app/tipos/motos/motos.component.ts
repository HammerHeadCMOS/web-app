import { Component , OnInit} from '@angular/core';

interface tarjeta{
  precio:number,
  modelo:string,
  year:number,
  img?:string,
}

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.css']
})
export class MotosComponent implements OnInit {
  public arreglotarjetas:tarjeta[]=[]
  ngOnInit(): void {
    this.arreglotarjetas=[
      {precio:2482,modelo:"Moto Suzuki GD 115",year:2023,img:"https://comandato.vteximg.com.br/arquivos/ids/211809-600-600/moto-suzuki-gd-115-4-lateral.png?v=637485772254370000"},
      {precio:3519,modelo:"Moto Suzuki GSX125",year:2021,img:"https://comandato.vteximg.com.br/arquivos/ids/218925-600-600/GSX125.png?v=637644847885230000"},
      {precio:5728,modelo:"GSX-R150",year:2022,img:"https://comandato.vteximg.com.br/arquivos/ids/194925-600-600/gsxr150_img.jpg?v=636790290463000000"},
      {precio:5340,modelo:"Royal Enfield CLASSIC 350",year:2023,img:"https://royalenfieldec.com/motos/new-classic-350/Classic350_Dark%20Stealth%20Black/Classic350_DarkStealthBlack_1.png"}

    ]
  }
}
