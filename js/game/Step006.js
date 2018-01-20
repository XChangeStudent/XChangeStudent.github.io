var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  var msg = window.Info.html();
  HideAll();
  switch (g.subStep)
  {
    case 1:
      window.ImgBox.attr('src', path + '1.png');
      window.ImgBox.show();
      buildRecap(g);
      break;
    default:
      alert("Error unknow case!");
      break;
    }
};

function buildRecap(g)
{
  window.Info.append('Your body type is: ' + window.Game.bodyType + '<br />');
  buildMethodRecap(g);
  buildFeatureRecap(g);
  buildSideEffectRecap(g);
  window.Info.show();
  window.ValidBtn.html('Next');
  window.ValidBtn.show();
}

function buildSideEffectRecap(g)
{
  if(g.Permanant > 0)
  {
      window.Info.append('You will never be a guy again hope you love the new you!<br />');
  }
  if(g.Denial > 0)
  {
    window.Info.append('You will be denial to orgasme some time it will be worse if you are alone!<br />');
    window.Info.append('This effect is level: '+g.Denial+'!<br />');
  }
  if(g.DenialSolo > 0)
  {
    window.Info.append('You will be denial to orgasme alone and the more this higher level this effect is the more horny you will end up!<br />');
    window.Info.append('This effect is level: '+g.DenialSolo+'!<br />');
  }
  if(g.Submissive > 0)
  {
    window.Info.append('You will be submissive and the more this higher level this effect is the more submissive you will end up!<br />');
    window.Info.append('This effect is level: '+g.Submissive+'!<br />');
  }
  if(g.Exhib > 0)
  {
    window.Info.append('You will love to expose yourself and the more this higher level this effect is the more risk you will take!<br />');
    window.Info.append('This effect is level: '+g.Exhib+'!<br />');
  }
  if(g.Pheromones > 0)
  {
    window.Info.append('You will feel urges around men that desire you and the more this higher level this effect is the less you can control this urges!<br />');
    window.Info.append('This effect is level: '+g.Pheromones+'!<br />');
  }
  if(g.Oral > 0)
  {
    window.Info.append('You will love to perform oral!<br />');
    window.Info.append('This effect is level: '+g.Oral+'!<br />');
  }
  if(g.Anal > 0)
  {
    window.Info.append('You will love to perform anal!<br />');
    window.Info.append('This effect is level: '+g.Anal+'!<br />');
  }
  if(g.Libido > 0)
  {
    window.Info.append('Your libido with be a lot higher than normal and the more this higher level this effect is the less you will be able to think when the libido kick in.<br />');
    window.Info.append('This effect is level: '+g.Libido+'!<br />');
  }
  if(g.HornyMorning > 0)
  {
    window.Info.append('You will make erotic dream all night and the more this higher level this effect is the more horny you will wake up and need to fuck anyone around you.<br />');
    window.Info.append('This effect is level: '+g.HornyMorning+'!<br />');
  }
  if(g.Orgasm > 0)
  {
    window.Info.append('Your orgasm will be a lot stronger and even more the higher level this effect is. If this pass 2...  prepare yourself to be a mess cumming no stop every time a man had his way with you<br />');
    window.Info.append('This effect is level: '+g.Orgasm+'!<br />');
  }
}

function buildFeatureRecap(g)
{
  if(g.NoBodyHair)
  {
      window.Info.append('You will never need to shave ^^<br />');
  }
  if(g.WeightControl)
  {
      window.Info.append('You will never need to take carfe of what you eat you will keep this body of your dream forever<br />');
  }
  if(g.ReducedSleep)
  {
      window.Info.append('You will not need the same amount of sleep do what you want of your night<br />');
  }
  if(g.EasyToOrgasm)
  {
      window.Info.append('You will orgasm easier than regular girl<br />');
  }
  if(g.PowerfullOrgasms)
  {
      window.Info.append('You will orgasm harder than regular girl<br />');
  }
}

function buildMethodRecap(g)
{
  switch (g.Method)
  {
    case 'Implant':
      window.Info.append('The experimental work on you no risk of pregnancy.<br />');
      break;
    case 'PillImplant':
      window.Info.append('Your implant work like a birth control pill. You can\'t stop it<br />');
      break;
    case 'Pill':
      window.Info.append('Your are on pill. You can stop it if you want to be pregnant<br />');
      break;
    case 'Condom':
      window.Info.append('Your are on condom. You can stop it if you want to be pregnant<br />');
      break;
    default:
      alert("Error unknow case!");
      break;
  }
}


ValidBtnClick = function () {
  if (!MustChangeStep(1))
    play(window.Game);
}
