var turtle = document.getElementById('turtle')

jQuery(document).ready(function() {

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
  var degrees = 40;
  const current_rotation = 0;
   
  $(document).mousemove(function(e){
    mouseX = e.pageX - 30;
    mouseY = e.pageY - 30; 
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/1000);
    yp += ((mouseY - yp)/1000);
    $(turtle).css({left: xp +'px', top: yp +'px'});
  }, 10);


});

