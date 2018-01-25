var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (g.Job != 'Emily')
  {
    MustChangeStep(1);
    return;
  }
  switch (g.subStep)
  {
    case 1:
      if (g.Submissive > 0)
      {
        window.CancelBtn.html('Next');
        window.CancelBtn.show();
      }
      else if (g.Oral == 0)
      {
        window.CancelBtn.html('Professional');
        window.CancelBtn.show();
      }
      else
      {
        window.ValidBtn.html('Oral');
        window.ValidBtn.show();
      }
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
    case 4:
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
    break;
    case 5: case 6:
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      if (g.subStep == 5)
      {
        g.subStep++;
      }
      break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
};

CancelBtnClick = function () {
  if (window.Game.Submissive > 0)
  {
    window.Game.subStep = 6;
  }
  else
  {
    window.Game.subStep = 4;
  }
  play(window.Game);
}

ValidBtnClick = function () {
  if (!MustChangeStep(6))
    play(window.Game);
}
