var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  window.ValidBtn.html('Next');
  window.ValidBtn.show();
  switch (g.subStep)
  {
    case 1:
      window.ImgBox.attr('src', path + '1.png');
      window.ImgBox.show();
      break;
    case 2:
      window.ImgBox.attr('src', path + '2.png');
      window.ImgBox.show();
      break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
};

ValidBtnClick = function () {
  if (!MustChangeStep(2))
    play(window.Game);
}
