var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (g.Mentor != 'Emily' || g.MentorNoNeighbor)
  {
    MustChangeStep(1);
    return;
  }
  switch (g.subStep)
  {
    case 1:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      window.ValidBtn.html('Room for three');
      window.ValidBtn.show();
      window.CancelBtn.html('Helpful Neighbor');
      window.CancelBtn.show();
      break;
    case 2:
      window.ImgBox.attr('src', path + g.subStep + '.gif');
      window.ImgBox.show();
      window.ValidBtn.html('Watching');
      window.ValidBtn.show();
      window.UseCombo.html('Three with emily');
      window.UseCombo.show();
      break;
    case 3:
      window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      g.subStep=4;
      break;
    case 4:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
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
  window.Game.HelpfulNeighbor = true;
  window.Game.ChosenNeighbor = window.Game.neighborOne;
  MustChangeStep(1);
}

ValidBtnClick = function () {
  if (!MustChangeStep(4))
    play(window.Game);
}
