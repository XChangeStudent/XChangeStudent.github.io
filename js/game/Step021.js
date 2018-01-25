var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (g.Job != '')
  {
    MustChangeStep(1);
    return;
  }
  g.Job = g.Mentor;
};

ValidBtnClick = function () {
  if (!MustChangeStep(1))
    play(window.Game);
}
