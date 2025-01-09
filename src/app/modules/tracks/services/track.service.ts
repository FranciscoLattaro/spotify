import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environtments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private readonly URL = environment.api

  constructor(private httpClient: HttpClient) {
     
  }

  getAllTracks(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
  }
}
