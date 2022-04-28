var imageArray = ["img/lake.jpg", "img/mountain.jpg", "img/natural.jpg",
					"img/wooden-house.jpg", "img/hopetoun_falls.jpg"];
var imageIndex = 0;
var timer;


function changeImage() {
	timer = setTimeout(changeImage, 1500);
	image.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

function stopImage() {
	clearInterval(timer);
}

function pageLoaded(){
	var image = document.getElementById("image");
	document.getElementById("playBtn").addEventListener("click", changeImage);
	document.getElementById("stopBtn").addEventListener("click", stopImage);
	
}
window.onload = pageLoaded;