function Game ()
{
    this.step = 1;
    this.subStep = 1;
    this.run = run;
    this.play = play;
    this.resume = resume;
    this.ValidBtnClick = ValidBtnClick;
}

function run() {
  loadScriptForGame('Step01.js', function(){
    console.log('On a load Step01.js');
    play(window.Game);
  });
}

function resume() {
  var fileName = 'Step';
  if (window.Game.step < 10)
  {
    fileName += '0';
  }
  fileName += window.Game.step + '.js';

  loadScriptForGame(fileName, function(){
    play(window.Game);
  });
}

function play(g) {
  alert("Error play function isn't override by a StepX.js file");
}

function ValidBtnClick() {
  alert("Error ValidBtnClick function isn't override by a StepX.js file");
}
