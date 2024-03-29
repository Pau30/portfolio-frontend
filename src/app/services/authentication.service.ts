import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = 'https://portfolio-backend-ltmx.onrender.com/auth/';

  constructor(private http: HttpClient) { }


  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.http.post<JwtDto>(this.url + 'login', loginUsuario);
  }

}
