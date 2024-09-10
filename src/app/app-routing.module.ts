import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { AddplayersComponent } from './addplayers/addplayers.component';
import { ListofplayersComponent } from './listofplayers/listofplayers.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { EditplayerComponent } from './editplayer/editplayer.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TopscoresComponent } from './topscores/topscores.component';
import { TophundredsComponent } from './tophundreds/tophundreds.component';
import { TopfiftiesComponent } from './topfifties/topfifties.component';

const routes: Routes = [
  { path: "teams", component: TeamsComponent },
  { path: "addplayers", component: AddplayersComponent },
  { path: "list", component: ListofplayersComponent },
  { path: "view", component: DetailviewComponent },
  { path: 'edit-player/:id', component: EditplayerComponent },
  { path: 'statistics', component: StatisticsComponent},
  
  {path:"runs",component:TopscoresComponent},
  {path:"hundreds",component:TophundredsComponent},
  {path:"fifties",component:TopfiftiesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
