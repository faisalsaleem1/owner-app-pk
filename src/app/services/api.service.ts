import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CONFIG } from "../../../config";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUserReports(payload:any):Observable<any>{
    return this.http.post(CONFIG.getUserReport, payload);
  }
}
