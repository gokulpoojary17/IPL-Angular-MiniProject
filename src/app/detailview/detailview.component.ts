import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrl: './detailview.component.css'
})
export class DetailviewComponent {

  players: Player[] = [];
  teams = [
    { name: 'Mumbai Indians', jerseyColor: 'blue', isDarkColor: true },
    { name: 'Chennai Super Kings', jerseyColor: 'yellow', isDarkColor: false },
    { name: 'Kolkata Knight Riders', jerseyColor: 'purple', isDarkColor: true },
    { name: 'royal challengers bangalore', jerseyColor: 'red', isDarkColor: true },

    // other teams...
  ];

  constructor(private http: HttpClient,private playerService:PlayerService,private router:Router) { }

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
  deletePlayer(playerId: number): void {
    if (confirm('Are you sure you want to delete this player?')) {
      this.playerService.deletePlayer(playerId).subscribe(() => {
        this.players = this.players.filter(player => player.id !== playerId);
        alert('Player deleted successfully!');
      }, error => {
        console.error('Error deleting player:', error);
        alert('Failed to delete player.');
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/list']); // Adjust the route as necessary
  }

  
}
