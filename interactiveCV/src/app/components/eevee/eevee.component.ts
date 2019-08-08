import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eevee',
  templateUrl: './eevee.component.html',
  styleUrls: ['./eevee.component.css']
})
export class EeveeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isClicked = false;

  catchEevee(){
    
    //document.getElementById("introEevee").addEventListener("click", this.throwPokeball);
  }

  throwPokeball(){}


}
