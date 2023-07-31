import { Component, OnInit } from '@angular/core';

interface user{
  name:string,
  pass:string,
  role:string,
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showAddForm = false;
  showEditForm = false;

  public users:user[]=[]
  ngOnInit(): void {
    this.users=[
      {name:"John",pass:"elHueco",role:"admin"},
      {name:"Josed",pass:"s",role:"user"}
    ]
  }
  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
    this.showEditForm = false;
  }

  toggleEditForm() {
    this.showEditForm = !this.showEditForm;
    this.showAddForm = false;
  }
}
