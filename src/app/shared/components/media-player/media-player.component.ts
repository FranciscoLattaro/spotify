import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environtments/environment';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  private URL = environment.api;
  mockCover: TrackModel = {
    cover: 'https://www.electricdust.net/wp-content/uploads/2021/07/3052fa49-7a5a-1f3e-57b6-cf778c50300a.jpg',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    url: '',
    _id: '',
  }

  listObservers$: Array<Subscription> = [

  ]

  constructor(private multimediaService: MultimediaService, private trackService: TrackService) {

  }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (res: TrackModel) => {
        console.log('Recibiendo track: ', res)
      }
    )
    const observer2$: Subscription = this.trackService.getAllTracks().subscribe(
      res => {this.mockCover = res.data[Math.floor(Math.random() * 8)];}  
    )

    this.listObservers$.push(observer1$,observer2$)
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(e => e.unsubscribe())
  }
}
