function Game ()
{
    this.step = 1;
    this.subStep = 1;
    this.run = run;
}

function run() {
  loadScriptForGame('Step01.js', function(){
    play(g);
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
    play(g);
  });
}


function play(g) {
  alert("Error play function isn't override by a StepX.js file");
}
