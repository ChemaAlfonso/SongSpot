import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor( private http: HttpClient ) {
    console.log('SpotifyService listo');
   }

   getQuery( query:string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCnXpAbeJarvVKePk6DCPZcQG-PI3kHHwRMfZueB0lJq2Q1yxX4DZQM8elBTvbcAgqWzJWB9_45O70Hc8s'
    });

    return this.http.get(url, { headers });

   }

   getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
                .pipe( map( (resp: any) => resp.albums.items ));
   }

   getArtista( termino: string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
               .pipe( map( resp => resp.artists.items ));
   }



}
