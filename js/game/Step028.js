var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  window.ValidBtn.html('Next');
  window.ValidBtn.show();
  switch (g.subStep)
  {
    case 1:
      if (g.withAndrew)
      {
        window.ImgBox.attr('src', path + g.subStep + '.jpg');
        window.ImgBox.show();
        g.MentorNoNeighbor = true;
        if (g.Method == 'CondomFail' || g.Method == 'Condom' || g.Method == 'Pill')
        {
          g.Method = 'None';
          window.Info.append('You don\'t have contraception anymore');
          window.Info.show();
        }
        g.fuckCount++;
      }
      else
      {
        g.subStep++;
        play(g);
      }
      break;
    case 2:
      if (g.withMistress)
      {
        window.VideoBox.children("source").attr('src', path + g.subStep + '.mp4');
        window.VideoBox.show();
        window.VideoBox.trigger('load');
        g.MentorNoNeighbor = true;
      }
      else
      {
        g.subStep++;
        play(g);
      }
      break;
    case 3:
      if (g.withVeronica && g.Chastity)
      {
        window.ImgBox.attr('src', path + g.subStep + '.jpg');
        window.ImgBox.show();
        g.MentorNoNeighbor = true;
      }
      else
      {
        g.subStep++;
        play(g);
      }
      break;
    case 4:
      if (g.withVeronica)
      {
        window.ImgBox.attr('src', path + g.subStep + '.jpg');
        window.ImgBox.show();
        g.MentorNoNeighbor = true;
      }
      else
      {
        g.subStep++;
        play(g);
      }
      break;
    case 5:
      if (g.Job == 'Art')
      {
        window.ImgBox.attr('src', path + g.subStep + '.jpg');
        window.ImgBox.show();
        g.MentorNoNeighbor = true;
      }
      else
      {
        MustChangeStep(1);
      }
      break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
}

ValidBtnClick = function () {
  if (!MustChangeStep(1))
    play(window.Game);
}
