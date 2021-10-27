import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentResultsComponent} from './student-results/student-results.component';
import { AboutUsComponent} from './about-us/about-us.component';
import { HelpComponent} from './help/help.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent} from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent} from './admin/admin.component';
import { AdminOperationsComponent } from './admin-operations/admin-operations.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'users/:id',component:StudentResultsComponent},
  {path:'AboutUs',component:AboutUsComponent},
  {path:'Help',component:HelpComponent},
  {path:'adminLogin' ,component:AdminLoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'adminOperations/:id',component:AdminOperationsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
