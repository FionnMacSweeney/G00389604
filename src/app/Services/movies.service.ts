import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) { }

  //gets movie data from API
  GetMovieData():Observable<any>{
    
   return this.httpClient.get('https://www.omdbapi.com/?s=superman&Wars&apikey=5411542e');

  }
}
