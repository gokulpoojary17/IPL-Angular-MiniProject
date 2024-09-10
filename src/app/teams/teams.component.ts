import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  teams = [
    { name: 'Mumbai Indians', jerseyColor: 'blue', isDarkColor: true },
    { name: 'Chennai Super Kings', jerseyColor: 'yellow', isDarkColor: false },
    { name: 'Kolkata Knight Riders', jerseyColor: 'purple', isDarkColor: true },
    { name: 'royal challengers bangalore', jerseyColor: 'red', isDarkColor: true },

  ];
  
  
}
