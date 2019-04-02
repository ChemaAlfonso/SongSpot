import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public newReleases: any[] = [];

  loading: boolean;
  error: boolean;
  mensajeError: string;
  mensajeStatus: number;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
        .subscribe( ( resp: any ) => {
          this.newReleases = resp;
          this.loading = false;
        }, ( err ) => {
          this.error = true;
          this.mensajeError  = err.error.error.message;
          this.mensajeStatus = err.error.error.status;
          console.log(err);
        })
   }

  ngOnInit() {
  }

}
