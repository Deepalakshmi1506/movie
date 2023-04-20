import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ResentMoviesComponent } from './resent-movies/resent-movies.component';
import { OldMoviesComponent } from './old-movies/old-movies.component';
import { TamilComponent } from './tamil/tamil.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {path:"test",component:TestComponent},
  {path:"resent-movies",component:ResentMoviesComponent},
  {path:"old-movies",component:OldMoviesComponent},
  {path:"tamil",component:TamilComponent},
  {path:"pipes",component:PipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ 

}
