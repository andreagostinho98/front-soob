import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_API_URL } from 'app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class LoginUsuarioService {
  url: any;

  constructor(private http: HttpClient) {}

  Savesresponse(responce: any) {
    return this.http.post(SERVER_API_URL + 'api/login-usuario/Savesresponse', responce);
  }
}
