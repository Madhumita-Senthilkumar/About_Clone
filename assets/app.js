function turn() {
var image=document.getElementById('all1_svg');
if(image.src.match("Up"))
  image.src="./images/Up.png";
else
  image.src="./images/down-arrow.png";
}