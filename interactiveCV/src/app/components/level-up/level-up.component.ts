import { Component, OnInit } from '@angular/core';
//import {getLevel, getLevelBar} from '../../../assets/JS/getLevel.js';
declare const getLevel: any;
declare const getLevelBar: any;

@Component({
  selector: 'app-level-up',
  templateUrl: './level-up.component.html',
  styleUrls: ['./level-up.component.css']
})
export class LevelUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.useGetLevel();
  }

  useGetLevel(){
    document.getElementById("level").innerHTML = getLevel();
		document.getElementById("bar").style.width = (getLevelBar()*97+"%"); //max width% of levelbar is 97%
  }
}
