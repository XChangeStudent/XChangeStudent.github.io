var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  var infoTxt = window.Info.html();
  HideAll();
  window.Info.append(infoTxt);
  switch (g.subStep)
  {
    case 1:
      buildFeatureChoice(g);
      window.ImgBox.attr('src', path + '1.png');
      window.ImgBox.show();
      break;
    default:
      alert("Error unknow case!");
      break;
    }
};

UseComboClick = function () {
  selectFeature(window.ComboBox.val(), window.Game);
  window.Game.sideEffectToRoll++;
  play(window.Game);
}

function selectFeature(t, g)
{
  switch (t)
  {
    case 'NoBodyHair':
      g.NoBodyHair = true;
      window.Info.append('You choose to add the No Body Hair Feature.<br />');
      break;
    case 'WeightControl':
      g.WeightControl = true;
      window.Info.append('You choose to add the Weight Control Feature.<br />');
      break;
    case 'ReducedSleep':
      g.ReducedSleep = true;
      window.Info.append('You choose to add the Reduced Sleep Feature.<br />');
      break;
    case 'EasyToOrgasm':
      g.EasyToOrgasm = true;
      window.Info.append('You choose to add the Easy To Orgasm Feature.<br />');
      break;
    case 'PowerfullOrgasms':
      g.PowerfullOrgasms = true;
      window.Info.append('You choose to add the Powerfull Orgasms Feature.<br />');
      break;
    default:
      alert("Error unknow case!");
      break;
  }
}

function buildFeatureChoice (g)
{
  window.ComboBox.empty();
  var showCombo = false;
  if(!g.NoBodyHair)
  {
    showCombo = true;
    window.ComboBox.append('<option value="NoBodyHair">No Body Hair</option>');
  }
  if(!g.WeightControl)
  {
    showCombo = true;
    window.ComboBox.append('<option value="WeightControl">Weight Control</option>');
  }
  if(!g.ReducedSleep)
  {
    showCombo = true;
    window.ComboBox.append('<option value="ReducedSleep">Reduced Sleep</option>');
  }
  if(!g.EasyToOrgasm)
  {
    showCombo = true;
    window.ComboBox.append('<option value="EasyToOrgasm">Easy To Orgasm</option>');
  }
  if(!g.PowerfullOrgasms)
  {
    showCombo = true;
    window.ComboBox.append('<option value="PowerfullOrgasms">Powerfull Orgasms</option>');
  }

  if (showCombo)
  {
    window.UseCombo.html('Add a Feature');
    window.UseCombo.show();
    window.ComboBox.show();
  }
  window.Info.show();
  if (window.Game.sideEffectToRoll > 0)
  {
    window.RollDice.html('Roll 1D20');
    window.Info.append('You have '+ window.Game.sideEffectToRoll + ' Side Effect  to Roll.<br />');
    window.RollDice.show();
  }
  else
  {
    window.ValidBtn.html('Next');
    window.ValidBtn.show();
  }
}

RollDiceClick = function () {
  if (!MustChangeStep(1))
    play(window.Game);
}

ValidBtnClick = function () {
  if (!MustChangeStep(1))
    play(window.Game);
}
