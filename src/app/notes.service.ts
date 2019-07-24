import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private _urlNotes ='http://localhost:9085/api/notes';
  private http: HttpClient;
  constructor(httpT: HttpClient) {
    this.http = httpT;
  }

  getNotes(): Observable<Notes[]> {
   return  this.http.get<Notes[]>(this._urlNotes);
  }
}
