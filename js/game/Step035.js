var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (g.Job != 'Art')
  {
    MustChangeStep(1);
    return;
  }
  window.ValidBtn.html('Next');
  window.ValidBtn.show();
  switch (g.subStep)
  {
    case 1: case 2: case 3: case 4: case 5:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    case 6:
      window.ImgBox.attr('src', path + g.subStep + '.png');
      window.ImgBox.show();
      window.ValidBtn.hide();
      window.Info.append('This is the ending from this path you can restart a new game and do other choice.');
      window.Info.show();
      window.CancelBtn.html('Restart');
      window.CancelBtn.show();
      break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
};

CancelBtnClick = function () {
  NewGame();
}

ValidBtnClick = function () {
  if (!MustChangeStep(6))
    play(window.Game);
}
