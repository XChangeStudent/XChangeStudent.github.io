function Game ()
{
    this.step = 1;
    this.subStep = 1;
    this.run = run;
    this.play = play;
    this.resume = resume;
}

function run() {
  loadScriptForGame('Step01.js', function(){
    console.log('On a load Step01.js');
    play(this);
  });
}

function resume() {
  var fileName = 'Step';
  if (this.step < 10)
  {
    fileName += '0';
  }
  fileName += this.step + '.js';

  loadScriptForGame(fileName, function(){
    play(this);
  });
}

function play(g) {
  alert("Error play function isn't override by a StepX.js file");
}

function ValidBtnClick() {
  alert("Error ValidBtnClick function isn't override by a StepX.js file");
}
