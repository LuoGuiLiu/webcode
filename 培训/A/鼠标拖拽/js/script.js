window.onload=function(){
	var mouseoffsetX=0;
	var mouseoffsetY=0;
	var isDragin=false;
var oForm=document.getElementById("form");
oForm.addEventListener('mousedown',function(e){
var e=e||window.event;
var mouseoffsetX=e.pageX-oForm.offsetLeft;
var mouseoffsetY=e.pageY-oForm.offsetTop;
isDragin=true;
});
document.onmousemove=function(e){
var e=e||window.event;
var mouseX=e.pageX;
var mouseY=e.pageY;
var moseX=0;
var moveY=0;
if(isDragin===true){
	moveX=mouseX-mouseoffsetX;
	moveY=mouseY-mouseoffsetY;
	var webWidth=document.documentElement.clientWidth;
	var webHeight=document.documentElement.clientHeight;
	var oformWidth=oForm.offsetWidth;
	var oformHeight=oForm.offsetHeight;
	var maxX=webWidth-oformWidth;
	var maxY=webHeight-oformHeight;
	moveX=Math.min(maxX,Math.max(0,moveX));
	moveY=Math.min(maxY,Math.max(0,moveY));	
	oForm.style.left=moveX+"px";
	oForm.style.top=moveY+"px";
}
document.onmouseup=function(){
	isDragin=false;
}
}

