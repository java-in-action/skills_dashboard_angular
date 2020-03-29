import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/Employee';
const AWS_SERVER = 'http://skillsdashboardrest-env.eba-nrkrv3i6.us-west-2.elasticbeanstalk.com';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(public http: HttpClient) { }


    public getEmployees() {
        const endpoint = AWS_SERVER + '/rest/employees/';
        return this.http.get(endpoint);
    }

    public getEmployeeById(sysId) {
        const endpoint = AWS_SERVER + '/rest/employees/' + sysId;
        return this.http.get(endpoint);
    }


    public insertEmployee(employee: Employee) {
        const body = {
            sysId: employee.sysId,
            eId: employee.eId,
            name: employee.name,
            level: employee.level,
            location: employee.location,
            birthday: employee.birthday
        };
        const endpoint = AWS_SERVER + '/rest/employees/';
        return this.http.post(endpoint, body);
    }

    public updateEmployee(employee: Employee) {
        const body = {
            sysId: employee.sysId,
            eId: employee.eId,
            name: employee.name,
            level: employee.level,
            location: employee.location,
            birthday: employee.birthday
        };
        const endpoint = AWS_SERVER + '/rest/employees/' + employee.sysId;
        return this.http.post(endpoint, body);
    }
}
