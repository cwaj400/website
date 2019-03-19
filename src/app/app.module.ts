import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import {InfoComponent} from './info/info.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OptionsComponent} from './options/options.component';
import {BottomComponent} from './bottom/bottom.component';
import {BannerComponent} from './banner/banner.component';
import {MidComponent} from './mid/mid.component';
import {SkillsComponent} from './skills/skills.component';
import {ProjectsComponent} from './projects/projects.component';
import {HomeComponent} from './home/home.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConstructionComponent } from './construction/construction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    BannerComponent,
    OptionsComponent,
    BottomComponent,
    ProjectsComponent,
    MidComponent,
    InfoComponent,
    HomeComponent,
    SocialButtonsComponent,
    PageNotFoundComponent,
    ConstructionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    /**
     * Consists of SkillsComponent (Who Am I etc), and PortfolioComponent
     */]
})
export class AppModule {

}

