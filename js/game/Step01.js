play = function(g)
{
  console.log('On a play Step01.js');
  HideAll();
  window.ValidBtn.html('Next');
  window.ValidBtn.show();
  alert(g.subStep);
  switch (g.subStep)
  {
    case 1:
      window.ImgBox.attr('src', 'img/Step01/1.png');
      window.ImgBox.show();
      g.subStep = 2;
      break;
    case 2:
      window.ImgBox.attr('src', 'img/Step01/2.png');
      window.ImgBox.show();
      g.subStep = 3;
      break;
    default:
      alert("Error unknow case!");
      break;
    }
};


function ValidBtnClick() {
  window.Game.play();
}
