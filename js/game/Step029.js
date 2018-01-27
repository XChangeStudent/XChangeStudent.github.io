var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (g.Mentor != 'Faith' || g.MentorNoNeighbor)
  {
    MustChangeStep(1);
    return;
  }
  switch (g.subStep)
  {
    case 1:
      window.ImgBox.attr('src', path + g.subStep + '.png');
      window.ImgBox.show();
      window.ValidBtn.html('Constantly Horny');
      window.ValidBtn.show();
      window.CancelBtn.html('Helpful Neighbor');
      window.CancelBtn.show();
      break;
    case 2: case 3: case 4:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      break;
    case 5:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      if (g.neighborOne == 'Regular' || g.neighborTwo == 'Regular')
      {
        g.ChosenNeighbor = 'Regular';
      }
      if (g.neighborOne == 'Thrill' || g.neighborTwo == 'Thrill')
      {
        g.ChosenNeighbor = 'Thrill';
      }
      if (g.neighborOne == 'Nerd' || g.neighborTwo == 'Nerd')
      {
        g.ChosenNeighbor = 'Nerd';
      }
      if (g.neighborOne == 'Player' || g.neighborTwo == 'Player')
      {
        g.ChosenNeighbor = 'Player';
      }
      if (g.neighborOne == 'Jerk' || g.neighborTwo == 'Jerk')
      {
        g.ChosenNeighbor = 'Jerk';
      }
      g.HelpfulNeighbor = true;
      window.Info.append('The Neighbor was choosen for you and it\'s :' + g.ChosenNeighbor);
      window.Info.show();
    break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
};

UseComboClick = function () {
  window.Game.ChosenNeighbor = window.ComboBox.val();
  MustChangeStep(1);
}

CancelBtnClick = function () {
    HideAll();
    window.ImgBox.show();
    window.Game.HelpfulNeighbor = true;
    window.ComboBox.empty();
    window.ComboBox.append('<option value="'+g.neighborOne+'">'+g.neighborOne+'</option>');
    window.ComboBox.append('<option value="'+g.neighborTwo+'">'+g.neighborTwo+'</option>');
    window.ComboBox.show();
    window.UseCombo.html('Choose a neighbor to have fun with');
    window.UseCombo.show();
}

ValidBtnClick = function () {
  if (!MustChangeStep(5))
    play(window.Game);
}
