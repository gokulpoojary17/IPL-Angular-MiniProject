import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { AddplayersComponent } from './addplayers/addplayers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DateformatPipe } from './pipes/dateformat.pipe';
import { ListofplayersComponent } from './listofplayers/listofplayers.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { EditplayerComponent } from './editplayer/editplayer.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TopscoresComponent } from './topscores/topscores.component';
import { TophundredsComponent } from './tophundreds/tophundreds.component';
import { TopfiftiesComponent } from './topfifties/topfifties.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    AddplayersComponent,
    DateformatPipe,
    ListofplayersComponent,
    DetailviewComponent,
    EditplayerComponent,
    StatisticsComponent,
    TopscoresComponent,
    TophundredsComponent,
    TopfiftiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
