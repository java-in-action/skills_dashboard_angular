import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/Employee';
import { EmployeeService } from '../../services/employee.service';


@Component({
    selector: 'app-table-employee',
    templateUrl: './table-employee.component.html',
    styleUrls: ['./table-employee.component.css']
})

export class TableEmployeeComponent implements OnInit {
    displayedColumns: string[] = ['eId', 'name', 'level', 'location', 'actions'];
    dataSource;
    @Input() data: Employee;

    constructor(private employeeService: EmployeeService) {
        this.dataSource = this.data;
    }

    ngOnInit() {
        this.dataSource = this.data;
    }

    onClickNombre(val) {
        console.log(val);
    }
}
