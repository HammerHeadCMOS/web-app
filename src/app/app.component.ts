import { Component , OnInit} from '@angular/core';

interface tarjeta{
  precio:number,
  modelo:string,
  year:number,
  img?:string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sellcar';
  public arreglotarjetas:tarjeta[]=[]
  ngOnInit(): void {
    this.arreglotarjetas=[
      {precio:40899,modelo:"Toyota Land Cruiser",year:2020,img:""},
      {precio:19993,modelo:"Cherry Tiggo 3",year:2021,img:""},
      {precio:11300,modelo:"Hyundai I10",year:2016,img:""},
      {precio:124000,modelo:"Ford F-150 Lariat",year:2023,img:""}

    ]
  }

}