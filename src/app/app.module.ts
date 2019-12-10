import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OverviewEmployeeComponent } from './components/overview-employee/overview-employee.component';
import { SearchEmployeeComponent } from './components/search-employee/search-employee.component';
import { SelectEmployeeComponent } from './components/select-employee/select-employee.component';
import { TableEmployeeComponent } from './components/table-employee/table-employee.component';
import { EmployeeService } from './services/employee.service';


const appRoutes: Routes = [
  { path: '', component: SearchEmployeeComponent },
  { path: 'overview/:id', component: OverviewEmployeeComponent },
  { path: 'overview', component: OverviewEmployeeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchEmployeeComponent,
    SelectEmployeeComponent,
    TableEmployeeComponent,
    OverviewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
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
