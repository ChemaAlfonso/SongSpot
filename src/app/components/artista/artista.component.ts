import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any[] = [];
  topTracks: any[] = [];
  
  loading: boolean;

  constructor( private route: ActivatedRoute,
              private spotify: SpotifyService ) {
      this.loading = true;

      this.route.params.subscribe( params => {
      this.getArtista( params.id );
      this.getTopTracks( params.id );
    });
   }

  ngOnInit() {
  }

  getArtista( id: string ){
    this.spotify.getArtista( id )
      .subscribe( ( data:any ) => {
        this.artista = data;
        this.loading = false;
      });

  }

  getTopTracks( id: string ){
    this.spotify.getTopTracks( id )
        .subscribe( ( data: any ) => {
          this.topTracks = data;
        });
  }

}
