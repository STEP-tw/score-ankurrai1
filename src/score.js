let Score=function (initialScore,increment) {
  this.oldScore=initialScore;
  this.increment=increment;
  this.currentScore=0;
}

Score.prototype.updateScore=function () {
  this.oldScore=this.currentScore;
  this.currentScore+=this.increment;
}

Score.prototype.getNewScore=function () {
  this.updateScore();
  return this.currentScore;
}
