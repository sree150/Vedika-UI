import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HeaderComponent } from './header/header.component';
import { FunctionhallComponent } from './functionhall/functionhall.component';
import { authGuards } from './auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'/header',pathMatch:'full'},
  { path:'login', component:LoginComponent,
    canActivate:[authGuards],canActivateChild:[authGuards]},
    
  { path:'help', component:HelpComponent},
  { path:'header',component:HeaderComponent},
  {path: 'searchbar', component: SearchbarComponent},
  {path: 'functionhall/:data', component: FunctionhallComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
