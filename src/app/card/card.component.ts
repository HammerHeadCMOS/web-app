import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{

  public precio:number=11300
  public modelo:string="Hyundai I10"
  public year:number=2016
  public img:string="https://th.bing.com/th/id/OIP.3UD8tUwQbJ7wEJz9zSoTQAHaFj?pid=ImgDet&rs=1"
}
