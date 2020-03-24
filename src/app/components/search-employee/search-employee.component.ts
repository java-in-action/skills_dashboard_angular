import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { EmployeeService } from '../../services/employee.service';



@Component({
    selector: 'app-search-employee',
    templateUrl: './search-employee.component.html',
    styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

    private alertaSuccess: boolean = false;
    idInput;
    eId = '123';
    dataSource;
    originalDataSource;
    constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {
        this.employeeService.getEmployees()
            .subscribe(
                (data) => {
                    this.dataSource = data;
                    this.originalDataSource = data;
                    console.log(this.dataSource);
                },
                (error) => {
                    console.error('Error en getEmployees(): ' + JSON.stringify(error));
                }
            );
    }

    ngOnInit() {
        this.route.queryParamMap.pipe(map(val => {
            return !!val.get('success') || false;
        })).subscribe(val => {
            this.alertaSuccess = val;
        });
    }

    doFilter(input) {
        let filteredData = [];
        input = input.trim().toUpperCase();
        if (input) {
            filteredData = this.dataSource.filter((employee) => {
                return employee.eId.toUpperCase().includes(input);
            });
        } else {
            // reset the table when input is empty
            filteredData = this.originalDataSource;
        }
        this.dataSource = filteredData;
    }

    newEmployee() {

    }
}
