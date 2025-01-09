import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover: 'https://www.electricdust.net/wp-content/uploads/2021/07/3052fa49-7a5a-1f3e-57b6-cf778c50300a.jpg',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    url: '',
    _id: '',
  }

  listObservers$: Array<Subscription> = [

  ]

  constructor(private multimediaService: MultimediaService) {

  }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (res: TrackModel) => {
        console.log('Recibiendo track: ', res)
      }
    )

    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(e => e.unsubscribe())
  }
}
