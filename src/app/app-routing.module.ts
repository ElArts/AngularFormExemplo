import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './views/contato/contato.component';
import { ConsolesComponent } from './views/consoles/consoles.component';
import { DesktopComponent } from './views/desktop/desktop.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "contato", component: ContatoComponent},
  {path: "console", component: ConsolesComponent},
  {path: "desktop", component:  DesktopComponent},
  {path: "login", component:  LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
