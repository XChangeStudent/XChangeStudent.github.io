play = function(g)
{
  console.log('On a play Step01.js');
  HideAll();
  window.ValidBtn.html('Next');
  window.ValidBtn.show();
  switch (g.subStep)
  {
    case 1:
      window.ImgBox.attr('src', 'img/Step01/1.png');
      window.ImgBox.show();
      break;
    case 2:
      window.ImgBox.attr('src', 'img/Step01/2.png');
      window.ImgBox.show();
      break;
    default:
      alert("Error unknow case!");
      break;
    }
};

ValidBtnClick = function () {
  window.Game.subStep++;
  play(window.Game);
}
