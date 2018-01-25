var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (g.Job != 'Fitness')
  {
    MustChangeStep(1);
    return;
  }
  switch (g.subStep)
  {
    case 1:
      window.CancelBtn.html('Massage');
      window.CancelBtn.show();
      window.ValidBtn.html('Yoga');
      window.ValidBtn.show();
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    case 2:
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    case 3:
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      g.subStep = 6;
      break;
    case 4: case 5: case 6:
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
};

CancelBtnClick = function () {
  g.subStep = 4;
  play(window.Game);
}

ValidBtnClick = function () {
  if (!MustChangeStep(6))
    play(window.Game);
}
