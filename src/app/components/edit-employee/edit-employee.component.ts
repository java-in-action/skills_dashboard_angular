import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
    selector: 'app-edit-employee',
    templateUrl: './edit-employee.component.html',
    styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
    @Input() employee: Employee = {
        name: undefined,
        birthday: undefined,
        eId: undefined,
        level: undefined,
        location: undefined,
        sysId: undefined
    };

    constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');

        this.employeeService.getEmployeeById(id).subscribe((val: any) => {
            this.employee = {
                sysId: val.sysId,
                birthday: val.birthday,
                eId: val.eId,
                level: val.level,
                location: val.location,
                name: val.name
            };
        }, (err) => {
            console.error(err);
        });
    }

    saveEmployee() {
        this.employeeService.updateEmployee(this.employee).subscribe(val => {
            console.log(val);
            this.router.navigate(['/'], { queryParams: { success: 1 } });
        });
    }

}
