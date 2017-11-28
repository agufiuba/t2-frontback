import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { CreateFormComponent } from "./create-form/create-form.component";
import { TableComponent } from "./table/table.component";
import { UserService } from "./user.service";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    CreateFormComponent,
    TableComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
