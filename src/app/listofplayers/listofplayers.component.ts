import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-listofplayers',
  templateUrl: './listofplayers.component.html',
  styleUrl: './listofplayers.component.css'
})
export class ListofplayersComponent {
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
this.playerService.getPlayers().subscribe((data: any) => {
  this.players = data;
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



  
}
