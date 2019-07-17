import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $( ".musicButton" ).click(function() {
			$(this).toggleClass( "musicMute" );
    });
    this.playMusic();
  }

  playMusic(){
    let audio = new Audio("/assets/Sounds/soundtrack.mp3");
    audio.loop = true;
    let playButton = document.getElementsByClassName("musicButton")[0];
    playButton.addEventListener("click", toggleMusic);

    //check if music is already on or not
    function toggleMusic(){
      if(audio.paused){
        audio.play();
      } else {
        audio.pause();
      }
    }
  }
}
