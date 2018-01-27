var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (g.Job != 'Library')
  {
    MustChangeStep(1);
    return;
  }
  window.ValidBtn.html('Next');
  window.ValidBtn.show();
  switch (g.subStep)
  {
    case 1: case 2: case 5: case 7:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    case 3:
      window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      break;
    case 6:
      window.ImgBox.attr('src', path + g.subStep + '.gif');
      window.ImgBox.show();
      g.fuckCount++;
    case 4:
      if (!g.Chastity)
      {
        g.subStep++;
        play(g);
      }
      g.Chastity = false;
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
};

ValidBtnClick = function () {
  if (!MustChangeStep(7))
    play(window.Game);
}
