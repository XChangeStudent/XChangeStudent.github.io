var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (!window.Game.sideEffectToRoll > 0)
  {
    MustChangeStep(1);
    return;
  }
  var roll = rollDice(20);
  window.Game.sideEffectToRoll--;
  switch (g.subStep)
  {
    case 1:
      showSideEffect(roll, window.Game);
      break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
};

function showSideEffect (r, g)
{
  switch (r)
  {
    case 1:
      if (g.Permanant == 0)
      {
        if (!hasSideEffect(g) && window.Game.sideEffectToRoll == 0)
        {
          window.Game.sideEffectToRoll++;
        }
        g.Permanant = 1;
        window.ImgBox.attr('src', path + '1.jpg');
        window.ImgBox.show();
      }
      else
      {
        var roll = rollDice(20);
        showSideEffect(roll, game);
        return;
      }
      break;
    case 2: case 3:
      g.Denial++;
      window.VideoBox.children("source").attr('src', path + '2-3.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      break;
    case 4: case 5:
      g.DenialSolo++;
      window.VideoBox.children("source").attr('src', path + '4-5.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      break;
    case 6: case 7:
      g.Submissive++;
      window.VideoBox.children("source").attr('src', path + '6-7.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      break;
    case 8: case 9:
      g.Exhib++;
      window.VideoBox.children("source").attr('src', path + '8-9.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      break;
    case 10: case 11:
      g.Pheromones++;
      window.ImgBox.attr('src', path + '10-11.jpg');
      window.ImgBox.show();
      break;
    case 12: case 13:
      g.Oral++;
      window.VideoBox.children("source").attr('src', path + '12-13.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      break;
    case 14: case 15:
      g.Anal++;
      window.VideoBox.children("source").attr('src', path + '14-15.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      break;
    case 16: case 17:
      g.Libido++;
      window.VideoBox.children("source").attr('src', path + '16-17.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      break;
    case 18: case 19:
      g.HornyMorning++;
      window.VideoBox.children("source").attr('src', path + '18-19.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      break;
    case 20:
      if (g.Orgasm == 0)
      {
        g.Orgasm++;
        if (g.PowerfullOrgasms)
          g.Orgasm++;
      }
      else
      {
        g.Orgasm++;
      }
      window.VideoBox.children("source").attr('src', path + '20.mp4');
      window.VideoBox.show();
      window.VideoBox.trigger('load');
      break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
  }
  window.Info.append('You roll : ' + r + ' <br />');
  if (window.Game.sideEffectToRoll > 0)
  {
    window.Info.append('You still have '+ window.Game.sideEffectToRoll + ' Side Effect  to Roll.<br />');
    window.Info.show();
    window.RollDice.html('Roll 1D20');
    window.RollDice.show();
  }
  else
  {
    window.ValidBtn.html('Next');
    window.ValidBtn.show();
  }
}

RollDiceClick = function () {
    play(window.Game);
}

ValidBtnClick = function () {
    play(window.Game);
}
