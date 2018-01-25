var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (g.Job != 'Art')
  {
    MustChangeStep(1);
    return;
  }
  switch (g.subStep)
  {
    case 1: case 2: case 3: case 4: case 5:
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
};

ValidBtnClick = function () {
  if (!MustChangeStep(5))
    play(window.Game);
}
