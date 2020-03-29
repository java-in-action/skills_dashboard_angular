import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const AWS_SERVER = 'http://skillsdashboardrest-env.eba-nrkrv3i6.us-west-2.elasticbeanstalk.com';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {


  constructor(public http: HttpClient) { }

  public getSkillsByEmployee(sysId) {
    const endpoint = AWS_SERVER + '/rest/employees/' + sysId + '/skills';
    return this.http.get(endpoint);
  }
}
