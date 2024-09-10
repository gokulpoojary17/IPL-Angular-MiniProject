import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private apiurl='http://localhost:3000/players';

constructor(private http:HttpClient){}

addplayer(player:any):Observable <any> {
  return this.http.post<any>(this.apiurl,player)
}
getPlayers(): Observable<Player[]> {
  return this.http.get<Player[]>(this.apiurl);
}

deletePlayer(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiurl}/${id}`);
}
getPlayerById(id: number): Observable<Player> {
  return this.http.get<Player>(`${this.apiurl}/${id}`);
}
updatePlayer(player: Player): Observable<Player> {
  return this.http.put<Player>(`${this.apiurl}/${player.id}`, player);
}

getTopPlayers(criteria: string): Observable<any[]> {
  let url = `${this.apiurl}?_sort=${criteria}&_order=desc&_limit=5`;
  
  // Adjust criteria mapping if the query parameter is different
  switch (criteria) {
    case 'max-sixes':
      url = `${this.apiurl}?_sort=sixes&_order=desc&_limit=5`;
      break;
    case 'max-scorers':
      url = `${this.apiurl}?_sort=runs&_order=desc&_limit=5`;
      break;
    case 'max-100s':
      url = `${this.apiurl}?_sort=centuries&_order=desc&_limit=5`;
      break;
    case 'max-50s':
      url = `${this.apiurl}?_sort=fifties&_order=desc&_limit=5`;
      break;
    default:
      url = `${this.apiurl}`;
      break;
  }

  return this.http.get<any[]>(url);
}
}
