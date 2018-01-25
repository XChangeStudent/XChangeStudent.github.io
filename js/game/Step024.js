var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (g.Job != 'Hannah')
  {
    MustChangeStep(1);
    return;
  }
  switch (g.subStep)
  {
    case 1: case 2: case 4:
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      break;
    case 3:
      if (g.Method == 'Condom')
      {
        window.Info.append('You was on condom but your client dosn\'t care. You can start taking pill or do nothing. If you do nothing it will be considere you no longer have any contraception method.<br />');
        window.Info.show();
        window.UseCombo.html('Start Taking Pill');
        window.UseCombo.show();
        window.CancelBtn.html('Change Nothing');
        window.CancelBtn.show();
      }
      else
      {
        if (g.Method == 'CondomFail')
        {
          window.Info.append('Your implant failed... your only option left was condom but your client don\'t care.... You don\'t have contracption anymore...<br />');
          window.Info.show();
          g.Method = 'None';
        }
        window.ValidBtn.html('Next');
        window.ValidBtn.show();
      }
      window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      g.subStep = 6;
      break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
};

UseComboClick = function () {
  g.Method = 'Pill';
  if (!MustChangeStep(4))
    play(window.Game);
}

CancelBtnClick = function () {
  g.Method = 'None';
  if (!MustChangeStep(4))
    play(window.Game);
}

ValidBtnClick = function () {
  if (!MustChangeStep(4))
    play(window.Game);
}
