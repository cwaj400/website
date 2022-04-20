import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import {InfoComponent} from './info/info.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BannerComponent} from './banner/banner.component';
import {HomeComponent} from './home/home.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConstructionComponent } from './construction/construction.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    InfoComponent,
    HomeComponent,
    SocialButtonsComponent,
    PageNotFoundComponent,
    ConstructionComponent,
    PortfolioComponent,
    BlogComponent,
    AboutComponent
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

