import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './Components/Day2/first/first.component';
import { SecondComponent } from './Components/Day2/second/second.component';
import { ThirdComponent } from './Components/Day2/third/third.component';
import { AllInOneComponent } from './Components/Day3/all-in-one/all-in-one.component';
import { LoginComponent } from './Components/Day3/ComponentInteraction/login/login.component';
import { RegistrationComponent } from './Components/Day4/ComponentInteraction/registration/registration.component';
// import { StudentsComponent } from './Components/Day4/ComponentInteraction/students/students.component';
import { StudentsComponent } from './Components/Day4/Routing/students/students.component';
import { ValidatorComponent } from './Components/Day4/Validation/validator/validator.component';
import { StudentDetailsComponent } from './Components/Day4/Routing/student-details/student-details.component';
import { HeaderComponent } from './Components/Day4/Routing/header/header.component';
import { ErrorComponent } from './Components/Day4/Routing/error/error.component';
import { ProfileComponent } from './Components/Day4/Routing/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Day4/Routing/home/home.component';

let routes:Routes = [
  {path:"",component:HomeComponent},
  {path:"students",component:StudentsComponent},
  {path:"students/:id",component:StudentDetailsComponent},
  {path:"profile",component:ProfileComponent},
  {path:"**",component:ErrorComponent}
]


//Decorator
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    AllInOneComponent,
    LoginComponent,
    RegistrationComponent,
    StudentsComponent,
    ValidatorComponent,
    StudentDetailsComponent,
    HeaderComponent,
    ErrorComponent,
    ProfileComponent,
    HomeComponent
    /**
     * 1- Components
     * 2- Pipes
     * 3- Directives
     */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    /**
     * 4-External Module [FormsModule - RouterModule - HttpModule]
     */
  ],
  providers: [
    /**
     * 5- Services
     */
  ],
  bootstrap: [AppComponent/**Root [Parent Component] */]
})
export class AppModule { }
