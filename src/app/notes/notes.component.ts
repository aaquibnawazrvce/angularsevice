import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  private _noteService: NotesService;

  notes: Notes[];
  errorsMsg: string;
  constructor(noteService: NotesService) {
    this._noteService = noteService;
  }

  ngOnInit() {
    this._noteService.getNotes().subscribe(
      data => this.notes = data,
      errors => this.errorsMsg = errors.message
      );
  }

}
