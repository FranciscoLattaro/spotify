import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environtments/environment';


@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private readonly URL = environment.api
  
  constructor(private http: HttpClient) { }

  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}: any) => {return data}),
        catchError( (err) => {
          console.log('Algo paso', err);
          return of([]);
        }
      )
    )
  }

  getAllRandom$(): Observable<any> {
    return this.http.get<{ data: any[] }>(`${this.URL}/tracks`).pipe(
      mergeMap(({ data }: any) => this.skipById(data, 1)), // Invierte los elementos del array
      //map(dataFiltered => dataFiltered.filter(track => track._id !== 1)) // Filtra los elementos
    );
  }

  private skipById(listTracks:TrackModel[], id:number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) =>{
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }
}
