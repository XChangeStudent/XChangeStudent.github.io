var Game = null;
var Padding = 3;

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
    $("#Export").click(function()
    {
      if (window.Game)
        alert(window.localStorage['XChangeSave']);
    });
    $("#Import").click(function()
    {
      window.localStorage['XChangeSave'] = prompt("Please enter your JSON save");
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
  window.Info = $("#Info");

  window.ValidBtn.click(function()
  {
    ValidBtnClick();
  });

  window.UseCombo.click(function()
  {
    UseComboClick();
  });

  window.RollDice.click(function()
  {
    RollDiceClick();
  });

  window.CancelBtn.click(function()
  {
    CancelBtnClick();
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
  loadScriptForGame('game.js', function(){
    window.Game = new Game();
    var load = JSON.parse(window.localStorage['XChangeSave']);
    window.Game = Object.assign(window.Game, load);
    run();
  });
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

  UseComboClick = function () {
    alert("Error UseComboClick function isn't override by a StepX.js file");
  }

  RollDiceClick = function () {
    alert("Error RollDiceClick function isn't override by a StepX.js file");
  }

  CancelBtnClick = function () {
    alert("Error CancelBtnClick function isn't override by a StepX.js file");
  }
}

/*
HELPERS
*/
function padZero (str, max) {
  str = str.toString();
  return str.length < max ? padZero("0" + str, max) : str;
}

function rollDice (faces)
{
    var randomNumber = Math.floor(Math.random() * faces) + 1;
    return randomNumber;
}

function hasSideEffect(g)
{
  if (g.Permanant == 1)
    return true;
}

function HideAll()
{
  window.RollDice.hide();
  window.ComboBox.hide();
  window.UseCombo.hide();
  window.CancelBtn.hide();
  window.ValidBtn.hide();
  window.ImgBox.hide();
  window.VideoBox.hide();
  window.Info.empty();
}


MustChangeStep = function (n) {
  if(window.Game.subStep == n)
  {
    window.Game.subStep = 1;
    window.Game.step++;
    window.Info.empty();
    run();
    return true;
  }
  else
  {
    window.Game.subStep++;
    return false;
  }
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
  var fileName = 'Step' + padZero(window.Game.step, window.Padding) + '.js';
  loadScriptForGame(fileName, function(){
    play(window.Game);
  });
}

$(document).ready(prepareGame);
