import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.page.html',
  styleUrls: ['./actors.page.scss'],
})
export class ActorsPage implements OnInit {
  henryRating:string = "";
  christopherRating:string = "";
  brandonRating:string = "";
  tylerRating:string = "";

  constructor(private storage:Storage) { }

  ngOnInit() {
  }

  //method to save the rating for Henry
  saveHenryRating(){
    this.storage.create()
    .then(()=>{
      this.storage.set("henryStatus",this.henryRating)
      .then(()=>{console.log(this.henryRating)})
      .catch();
    })
    .catch();
  }

  //method to save the rating for Christopher

  saveChristopherRating(){
    this.storage.create()
    .then(()=>{
      this.storage.set("christopherStatus",this.christopherRating)
      .then(()=>{console.log(this.christopherRating)})
      .catch();
    })
    .catch();
  }

  //method to save the rating for Brandon
  saveBrandonRating(){
    this.storage.create()
    .then(()=>{
      this.storage.set("brandonStatus",this.brandonRating)
      .then(()=>{console.log(this.brandonRating)})
      .catch();
    })
    .catch();
  }

  //method to save the rating for Tyler
  saveTylerRating(){
    this.storage.create()
    .then(()=>{
      this.storage.set("tylerStatus",this.tylerRating)
      .then(()=>{console.log(this.tylerRating)})
      .catch();
    })
    .catch();
  }

}
