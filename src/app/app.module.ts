import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { BottomComponent } from './bottom/bottom.component';
import { InfoComponent } from './info/info.component';
import { AutosComponent } from './tipos/autos/autos.component';
import { CamionesComponent } from './tipos/camiones/camiones.component';
import { MotosComponent } from './tipos/motos/motos.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AutoPublishComponent } from './auto-publish/auto-publish.component';
import { PatioComponent } from './patio/patio.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    BottomComponent,
    InfoComponent,
    AutosComponent,
    CamionesComponent,
    MotosComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    AutoPublishComponent,
    PatioComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
