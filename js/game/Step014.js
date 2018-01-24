var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  window.ValidBtn.html('Next');
  window.ValidBtn.show();
  switch (g.subStep)
  {
    case 1: case 7: case 8:
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    case 9:
      window.ImgBox.attr('src', path + g.subStep + '.png');
      window.ImgBox.show();
      break;
    case 10:
      buildJobChoice(g);
      break;
    case 2:
      if (window.Game.Mentor != 'Faith')
      {
        MustChangeStep(10);
        return;
      }
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    case 3:
      if (window.Game.Mentor != 'Emily')
      {
        MustChangeStep(10);
        return;
      }
      window.ImgBox.attr('src', path + g.subStep + '.png');
      window.ImgBox.show();
      break;
    case 4:
      if (window.Game.Mentor != 'Hannah')
      {
        MustChangeStep(10);
        return;
      }
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    case 5:
      if (window.Game.Mentor != 'Samantha')
      {
        MustChangeStep(10);
        return;
      }
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    case 6:
      if (window.Game.Mentor != 'Olivia')
      {
        MustChangeStep(10);
        return;
      }
      window.ImgBox.attr('src', path + g.subStep + '.jpg');
      window.ImgBox.show();
      break;
    default:
      alert('Error! Please create an issue on github with these info: Step=' + g.Step + ' subStep=' + g.subStep);
      break;
    }
};

function buildJobChoice(g)
{
  HideAll();
  window.ImgBox.attr('src', path + g.subStep + '.png');
  window.ImgBox.show();
  window.ComboBox.empty();
  if (g.Mentor == 'Faith')
  {
    window.ComboBox.append('<option value="Faith">Faith\'s Job</option>');
  }
  if (g.Mentor == 'Emily')
  {
    window.ComboBox.append('<option value="Emily">Emily\'s Job</option>');
  }
  if (g.Mentor == 'Hannah')
  {
    window.ComboBox.append('<option value="Hannah">Hannah\'s Job</option>');
  }
  if (g.Mentor == 'Samantha')
  {
    window.ComboBox.append('<option value="Samantha">Samantha\'s Job</option>');
  }
  if (g.Mentor == 'Olivia')
  {
    window.ComboBox.append('<option value="Olivia">Olivia\'s Job</option>');
  }
  window.ComboBox.append('<option value="Athlete">Athlete</option>');
  if (g.bodyType != 'Plus-size')
  {
    window.ComboBox.append('<option value="Cheerleader">Cheerleader</option>');
  }
  window.ComboBox.append('<option value="Fitness">Fitness Center</option>');
  window.ComboBox.append('<option value="Library">Library</option>');
  window.ComboBox.append('<option value="Engineering">Engineering Department</option>');
  window.ComboBox.append('<option value="Art">Art Department</option>');

  window.UseCombo.html('Choose a Job');
  window.UseCombo.show();
  window.ComboBox.show();
}

UseComboClick = function () {
  window.Game.Job = window.ComboBox.val();
  MustChangeStep(10)
}

ValidBtnClick = function () {
  if (!MustChangeStep(10))
    play(window.Game);
}
