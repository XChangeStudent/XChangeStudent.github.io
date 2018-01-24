var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  switch (g.subStep)
  {
    case 1:
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.ImgBox.attr('src', path + '1.jpg');
      window.ImgBox.show();
      break;
    case 2:
      showChooseMentor(g);
      break;
    default:
      alert("Error unknow case!");
      break;
    }
};

function showChooseMentor (g)
{
  window.RollDice.html('Roll 1D20');
  window.RollDice.show();
  window.ImgBox.attr('src', path + '2.jpg');
  window.ImgBox.show();
}

function selectMentor (m)
{
  window.Game.Mentor = m;
  window.ImgBox.show();
  if (m == 'None')
  {
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.RollDice.html('Roll 1D20');
      window.RollDice.show();
  }
  else {
    window.Info.append('And got :' + m + '<br />');
    window.Info.show();
    window.ValidBtn.html('Next');
    window.ValidBtn.show();
  }
}

function rollMentor (r)
{
  HideAll();
  window.Info.append('You roll :' + r + '<br />');
  switch (r)
  {
      case 1: case 2: case 3: case 4:
        selectMentor('Faith');
        break;
      case 5: case 6: case 7: case 8:
        selectMentor('Emily');
        break;
      case 9: case 10: case 11: case 12:
        selectMentor('Hannah');
        break;
      case 13: case 14: case 15: case 16:
        selectMentor('Samantha');
        break;
      case 17: case 18: case 19:
        selectMentor('Olivia');
        break;
      case 20:
        if(window.Game.Mentor == 'None')
        {
          var roll = rollDice(20);
          rollMentor(roll);
          return;
        }
        else {
          selectMentor('None');
        }
        break;
      default:
        alert("Error unknow case!");
        break;
  }
}

RollDiceClick = function () {
    var roll = rollDice(20);
    rollMentor(roll);
}

ValidBtnClick = function () {
  if (!MustChangeStep(2))
    play(window.Game);
}
