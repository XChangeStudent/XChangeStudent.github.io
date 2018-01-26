var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  switch (g.subStep)
  {
    case 1:
      window.ImgBox.attr('src', path + g.subStep + '.png');
      window.ImgBox.show();
      window.RollDice.html('Roll 1D20');
      window.RollDice.show();
      break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
}

function getNeighbor(g, n)
{
  if (g.neighborOne == '')
  {
    g.neighborOne = n;
  }
  else
  {
    if (g.neighborOne == n)
    {
      var roll = rollDice(20);
      rollNeighbor(roll, g);
    }
    else
    {
      g.neighborTwo = n;
    }
  }

}

function rollNeighbor(roll, g)
{
    switch (roll)
    {
        case 1:
          getNeighbor(g, 'Jerk');
          break;
        case 2: case 3: case 4: case 5:
          getNeighbor(g, 'Player');
          break;
        case 6: case 7: case 8: case 9: case 10:
          getNeighbor(g, 'Nerd');
          break;
        case 11: case 12: case 13: case 14: case 15:
          getNeighbor(g, 'Thrill');
          break;
        case 16: case 17: case 18: case 19: case 20:
          getNeighbor(g, 'Regular');
          break;
        default:
          alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
          break;
    }
}

RollDiceClick = function ()
{
    HideAll();
    var g = window.Game;
    if (g.subStep == 1)
      g.subStep++;
    window.ImgBox.attr('src', path + g.subStep + '.png');
    window.ImgBox.show();
    var roll = rollDice(20);
    rollNeighbor(roll, g);
    window.Info.append('You roll :' + roll + '<br />');
    if (g.neighborOne != '' && g.Mentor == 'Emily')
    {
      window.Info.append('You got the :' + g.neighborOne + '<br />');
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
    }
    else if (g.neighborOne != '' && g.neighborTwo == '')
    {
      window.Info.append('You got the :' + g.neighborOne + '<br />');
      window.RollDice.html('Roll 1D20');
      window.RollDice.show();
    }
    else
    {
      window.Info.append('You got the :' + g.neighborTwo + '<br />');
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
    }
    window.Info.show();
}

ValidBtnClick = function () {
  if (!MustChangeStep(1))
    play(window.Game);
}
