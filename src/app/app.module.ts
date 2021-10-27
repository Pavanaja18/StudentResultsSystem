import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StudentResultsComponent } from './student-results/student-results.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminOperationsComponent } from './admin-operations/admin-operations.component';
import { ModalComponent } from './modal/modal.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { NgxPaginationModule} from 'ngx-pagination';
import {Ng2OrderModule} from 'ng2-order-pipe';
import { Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    StudentResultsComponent,
    LoginComponent,
    AboutUsComponent,
    HelpComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminComponent,
    AdminOperationsComponent,
    ModalComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    MDBBootstrapModulesPro.forRoot()
    
  ],
  
  providers:[ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
