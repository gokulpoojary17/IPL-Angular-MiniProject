import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-editplayer',
  templateUrl: './editplayer.component.html',
  styleUrl: './editplayer.component.css'
})
export class EditplayerComponent {
  playerForm!: FormGroup;
  playerId!: any;
  teams = [
    { name: 'Mumbai Indians' },
    { name: 'Chennai Super Kings' },
    { name: 'Kolkata Knight Riders' },
    {name:'royal challengers bangalore'}
    // Add other teams as necessary
  ];
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.playerId = this.route.snapshot.paramMap.get('id')!;
    this.initializeForm();
    this.loadPlayerDetails();
  }

  initializeForm(): void {
    this.playerForm = this.fb.group({
      fullName: ['', Validators.required],
      team: ['', Validators.required],
      dob: ['', Validators.required],
      role: ['', Validators.required],

      runs: ['', [Validators.required, Validators.min(0)]],
      sixes: ['', [Validators.required, Validators.min(0)]],
      hundreds: ['', [Validators.required, Validators.min(0)]],
      fifties: ['', [Validators.required, Validators.min(0)]],
      battingStyle: ['', Validators.required],

    });
  }

  loadPlayerDetails(): void {
    this.playerService.getPlayerById(this.playerId).subscribe((player: Player) => {
      this.playerForm.patchValue({
        fullName: player.fullName,
        team: player.team,
        dob: player.dob,
        role:player.role,
        battingStyle:player.battingStyle,
        runs: player.runs,
        sixes: player.sixes,
        hundreds: player.hundreds,
        fifties: player.fifties,
      });
    });
  }

  updatePlayer(): void {
    if (this.playerForm.valid) {
      const updatedPlayer: Player = { ...this.playerForm.value, id: this.playerId };
      this.playerService.updatePlayer(updatedPlayer).subscribe(() => {
        this.router.navigate(['/list']);  // Redirect to the players list
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/list']);  // Go back to the players list
  }
}
