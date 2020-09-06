import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url : string = "http://mtgr01-001-site1.gtempurl.com/api/login";
  //url : string = "https://localhost:44344/api/login";
  userToken : string = "";
  
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };

  constructor(private http:HttpClient) { }

  login(usuario:string, contrasena:string) : Observable<any> {
    let userBody = JSON.stringify({ "usuario" : usuario , "contrasena" : contrasena });    
    return this.http.post<any>(this.url.concat('/authenticate'), userBody, this.httpOptions).pipe(
      map( resp => {
        localStorage.setItem('user', resp.user.usuario);
        localStorage.setItem('role', resp.user.rol);
        this.saveToken(resp.token);        
        return resp;        
      })
    );    
  }

  private saveToken( idToken: string ) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
    let now = new Date();
    now.setSeconds(600);
    localStorage.setItem('duration', now.getTime().toString() );
  }

  isAuthenticated(): boolean {
    if (this.userToken.length < 2 ) {
      return false;
    }

    var exp = this.obtenerExpiracionToken();

    if (!exp) {
      // el token no existe
      return false;
    }

    const expira = Number(localStorage.getItem('duration'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if ( expiraDate > new Date() ) {
      return true;
    } else {
      this.logout();
      return false;
    }
  }

  hasRole(allowedRoles : Array<string>): boolean {    
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));    
    var userRole = payLoad.rol;
    console.log(userRole);
    return allowedRoles.indexOf(userRole) !== -1;
  }

  obtenerExpiracionToken(): string{
    return localStorage.getItem("duration");
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    localStorage.removeItem('duration');
  }

}