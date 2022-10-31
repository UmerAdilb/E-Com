import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import { NavComponent } from './components/nav/nav.component';
import {InputTextModule} from 'primeng/inputtext';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import {TabViewModule} from 'primeng/tabview';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    MenubarModule,
    InputTextModule,
    TabViewModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
