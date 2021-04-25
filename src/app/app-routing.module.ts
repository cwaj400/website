import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ConstructionComponent} from './construction/construction.component';
import {PortfolioComponent} from './portfolio/portfolio.component';

const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent, data: {title: 'Projects'}},
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'construction', component: ConstructionComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {

}

export const routingComponents = [HomeComponent];
