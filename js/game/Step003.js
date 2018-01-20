var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  var msg = window.Info.html();
  HideAll();
  switch (g.subStep)
  {
    case 1:
      buildPrevention();
      window.ImgBox.attr('src', path + '1.png');
      window.ImgBox.show();
      break;
    case 2:
      window.ImgBox.attr('src', path + '1.png');
      window.ImgBox.show();
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.Info.append(msg);
      window.Info.show();
    default:
      alert("Error unknow case!");
      break;
    }
};

function buildPrevention()
{
  window.RollDice.html('Roll 1D20');
  window.RollDice.show();
  window.CancelBtn.html('Choose pill');
  window.CancelBtn.show();
  window.ValidBtn.html('Choose condom');
  window.ValidBtn.show();
}

RollDiceClick = function () {
  HideAll();
  var roll = rollDice(20);
  window.Info.append('You roll :' + roll + '<br />');
  var src = path + '3.mp4';
  window.ValidBtn.html('Next');
  window.ValidBtn.show();
  switch (roll)
  {
      case 1:
        window.Method = 'Condom';
        window.Info.append('Bad luck for you... all left is condom if you want to use it after all.<br />');
        src = path + '2.mp4';
        window.Game.subStep++;
        break;
      case 2: case 3: case 4: case 5: case 6:
        window.CancelBtn.html('Choose pill');
        window.CancelBtn.show();
        window.ValidBtn.html('Choose condom');
        window.ValidBtn.show();
        window.Info.append('It didn\'t work but you can still choose another way.<br />');
        break;
      case 7: case 8: case 9: case 10: case 11: case 12: case 13:
        window.Method = 'PillImplant';
        window.Info.append('So you are on Pill but can\'t forget it!<br />');
        window.Game.subStep++;
        break;
     case 14: case 15: case 16: case 17: case 18: case 19: case 20:
        window.Method = 'Implant';
        window.Info.append('Lucky you! You are safe.... Maybe not so lucky after all.<br />');
        window.Game.subStep++;
        break;
      default:
        alert("Error unknow case!");
        break;
  }
  window.VideoBox.attr('src', src);
}

ValidBtnClick = function () {
  if (!MustChangeStep(2))
  {
    window.Method = 'Condom';
    window.Info.append('You choose to use the condom you can choose to stop it anytime you want to!<br />');
    play(window.Game);
  }
}

CancelBtn = function () {
  if (!MustChangeStep(2))
  {
    window.Method = 'Pill';
    window.Info.append('You choose to use the pill you can choose to stop it anytime you want to!<br />');
    play(window.Game);
  }
}
