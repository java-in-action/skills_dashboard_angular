import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
    selector: 'app-new-employee',
    templateUrl: './new-employee.component.html',
    styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

    private employee: Employee = {
        birthday: '',
        eId: '',
        level: undefined,
        location: '',
        name: '',
        sysId: undefined
    };

    constructor(private employeeService: EmployeeService, private router: Router) { }

    ngOnInit() {
    }

    save() {
        this.employeeService.insertEmployee(this.employee).subscribe(val => {
            console.log(val);
            this.router.navigate(['/'], { queryParams: { success: 1 } });
        });
    }

}
