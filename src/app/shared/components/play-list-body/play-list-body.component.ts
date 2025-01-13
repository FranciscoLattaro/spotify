import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  @Input() tracks: TrackModel[] = [] 
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }
  constructor(private trackService: TrackService) { }

  async ngOnInit(): Promise<void> { 
    await this.loadDataAll();
    this.tracks = [...this.tracksTrending]; // Asigna los datos después de cargarlos
  }

  async loadDataAll(): Promise<any> { //Puedo manejarlo como promesa (Investigar porque esta deprecated), tambien como función asincrona
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
  }

  loadDataRandom(): void {
    this.trackService.getAllRandom$().subscribe(
      res => {
        this.tracksRandom = res;
      },
      err => {
        console.log('Error de Conexión', err);
      }
    );
  }  

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }
}