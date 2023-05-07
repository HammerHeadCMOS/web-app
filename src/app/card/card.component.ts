import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  public precio:number=11300
  public modelo:string="Hyundai I10"
  public year:number=2016
  public img:string="https://th.bing.com/th/id/OIP.3UD8tUwQbJ7wEJz9zSoTQAHaFj?pid=ImgDet&rs=1"
  @Input() dataEntrante:any;
  constructor(){ }
  ngOnInit():void {
    this.img="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fview%2Ftrollface-xddddddd-gif-21921001&psig=AOvVaw1EElukUZMTT_cCinx4kkl5&ust=1682432488809000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCOjX9aPbwv4CFQAAAAAdAAAAABAZ"
  }
}
