// credit: code modified from http://thenewcode.com/1124/Rotating-Elements-To-Mouse-and-Touch-Locations-Using-JavaScript
document.addEventListener("DOMContentLoaded", function() {
	var rotate = document.getElementById("rotate"),
	rotateBox = rotate.getBoundingClientRect(),
	centerPoint = window.getComputedStyle(rotate).transformOrigin,
	centers = centerPoint.split(" ");

	function rotaterotate(e) {
        var rotateEvent = e;
          
       	if (e.targetTouches && e.targetTouches[0]) {
          		e.preventDefault(); 
          		rotateEvent = e.targetTouches[0];
          		mouseX = rotateEvent.pageX;
          		mouseY = rotateEvent.pageY;
    		} else {
          		mouseX = e.clientX,
          		mouseY = e.clientY;
    		}

 var centerY = rotateBox.top + parseInt(centers[1]) - window.pageYOffset,
 centerX = rotateBox.left + parseInt(centers[0]) - window.pageXOffset,
 radians = Math.atan2(mouseX - centerX, mouseY - centerY),
 degrees = (radians * (180 / Math.PI) * -1) + 180 ; 
 rotate.style.transform = 'rotate('+degrees+'deg)';
};

window.addEventListener('mousemove', rotaterotate);
window.addEventListener('touchmove', rotaterotate);
window.addEventListener('touchstart', rotaterotate);

})