var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (g.Job != 'Engineering')
  {
    MustChangeStep(1);
    return;
  }
  DenialSolo
  switch (g.subStep)
  {
    case 1:
      window.CancelBtn.html('Subject');
      window.CancelBtn.show();
      window.ValidBtn.html('Engineer');
      window.ValidBtn.show();
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    case 2:
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.ImgBox.attr('src', path + g.subStep + '.gif');
      window.ImgBox.show();
      break;
    case 3: case 4: case 5:
      if (g.subStep == 3)
      {
        g.DenialSolo++;
      }
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      g.subStep = 9;
      break;
    case 6: case 9:
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    case 7: case 8:
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
};

CancelBtnClick = function () {
  window.Game.subStep = 6;
  play(window.Game);
}

ValidBtnClick = function () {
  if (!MustChangeStep(9))
    play(window.Game);
}
