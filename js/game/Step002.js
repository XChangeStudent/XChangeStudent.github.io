var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  switch (g.subStep)
  {
    case 1:
      buildTypeChoice();
      window.ImgBox.attr('src', path + '1.png');
      window.ImgBox.show();
      break;
    default:
      alert("Error unknow case!");
      break;
    }
};

function buildTypeChoice ()
{
  window.Info.empty();
  window.ComboBox.empty();
  window.ComboBox.append("<option value="Standard">Standard</option>");
  window.ComboBox.append("<option value="Plus-size">Plus-size</option>");
  window.ComboBox.append("<option value="Petite">Petite</option>");
  window.ComboBox.append("<option value="Fit">Fit</option>");
  window.ComboBox.show();
  window.UseCombo.html('Choose your body type');
  window.UseCombo.show();
  window.RollDice.html('Roll 1D20');
  window.RollDice.show();
}

UseComboClick = function () {
  selectBodyType(window.ComboBox.val());
}

function selectBodyType(t) {
  window.Info.append('You got the ' + t + ' body type!');
  window.Game.bodyType = t;
  window.ImgBox.show();
  window.Info.show();
  window.ValidBtn.html('Next');
  window.ValidBtn.show();
}

RollDiceClick = function () {
  var roll = rollDice(20);
  window.Info.append('You roll :' + roll + '<br />');
  switch (roll)
  {
      case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8:
        selectBodyType('Standard');
        break;
      case 9: case 10: case 11: case 12:
        selectBodyType('Plus-size');
        break;
      case 13: case 14: case 15: case 16:
        selectBodyType('Petite');
        break;
      case 17: case 18: case 19: case 20:
        selectBodyType('Fit');
        break;
      default:
        alert("Error unknow case!");
        break;
  }
}

ValidBtnClick = function () {
  if (!MustChangeStep(1))
    play(window.Game);
}
