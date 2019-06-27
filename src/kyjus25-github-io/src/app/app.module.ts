import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './main/left/about/about.component';
import { LatestProjectComponent } from './main/left/latest-project/latest-project.component';
import { GithubComponent } from './main/left/github/github.component';
import { WorkComponent } from './main/left/work/work.component';
import { ArtistsComponent } from './main/right/artists/artists.component';
import { CreditsComponent } from './main/right/credits/credits.component';
import { EducationComponent } from './main/right/education/education.component';
import { InformationComponent } from './main/right/information/information.component';
import { LanguagesComponent } from './main/right/languages/languages.component';
import { SkillsComponent } from './main/right/skills/skills.component';
import { TestimonialsComponent } from './main/right/testimonials/testimonials.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AboutComponent,
    LatestProjectComponent,
    GithubComponent,
    WorkComponent,
    ArtistsComponent,
    CreditsComponent,
    EducationComponent,
    InformationComponent,
    LanguagesComponent,
    SkillsComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
