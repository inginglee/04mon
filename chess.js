  var classColor = null;
  var clickClass = null;

  var mousedown = function(e){
    if(e.target.className == "red"){
      e.target.className = "red";
    }
    else{
      if(clickClass != null){
        clickClass.target.className = classColor; 
      }
      classColor = e.target.className;
      clickClass = e;
      e.target.className = "red";
    }
  }

  var board = document.getElementById("board");
  var str = '';
  for(var i=0; i<4; i++){
      str += '<div class="line">';
      for(var j=0; j<4; j++){
          if((i+j)%2 == 0)
            str += '<span class="black" bg></span>';
          else
            str += '<span class="white" ></span>';
      }
      str+= '</div>';
  }
  board.innerHTML = str;

  board.addEventListener("mousedown", mousedown);