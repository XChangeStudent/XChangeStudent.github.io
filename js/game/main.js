var Game = null;

function prepareGame(jQuery)
{
    $("#Save").click(function()
    {
      if (window.Game)
        SaveGame(window.Game);
    });
    $("#Load").click(function()
    {
      LoadGame();
    });
    InitSelector();

    loadScriptForGame('game.js', function(){
      console.log('On a load game.js');
      window.Game = new Game();
      run();
    });
}

function InitSelector()
{
  window.RollDice = $("#RollDice");
  window.ComboBox = $("#ComboBox");
  window.UseCombo = $("#UseCombo");
  window.CancelBtn = $("#CancelBtn");
  window.ValidBtn = $("#ValidBtn");
  window.ImgBox = $("#ImgBox");
  window.VideoBox = $("#VideoBox");

  window.ValidBtn.click(function()
  {
    ValidBtnClick();
  });

}

function SaveGame(g)
{
  var save = JSON.stringify(g);
  window.localStorage['XChangeSave'] = save;
  alert('Game Saved in localStorage');
}

function LoadGame()
{
  window.Game = JSON.parse(window.localStorage['XChangeSave']);
  run();
}


/*
Function redifined inside every Step
*/
function InitFunction()
{
  play = function(g)  {
    alert("Error play function isn't override by a StepX.js file");
  };

  ValidBtnClick = function () {
    alert("Error ValidBtnClick function isn't override by a StepX.js file");
  }
}

/*
HELPERS
*/
function HideAll()
{
  window.RollDice.hide();
  window.ComboBox.hide();
  window.UseCombo.hide();
  window.CancelBtn.hide();
  window.ValidBtn.hide();
  window.ImgBox.hide();
  window.VideoBox.hide();
}

function loadScriptForGame(url, callback)
{
  //Each time we laod another scene i reset function
  InitFunction();
  jQuery.ajax(
    {
      url: 'js/game/'+url,
      dataType: 'script',
      success: callback,
      async: true
    });
}

function run() {
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

$(document).ready(prepareGame);
