var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (g.Mentor != 'Hannah' || g.MentorNoNeighbor)
  {
    MustChangeStep(1);
    return;
  }
  switch (g.subStep)
  {
    case 1:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      if (g.Denial == 0 && g.DenialSolo == 0)
      {
        window.UseCombo.html('Masturbate');
        window.UseCombo.show();
      }
      window.ValidBtn.html('Neighbor');
      window.ValidBtn.show();
      window.CancelBtn.html('Horny');
      window.CancelBtn.show();
      break;
    case 2:
      window.ImgBox.attr('src', path + g.subStep + '.gif');
      window.ImgBox.show();
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      break;
    case 3:
      window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      g.fuckCount++;
      g.subStep=5;
      break;
    case 4:
      window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      g.subStep=5;
      break;
    case 5:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      g.fuckCount++;
      g.subStep=5;
      break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
};

UseComboClick = function () {
  window.Game.subStep=4;
  play(window.Game);
}

CancelBtnClick = function () {
  window.Game.subStep=5;
  play(window.Game);
}

ValidBtnClick = function () {
  if (!MustChangeStep(5))
    play(window.Game);
}
