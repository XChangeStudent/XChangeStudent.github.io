var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (window.Game.Job != 'Athlete')
  {
    MustChangeStep(1);
    return;
  }
  switch (g.subStep)
  {
    case 1:
      buildRollQualif(g);
      break;
    case 2:
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.VideoBox.children("source").attr('src', path + '2.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      break;
    case 3:
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.VideoBox.children("source").attr('src', path + '3.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      break;
    case 4:
      if (!g.Chastity || g.Pheromones == 0)
      {
        g.subStep++;
        play(g);
      }
      else
      {
        window.ValidBtn.html('Next');
        window.ValidBtn.show();
        window.ImgBox.attr('src', path + g.subStep + '.jpg');
        window.ImgBox.show();
        g.subStep++;
      }
      break;
    case 5:
      if (!g.Chastity)
      {
        g.subStep++;
        play(g);
      }
      else
      {
        window.ValidBtn.html('Next');
        window.ValidBtn.show();
        window.VideoBox.children("source").attr('src', path + '5.mp4');
        window.VideoBox.show();
        window.VideoBox.trigger('load');
        g.subStep=7;
      }
      break;
    case 6:
      if (g.Pheromones == 0)
      {
        g.subStep++;
        play(g);
      }
      else
      {
        window.ValidBtn.html('Next');
        window.ValidBtn.show();
        window.ImgBox.attr('src', path + g.subStep + '.jpg');
        window.ImgBox.show();
        g.subStep=7;
      }
      break;
    case 7:
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.VideoBox.children("source").attr('src', path + '7.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
};

function buildRollQualif(g)
{
  window.ImgBox.attr('src', path + g.subStep + '.png');
  window.ImgBox.show();
  var roll = rollDice(20);
  window.Info.append('Your roll is ' + roll + '.<br />');
  if (g.bodyType == 'Fit')
  {
    roll = roll + 12;
    window.Info.append('You got a fit body so your roll is up by 12 and is now ' + roll + '<br />');
  }
  if (g.ReducedSleep)
  {
    roll = roll + 5;
    window.Info.append('You got reduced sleep feature so your roll is up by 5 and is now ' + roll + '<br />');
  }
  window.Info.show();

  if (roll > 20)
    roll = 20;

  switch (roll)
  {
    case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
      MustChangeStep(1)
      break;
    case 10: case 11: case 12: case 13: case 14: case 15:
      window.ValidBtn.html('Persuade the coach');
      window.ValidBtn.show();
      window.CancelBtn.html('Give up this job');
      window.CancelBtn.show();
      break;
    case 16: case 17: case 18: case 19: case 20:
      g.subStep++;
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
}

CancelBtnClick = function () {
  MustChangeStep(1);
}

ValidBtnClick = function () {
  if (!MustChangeStep(7))
    play(window.Game);
}
