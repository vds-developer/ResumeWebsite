import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './pages/home/home.component'
import { ProjectPage } from './pages/project/project.component'
import { LifePage } from './pages/life/life.component'
import { ResumePage } from './pages/resume/resume.component'
import { ContactPage } from './pages/contact/contact.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'projects', component: ProjectPage },
  { path: 'life', component: LifePage },
  { path: 'resume', component: ResumePage },
  { path: 'contact', component: ContactPage}
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
