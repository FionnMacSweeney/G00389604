import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import{MoviesService} from '../Services/movies.service';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
henryRating:string = "";
christopherRating:string ="";
brandonRating:string ="";
tylerRating:string ="";

  constructor(private storage:Storage) { }

  ngOnInit() {
  }

  //method to retrieve the data that was saved using the save button on actors page and allows you to display it on home page 
  ionViewDidEnter(){
    this.storage.create()
    .then(()=>{
      this.storage.get('henryStatus')
      .then((henryStatus)=>{
        this.henryRating = henryStatus;
      })
      .catch();
    })


    .then(()=>{
      this.storage.get('christopherStatus')
      .then((christopherStatus)=>{
        this.christopherRating = christopherStatus;
      })
      .catch();
    })



    .then(()=>{
      this.storage.get('brandonStatus')
      .then((brandonStatus)=>{
        this.brandonRating = brandonStatus;
      })
      .catch();
    })


    .then(()=>{
      this.storage.get('tylerStatus')
      .then((tylerStatus)=>{
        this.tylerRating = tylerStatus;
      })
      .catch();
    })

    
    .catch()
    
  }

  

}


