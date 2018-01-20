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
      window.Game.run();
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
    window.Game.ValidBtnClick();
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
  window.Game.resume();
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
  jQuery.ajax(
    {
      url: 'js/game/'+url,
      dataType: 'script',
      success: callback,
      async: true
    });
}

$(document).ready(prepareGame);
