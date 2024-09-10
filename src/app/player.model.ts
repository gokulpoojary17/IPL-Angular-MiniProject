export interface Player {
    id: number;           // Unique identifier for the player
    fullName: string;         // Player's name
    team: string;         // Team name (should match the team names in your team list)
    dob: string;          // Date of birth in 'dd-mm-yyyy' format
    runs: number;         // Total runs scored by the player
    sixes: number;  
    role:string;      // Total number of sixes hit by the player
    hundreds: number; 
    battingStyle:string;    // Total number of centuries (100s) scored by the player
    fifties: number;      // Total number of half-centuries (50s) scored by the player
  }
//   "id": "3070",
//   "fullName": "gokulssas",
//   "dob": "2222-02-12",
//   "batting": "Right Hand",
//   "role": "ahjj",
//   "team": "Chennai Super Kings",
//   "matches": 2,
//   "sixes": 2,
//   "fours": 2,
//   "runs": 2,
//   "hundreds": 2,
//   "fifties": 2