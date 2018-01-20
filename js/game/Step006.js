var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  var msg = window.Info.html();
  HideAll();
  switch (g.subStep)
  {
    case 1:
      window.ImgBox.attr('src', path + '1.png');
      window.ImgBox.show();
      buildRecap();
      break;
    default:
      alert("Error unknow case!");
      break;
    }
};

function buildRecap()
{
  window.Info.append('Recap');
  window.Info.show();
  window.ValidBtn.html('Next');
  window.ValidBtn.show();
}

ValidBtnClick = function () {
  if (!MustChangeStep(1))
    play(window.Game);
}
