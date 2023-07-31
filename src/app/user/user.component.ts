import { Component ,OnInit} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  users: any = null;
  id : number = 0;
  username : string = '';
  password : string = '';
  role: number = 0;

  constructor(private userService: UserService) {
    this.getUsers();
  }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
  this.userService.findUsers().subscribe(response => {
    this.users=response;
    console.log(response);
  });
  }

  getUser(id:number){
    this.userService.findUser(id).subscribe(response =>{
      console.log(response);
    });
  }

  createUser(){
    const payload = {
      username : this.username,
      password : this.password,
    }
    this.userService.createUser(payload).subscribe(response =>{
      this.getUsers();
      alert('creado');
    });
  }

  updateUser() {
    const payload = {
      username : this.username,
      password : this.password,
    }
    this.userService.updateUser(this.id, payload).subscribe(response =>{
      this.getUsers();
      alert('se actualizo');
    });
  }

  deleteUser(){
    this.userService.deleteUser(this.id).subscribe(response => {
      alert('se elimino')
    })
  }
}
