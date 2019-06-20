import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
// import { AppRoutingModule } from './app-routing.module';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavComponent } from './nav/nav.component';
import { FeatureProjectComponent } from './feature-project/feature-project.component';
import { RecommendedProjectsComponent } from './recommended-projects/recommended-projects.component';
import { GenreProjectsComponent } from './genre-projects/genre-projects.component';
import { KickstarterNewsComponent } from './kickstarter-news/kickstarter-news.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavComponent,
    FeatureProjectComponent,
    RecommendedProjectsComponent,
    GenreProjectsComponent,
    KickstarterNewsComponent,
    SearchComponent,
    FooterComponent,
    ProjectdetailComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    routing,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
