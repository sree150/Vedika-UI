import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { FunctionhallComponent } from './functionhall/functionhall.component';
import { SearchService } from './search.service';
import  { NgbModule,NgbDatepickerModule,NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { authGuards } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HelpComponent,
    LoginComponent,
    SearchbarComponent,
    HeaderComponent,
    FunctionhallComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    NgbModule,NgbDatepickerModule,NgbTimepickerModule
  ],

  providers: [SearchService,authGuards
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
