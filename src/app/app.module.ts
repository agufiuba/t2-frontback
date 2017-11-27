import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { CreateFormComponent } from "./create-form/create-form.component";
import { TableComponent } from "./table/table.component";
import { UserService } from "./user.service";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    CreateFormComponent,
    TableComponent,
    LoginComponent
  ],
  imports: [BrowserModule, HttpModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
