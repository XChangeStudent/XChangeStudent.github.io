var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (window.Game.Mentor != 'None' && window.Game.Mentor != 'Hannah')
  {
    MustChangeStep(1);
    return;
  }
  window.ValidBtn.html('Next');
  window.ValidBtn.show();
  switch (g.subStep)
  {
    case 1: case 3: case 4:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    case 2:
      window.ImgBox.attr('src', path + '2.gif');
      window.ImgBox.show();
      break;
    default:
      alert("Error unknow case!");
      break;
    }
};

ValidBtnClick = function () {
  if (!MustChangeStep(4))
    play(window.Game);
}
