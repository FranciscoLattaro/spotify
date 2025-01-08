import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small'
  @Input() track: TrackModel = { _id: 0, name: '', album: '', url: '', cover: '' };

  constructor() { }

  ngOnInit(): void {
    console.log('Mode:', this.mode); // Imprime el modo
    console.log('Track:', this.track); // Imprime el track completo
    console.log('Track Properties:'); // Detalla cada propiedad
    console.log('ID:', this.track._id);
    console.log('Name:', this.track.name);
    console.log('Album:', this.track.album);
    console.log('URL:', this.track.url);
    console.log('Cover:', this.track.cover);
  }

}