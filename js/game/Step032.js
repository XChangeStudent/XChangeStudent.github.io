var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (g.Mentor != 'Samantha' || g.MentorNoNeighbor)
  {
    MustChangeStep(1);
    return;
  }
  switch (g.subStep)
  {
    case 1:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      window.ValidBtn.html('Help');
      window.ValidBtn.show();
      window.CancelBtn.html('Neighbor');
      window.CancelBtn.show();
      break;
    case 2:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      g.subStep=3;
      break;
    case 3:
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


CancelBtnClick = function () {
  window.Game.subStep=3;
  play(window.Game);
}

ValidBtnClick = function () {
  if (!MustChangeStep(3))
    play(window.Game);
}
