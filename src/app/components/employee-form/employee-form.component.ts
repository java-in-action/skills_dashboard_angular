import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/Employee';

@Component({
    selector: 'app-employee-form',
    templateUrl: './employee-form.component.html',
    styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
    @Input() employee: Employee = {
        name: undefined,
        birthday: undefined,
        eId: undefined,
        level: undefined,
        location: undefined,
        sysId: undefined
    };

    constructor() { }

    ngOnInit() {
    }

}
