import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ContatoComponent } from './views/contato/contato.component';
import { HeaderComponent } from './views/header/header.component';
import { DesktopComponent } from './views/desktop/desktop.component';
import { NotebooksComponent } from './views/notebooks/notebooks.component';
import { ConsolesComponent } from './views/consoles/consoles.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { LoginComponent } from './views/login/login.component';
import { HttpClientModule } from '@angular/common/http';;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    HeaderComponent,
    DesktopComponent,
    NotebooksComponent,
    ConsolesComponent,
    JogosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // ^Modulo para formulário
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
