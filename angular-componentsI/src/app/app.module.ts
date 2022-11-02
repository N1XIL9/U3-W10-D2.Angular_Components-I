import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPage } from './login/login.page';
import { SignupPage } from './signup/signup.page';
import { TodolistPage } from './todolist/todolist.page';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'signup',
    component: SignupPage,
  },
  {
    path: 'todolist',
    component: TodolistPage,
  },
];

@NgModule({
  declarations: [AppComponent, LoginPage, SignupPage, TodolistPage, HeaderComponent, FooterComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
