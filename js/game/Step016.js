var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (g.Job != 'Cheerleader')
  {
    MustChangeStep(1);
    return;
  }
  switch (g.subStep)
  {
    case 1:
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    case 2:
      if(g.bodyType != 'Standard')
      {
        g.subStep = 6;
        play(g);
      }
      else {
        if (g.Submissive == 0)
        {
          window.CancelBtn.html('Bitch');
          window.CancelBtn.show();
        }
        window.ValidBtn.html('BeNice');
        window.ValidBtn.show();
        window.ImgBox.attr('src', path + g.subStep + '.jpg');
        window.ImgBox.show();
        g.subStep++;
      }
      break;
    case 3:
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.VideoBox.children("source").attr('src', path + '3.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      g.subStep = 9;
      break;
    case 4:
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.VideoBox.children("source").attr('src', path + '4.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      break;
    case 5:
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.VideoBox.children("source").attr('src', path + '5.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      g.withVeronica = true;
      g.subStep = 9;
      break;
    case 6:
      if (!g.Chastity)
      {
        window.CancelBtn.html('Leave');
        window.CancelBtn.show();
      }
      window.ValidBtn.html('Fundraising');
      window.ValidBtn.show();
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    case 7:  case 8: case 9:
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.VideoBox.children("source").attr('src', path + g.subStep  +'.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
};

CancelBtnClick = function () {
  if(window.Game.subStep < 6)
  {
    play(window.Game);
  }
  else
  {
    window.Game.Job = '';
    MustChangeStep(1);
  }
}

ValidBtnClick = function () {
  if (!MustChangeStep(9))
    play(window.Game);
}
