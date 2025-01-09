import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import dataRaw from '../../../data/tracks.json'

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  @Input() tracks: TrackModel[] = [] 
  @Input() numeros: Number[] = []
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }
  constructor() { }

  ngOnInit(): void { 
    const data: any = (dataRaw.data as any);
    this.tracks = data
    this.numeros = [1,2,3]
  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }
}