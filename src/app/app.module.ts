import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { OverviewEmployeeComponent } from './components/overview-employee/overview-employee.component';
import { SearchEmployeeComponent } from './components/search-employee/search-employee.component';
import { SelectEmployeeComponent } from './components/select-employee/select-employee.component';
import { TableEmployeeComponent } from './components/table-employee/table-employee.component';
import { EmployeeService } from './services/employee.service';

const appRoutes: Routes = [
    { path: '', component: SearchEmployeeComponent },
    { path: 'new', component: NewEmployeeComponent },
    { path: 'employee/:id', component: OverviewEmployeeComponent },
    { path: 'employee', component: OverviewEmployeeComponent },
    { path: 'employee/:id/edit', component: EditEmployeeComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        SearchEmployeeComponent,
        SelectEmployeeComponent,
        TableEmployeeComponent,
        OverviewEmployeeComponent,
        EmployeeFormComponent,
        EditEmployeeComponent,
        NewEmployeeComponent
    ],
    imports: [
        BrowserModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatIconModule,
        HttpClientModule,
        MatButtonModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [
        EmployeeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
