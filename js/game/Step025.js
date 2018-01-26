var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (g.Job != 'Samantha')
  {
    MustChangeStep(1);
    return;
  }
  switch (g.subStep)
  {
    case 1:
      if (g.Submissive > 0)
      {
        window.ValidBtn.html('Submissive');
        window.ValidBtn.show();
      }
      else
      {
        window.ValidBtn.html('Unsure');
        window.ValidBtn.show();
        window.CancelBtn.html('Girl');
        window.CancelBtn.show();
        window.UseCombo.html('Guy');
        window.UseCombo.show();
      }
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    case 2: case 3: case 4:
      if (g.subStep == 2 && g.Submissive == 0)
      {
        g.subStep = 5;
        play(g);
      }
      else
      {
        if (g.Submissive > 0)
        {
          g.withMistress = true;
        }
        window.ValidBtn.html('Next');
        window.ValidBtn.show();
        window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
        window.VideoBox.show();
        window.VideoBox.trigger('load');
        g.subStep = 6;
      }
    break;
    case 5: case 6:
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
  window.Game.subStep = 3;
  play(window.Game);
}

UseComboClick = function () {
  window.Game.subStep = 4;
  play(window.Game);
}


ValidBtnClick = function () {
  if (!MustChangeStep(6))
    play(window.Game);
}
