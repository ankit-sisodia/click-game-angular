import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items = new Array(9);
  diff = 'easy';
  mapDiffArr = {
    'easy': 3*3,
    'medium': 4*4,
    'hard': 6*6
  }
  highlight;
  timer = 120;
  totalScore = 0;
  highScore = JSON.parse(localStorage.getItem('highScore')) || {'easy': 0, 'medium': 0, 'hard': 0};
  currentHighScore = 0;
  constructor( ){}
  ngOnInit() {
    this.items = new Array(this.mapDiffArr['easy']);
    this.currentHighScore = this.highScore['easy'] || 0;
    setInterval(()=>{
      this.highlight = Math.floor((Math.random()*10));
      console.log(this.highlight);
      if(this.timer > 0){
        this.timer--;
      }
      if( this.timer === 0 ){
        let click = confirm("Game Over!!!");
        if (click) {
          this.restartHandler();
        }
      }
    }, 1000);
  }

  clickedHandler($event){
    if($event.add){
      this.totalScore++;
    } else {
      this.totalScore--;
    }
    // if( this.highScore[this.diff] < this.totalScore ){
    //   this.highScore[this.diff] = this.totalScore;
    //   localStorage.setItem('highScore', JSON.stringify(this.highScore));
    //   this.currentHighScore = this.highScore[this.diff];
    // }
  }

  setRadio(diff){
    this.diff = diff;
    this.items = new Array(this.mapDiffArr[diff]);
    this.restartHandler();
  }

  restartHandler(){
    if( this.highScore[this.diff] < this.totalScore ){
      this.highScore[this.diff] = this.totalScore;
      localStorage.setItem('highScore', JSON.stringify(this.highScore));
      this.currentHighScore = this.highScore[this.diff];
    }
    this.timer = 120;
    this.totalScore = 0;
    this.currentHighScore = this.highScore[this.diff];
  }
}
