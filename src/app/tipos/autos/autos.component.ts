import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/header/header.component';


interface tarjeta{
  precio:number,
  modelo:string,
  year:number,
  img?:string,
}

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent  implements OnInit{

  public arreglotarjetas:tarjeta[]=[]
  ngOnInit(): void {
    this.arreglotarjetas=[
      {precio:40899,modelo:"Toyota Land Cruiser",year:2020,img:"https://www.thedrive.com/content-b/message-editor/1576539614436-aj1i4696.jpg?quality=60"},
      {precio:19993,modelo:"Cherry Tiggo 3",year:2021,img:"https://www.major-chery.ru/images/gallery/real_photo_prev/ssr_8437.png"},
      {precio:11300,modelo:"Hyundai I10",year:2016,img:"https://th.bing.com/th/id/OIP.3UD8tUwQbJ7wEJz9zSoTQAHaFj?pid=ImgDet&rs=1"},
      {precio:124000,modelo:"Ford F-150 Lariat",year:2023,img:"https://i.insider.com/5f988df969331a0011bc5990?width=600&format=jpeg&auto=webp"}

    ]
  }

}
