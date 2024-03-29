import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsHardComponent } from './components/skills-hard/skills-hard.component';
import { SkillsSoftComponent } from './components/skills-soft/skills-soft.component';
import { LoginComponent } from './components/login/login.component';
import { SkillAddEditComponent } from './modales/skill-add-edit/skill-add-edit.component';
import { SkillSoftAddEditComponent } from './modales/skill-soft-add-edit/skill-soft-add-edit.component';
import { EduAddEditComponent } from './modales/edu-add-edit/edu-add-edit.component';
import { ExpeAddEditComponent } from './modales/expe-add-edit/expe-add-edit.component';
import { AboutmeAddEditComponent } from './modales/aboutme-add-edit/aboutme-add-edit.component';
import { ProyeAddEditComponent } from './modales/proye-add-edit/proye-add-edit.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { InteresAddEditComponent } from './modales/interes-add-edit/interes-add-edit.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RedComponent } from './components/red/red.component';
import { RedAddEditComponent } from './modales/red-add-edit/red-add-edit.component';
import { ContactoAddEditComponent } from './modales/contacto-add-edit/contacto-add-edit.component';
import { BackgroundComponent } from './components/background/background.component';
import { BotonScrollComponent } from './components/boton-scroll/boton-scroll.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationComponent,
    AboutmeComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    SkillsHardComponent,
    SkillsSoftComponent,
    LoginComponent,
    SkillAddEditComponent,
    SkillSoftAddEditComponent,
    ExpeAddEditComponent,
    AboutmeAddEditComponent,
    EduAddEditComponent,
    ProyeAddEditComponent,
    ContactoComponent,
    ErrorPageComponent,
    InteresAddEditComponent,
    WelcomeComponent,
    RedComponent,
    RedAddEditComponent,
    ContactoAddEditComponent,
    BackgroundComponent,
    BotonScrollComponent

  ],

  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
