var path = 'img/Step' + padZero(window.Game.step, window.Padding)+'/';

play = function(g)
{
  HideAll();
  window.ValidBtn.html('Next');
  window.ValidBtn.show();
  switch (g.subStep)
  {
    case 1:
      window.ImgBox.attr('src', path + '1.png');
      window.ImgBox.show();
      break;
    case 2:
      window.ImgBox.attr('src', path + '2.png');
      window.ImgBox.show();
      break;
    default:
      alert("Error unknow case!");
      break;
    }
};

ValidBtnClick = function () {
  if(window.Game.subStep == 2)
  {
    window.Game.subStep = 1;
    window.Game.step = 2;  
  }
  else {
    window.Game.subStep++;
  }
  play(window.Game);
}
