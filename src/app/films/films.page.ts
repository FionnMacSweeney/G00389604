import { Component, OnInit } from '@angular/core';
import{MoviesService} from '../Services/movies.service';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  MovieData:any=[];
    constructor(private movieService:MoviesService) {}
  
    //gets movie data from api when app starts
    ngOnInit() {
      this.movieService.GetMovieData().subscribe(
        (data)=>{
          this.MovieData = data.Search;
          console.log(this.MovieData);
          
        }
      );
    }
  
  }
