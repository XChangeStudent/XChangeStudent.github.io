var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (!g.HelpfulNeighbor)
  {
    MustChangeStep(1);
    return;
  }
  window.ValidBtn.html('Next');
  window.ValidBtn.show();
  switch (g.subStep)
  {
    case 1:
      if (g.ChosenNeighbor != 'Jerk')
      {
        g.subStep = 3;
        play(g);
      }
      else
      {
        window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
        window.VideoBox.show();
        window.VideoBox.trigger('load');
        g.fuckCount++;
      }
      break;
    case 2:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      g.gangBangCount++;
      break;
    case 3:
      if (g.ChosenNeighbor != 'Player')
      {
        g.subStep = 5;
        play(g);
      }
      else
      {
        g.fuckCount++;
        window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
        window.VideoBox.show();
        window.VideoBox.trigger('load');
      }
      break;
    case 4:
      window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
      window.VideoBox.show();
      g.fuckCount++;
      window.VideoBox.trigger('load');
      break;
    case 5:
      if (g.ChosenNeighbor != 'Nerd')
      {
        g.subStep = 9;
        play(g);
      }
      else
      {
        window.ImgBox.attr('src', path + g.subStep + '.jpg');
        window.ImgBox.show();
      }
      break;
    case 6: case 7:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    case 8:
      window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
      window.VideoBox.show();
      g.fuckCount++;
      window.VideoBox.trigger('load');
      break;
    case 9:
      if (g.ChosenNeighbor != 'Thrill')
      {
        g.subStep = 12;
        play(g);
      }
      else
      {
        window.ImgBox.attr('src', path + g.subStep + '.jpg');
        window.ImgBox.show();
      }
      break;
    case 10: case 11:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    case 12:
      if (g.ChosenNeighbor != 'Regular')
      {
        MustChangeStep(1);
      }
      else
      {
        g.fuckCount++;
        window.ImgBox.attr('src', path + g.subStep + '.jpg');
        window.ImgBox.show();
      }
      break;
    case 13: case 14:
      g.fuckCount++;
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      g.withJosh = true;
      break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
};

ValidBtnClick = function () {
  if (!MustChangeStep(14))
    play(window.Game);
}
