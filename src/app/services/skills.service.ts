import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(public http: HttpClient) { }

  public getSkillsByEmployee(sysId) {
    const endpoint = 'http://127.0.0.1:8080/rest/employees/' + sysId + '/skills';
    return this.http.get(endpoint);
  }
}
