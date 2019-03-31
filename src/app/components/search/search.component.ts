import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public results: any[] = []

  constructor( private spotify: SpotifyService ) { }

  ngOnInit() {
  }

  buscar( termino:string ){
    
    this.spotify.getArtista( termino )
        .subscribe( ( resp:any ) => {
          this.results = resp;
        });
  }

}
