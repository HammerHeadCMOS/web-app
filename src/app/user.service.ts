import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private httpClient: HttpClient) { 

  }


findUsers() {
  return this.httpClient.get("http://localhost:3000/users");
}

findUser(id: number) {
  return this.httpClient.get('http://localhost:3000/users/' + id);
}

createUser (payload: any) {
return this.httpClient.post('http://localhost:3000/users', payload);
}

updateUser(id: number, payload: any) {
return this.httpClient.put('http://localhost:3000/users/' + id, payload);
}
deleteUser(id: number) {
return this.httpClient.delete('http://localhost:3000/users/' + id);
}
}