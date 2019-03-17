import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from './projects/projects.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {InfoComponent} from './info/info.component';
import {BottomComponent} from './bottom/bottom.component';

const routes: Routes = [
  {path: 'portfolio', component: ProjectsComponent, data: {title: 'Projects'}},
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {

}

export const routingComponents = [ProjectsComponent, HomeComponent];
