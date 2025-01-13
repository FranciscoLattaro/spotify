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
  listObservers$: Array<Subscription> = []

  constructor(public multimediaService: MultimediaService) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(e => e.unsubscribe())
  }
}
