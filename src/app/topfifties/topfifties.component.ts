import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-topfifties',
  templateUrl: './topfifties.component.html',
  styleUrl: './topfifties.component.css'
})
export class TopfiftiesComponent {


  // topSixes: Player[] = [];
  // topScorers: Player[] = [];
  // topHundreds: Player[] = [];
  topFifties: Player[] = [];

  

  constructor(private route: ActivatedRoute, private playerService: PlayerService,private http:HttpClient) { }



  ngOnInit() {
    this.http.get<Player[]>('http://localhost:3000/players')
      .subscribe(data => {
        // this.topSixes = data.sort((a, b) => b.sixes - a.sixes).slice(0, 5);
        // this.topScorers = data.sort((a, b) => b.runs - a.runs).slice(0, 5);
        // this.topHundreds = data.sort((a, b) => b.hundreds - a.hundreds).slice(0, 5);
        this.topFifties = data.sort((a, b) => b.fifties - a.fifties).slice(0, 5);
      });
     
  }
}
