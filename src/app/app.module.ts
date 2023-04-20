import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule, NgModel } from '@angular/forms';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { ResentMoviesComponent } from './resent-movies/resent-movies.component';
import { OldMoviesComponent } from './old-movies/old-movies.component';
import { TamilComponent } from './tamil/tamil.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomComponent } from './custom/custom.component';
import { CustomsPipe } from './customs.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AllMoviesComponent,
    ResentMoviesComponent,
    OldMoviesComponent,
    TamilComponent,
    PipesComponent,
    CustomComponent,
    CustomsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
