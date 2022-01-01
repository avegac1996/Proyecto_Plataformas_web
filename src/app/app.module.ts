import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CabezeraComponent } from './components/cabezera/cabezera.component';
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabezeraComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
