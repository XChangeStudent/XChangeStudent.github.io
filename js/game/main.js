var window.Game = null;

function prepareGame(jQuery)
{
  /*First we laod the Game Objet
    This objet will record a lot of variable.
    Like in wich step we are the choice we mad
    it will help to only show usefull caption
    and to load or save a game state.
    */
    loadScriptForGame('game.js', function(){
      console.log("Game Class is Loaded");
      window.Game = new Game();
      window.Game.run();
    });
}

function SaveGame(g)
{
  var save = JSON.stringify(g);
  window.localStorage['XChangeSave'] = save;
}

function LoadGame()
{
  window.Game = JSON.parse(window.localStorage['XChangeSave']);
  window.Game.resume();
}

/*
HELPERS
*/
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