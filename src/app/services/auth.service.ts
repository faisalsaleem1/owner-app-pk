import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { CONFIG } from "../../../config";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(userName: string, password: string): Observable<any> {
    return this.http
      .post(CONFIG.adminLogin, { userName, password })
      .pipe(tap((response: any) => {}));
  }

  logout(): Observable<any> {
    return this.http
      .post(CONFIG.logOutAdmin, {})
      .pipe(tap((response: any) => {}));
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  isLoggedIn() {
    const token = this.getToken();
  }
}
