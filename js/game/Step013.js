var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  if (window.Game.Mentor != 'None')
  {
    g.subStep++
  }
  switch (g.subStep)
  {
    case 1:
      buildMentorCombo(g);
      break;
    case 2:
      if (window.Game.Mentor == 'Olivia')
      {
        window.Game.Chastity = true;
      }
      window.ValidBtn.html('Next');
      window.ValidBtn.show();
      window.Info.append('Your mentor is ' + window.Game.Mentor + '.<br />');
      window.Info.show();
      window.ImgBox.attr('src', path + g.subStep + '.png');
      window.ImgBox.show();
      break;
    default:
      alert("Error unknow case!");
      break;
    }
};


function buildMentorCombo (g)
{
  window.ImgBox.attr('src', path + g.subStep + '.jpg');
  window.ImgBox.show();
  window.ComboBox.empty();
  window.ComboBox.append('<option value="Faith">Faith</option>');
  window.ComboBox.append('<option value="Emily">Emily</option>');
  window.ComboBox.append('<option value="Hannah">Hannah</option>');
  window.ComboBox.append('<option value="Samantha">Samantha</option>');
  window.ComboBox.append('<option value="Olivia">Olivia</option>');
  window.ComboBox.show();
  window.UseCombo.html('Choose your menotr');
  window.UseCombo.show();
}

UseComboClick = function () {
  window.Game.Mentor = window.ComboBox.val();
  play(window.Game);
}

ValidBtnClick = function () {
  if (!MustChangeStep(2))
    play(window.Game);
}
