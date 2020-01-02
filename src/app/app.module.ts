import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderModule } from './components/header/header.module'
import { FooterModule } from './components/footer/footer.module'


import { HomePageModule } from './pages/home/home.module'
import { ProjectPageModule } from './pages/project/project.module'
import { LifePageModule } from './pages/life/life.module'
import { ResumePageModule } from './pages/resume/resume.module'
import { ContactPageModule } from './pages/contact/contact.module'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    HomePageModule,
    ProjectPageModule,
    LifePageModule,
    ResumePageModule,
    ContactPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
