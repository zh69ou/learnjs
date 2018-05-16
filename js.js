var imgList = document.getElementsByClassName('imgList')[0];
var timer;
motion();
function motion(){
	var speed = 1;
	timer = setInterval(function () {
		speed --;
		imgListLeft = parseInt(imgList.offsetLeft) + speed;
		imgList.style.left = imgListLeft + 'px';

		if( imgListLeft % 500 == 0){
			clearInterval(timer);
		}
	},20);
}