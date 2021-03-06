import { NgModule } from '@angular/core';
import { EmployeeService } from './services/empservice.service'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchEmployeeComponent } from './components/fetchemployee/fetchemployee.component';
import { createemployee } from './components/addemployee/Addemployee.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchEmployeeComponent,
    createemployee,
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'fetch-employee', component: FetchEmployeeComponent },
      { path: 'register-employee', component: createemployee },
      { path: 'employee/edit/:id', component: createemployee },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [EmployeeService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
