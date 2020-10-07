import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { CreditoServiceService } from './credito-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    NavMenuComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CreditoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
