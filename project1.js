const water = document.querySelector(".wave");

window.addEventListener("scroll",function(){

	var height = window.pageYOffset;
	 
	water.style.backgroundPositionY= height*0.1 + "px";
})