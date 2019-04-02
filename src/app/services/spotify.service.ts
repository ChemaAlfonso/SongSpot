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
      'Authorization': 'Bearer BQBY1arQ_0doBwwmhCIDovwnZA-CqlPf_e76ItUea6-g2B9iTYf9lLlFKUty0hgN4ONIJ-3MX9vZNGXWOeQ'
    });

    return this.http.get(url, { headers });

   }

   getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
                .pipe( map( ( resp: any ) => resp.albums.items ));
   }

   getArtistas( termino: string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
               .pipe( map( ( resp: any ) => resp.artists.items ));
   }

   getArtista( id: string ){

    return this.getQuery(`artists/${ id }`);
              // .pipe( map( (resp:any) => resp.artists.items ));
   }
   
   getTopTracks( id: string ){

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
               .pipe( map( ( resp: any ) => resp.tracks ));
   }


}
