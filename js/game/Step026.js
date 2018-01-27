var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (g.Job != 'Olivia')
  {
    MustChangeStep(1);
    return;
  }
  window.ValidBtn.html('Next');
  window.ValidBtn.show();
  switch (g.subStep)
  {
    case 1:
      g.Exhib++;
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    case 2:
      g.Submissive++;
      window.ImgBox.attr('src', path + g.subStep + '.png');
      window.ImgBox.show();
      break;
    case 3: case 4:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    case 5:
      if (g.Oral == 0 || g.Oral < g.Anal)
      {
        g.subStep = 8;
        play(g);
      }
      else
      {
        window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
        window.VideoBox.show();
        window.VideoBox.trigger('load');
      }
      break;
    case 6: case 7:
      window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      if(g.subStep == 7)
        g.subStep = 9;
    break;
    case 8:
      if (g.Anal == 0)
      {
        g.subStep = 9;
        play(g);
      }
      else
      {
        window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
        window.VideoBox.show();
        window.VideoBox.trigger('load');
      }
      break;
    case 9:
      window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
      window.VideoBox.show();
      g.fuckCount++;
      window.VideoBox.trigger('load');
      break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
};


ValidBtnClick = function () {
  if (!MustChangeStep(9))
    play(window.Game);
}
