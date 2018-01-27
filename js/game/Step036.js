var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  switch (g.subStep)
  {
    case 1:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      if (g.withMistress || g.Chastity)
      {
        window.ValidBtn.html('Next');
        window.ValidBtn.show();
      }
      else
      {
        window.Info.append('What type of student where you before XChange?');
        window.Info.show();
        window.ValidBtn.html('Good Student');
        window.ValidBtn.show();
        window.CancelBtn.html('Medium Student');
        window.CancelBtn.show();
        window.UseCombo.html('Bad Student');
        window.UseCombo.show();
      }
      break;
    case 2:
      if (g.withMistress || g.Chastity)
      {
        window.ImgBox.attr('src', path + g.subStep + '.jpg');
        window.ImgBox.show();
        window.ValidBtn.html('Next');
        window.ValidBtn.show();
        g.subStep = 5;
        g.AcademicPoint = 0;
        g.FunPoint = 2;
      }
      else
      {
        g.subStep = 3;
        play(g);
      }
      break;
     case 3:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      g.subStep = 5;
      g.AcademicPoint = 2;
      g.FunPoint = 0;
      break;
     case 4:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      g.subStep = 5;
      g.AcademicPoint = 1;
      g.FunPoint = 1;
      break;
     case 5:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      g.AcademicPoint = 0;
      g.FunPoint = 4;
      break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
};

UseComboClick = function () {
  window.Game.subStep = 5;
  play(window.Game);
}

CancelBtnClick = function () {
  window.Game.subStep = 4;
  play(window.Game);
}

ValidBtnClick = function () {
  if (!MustChangeStep(5))
    play(window.Game);
}
