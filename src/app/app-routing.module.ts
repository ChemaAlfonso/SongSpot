import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { ErrorComponent } from './components/shared/error/error.component';

const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent },
  {path: 'artista', component: ArtistaComponent },
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', component: ErrorComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot( ROUTES, { useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
