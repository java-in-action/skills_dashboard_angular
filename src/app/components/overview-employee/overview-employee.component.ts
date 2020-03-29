import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/interfaces/Employee';
import { Skill } from 'src/app/interfaces/Skill';
import { SkillsService } from 'src/app/services/skills.service';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-overview-employee',
  templateUrl: './overview-employee.component.html',
  styleUrls: ['./overview-employee.component.css']
})
export class OverviewEmployeeComponent implements OnInit {
  employee: Employee;
  private skills: Array<Skill> = [];

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private skillsService: SkillsService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.employeeService.getEmployeeById(id).subscribe((val: any) => {
      this.employee = {
        sysId: val.sysId,
        birthday: val.bithday,
        eId: val.eId,
        level: val.level,
        location: val.location,
        name: val.name
      };
    }, err => {
      console.error(err);
    });

    this.skillsService.getSkillsByEmployee(id).subscribe((val: any) => {
      for (let obj of val) {
        let skill: Skill = {
          id: obj.id,
          description: obj.description
        };

        this.skills.push(skill);
      }
    }, err => {
      console.error(err);
    });
  }

}
