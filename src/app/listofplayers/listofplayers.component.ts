import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';
import { Subject } from 'rxjs';
import DataTables, { Config } from 'datatables.net';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-listofplayers',
  templateUrl: './listofplayers.component.html',
  styleUrl: './listofplayers.component.css'
})
export class ListofplayersComponent implements OnInit {
  
  dtoptions:Config={}
  dttrigger:Subject<any>= new Subject<any>()
  players: Player[] = [];
  teams = [
    { name: 'Mumbai Indians', jerseyColor: 'blue', isDarkColor: true },
    { name: 'Chennai Super Kings', jerseyColor: 'yellow', isDarkColor: false },
    { name: 'Kolkata Knight Riders', jerseyColor: 'purple', isDarkColor: true },
    { name: 'royal challengers bangalore', jerseyColor: 'red', isDarkColor: true },

    // other teams...
  ];
  editedPlayer: any = null; // To store the player being edited

  constructor(private http: HttpClient,private playerService:PlayerService) { }

  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'full_numbers',//pafination done in numbers
      // lengthMenu:[5,10] //loads page with these number of data in html remove trigeer and insert ngif=players .lehnth
     lengthMenu:[5,10]
    };
  
this.playerService.getPlayers().subscribe((data: any) => {
  this.players = data;
  this.dttrigger.next(this.players)
});
  }

  getTeamColor(team: string): { bgColor: string, textColor: string } {
    const teamDetails = this.teams.find(t => t.name === team);
    if (teamDetails) {
      return {
        bgColor: teamDetails.jerseyColor,
textColor: teamDetails.isDarkColor ? 'white' : 'black'
      };
    }
    return { bgColor: 'white', textColor: 'black' };
  }
  

  isDarkColor(teamName: string): boolean {
    const team = this.teams.find(t => t.name === teamName);
    return team ? team.isDarkColor : false;
  }

  ngOnDestroy(): void {
    this.dttrigger.unsubscribe();
  }


  
}
