var initialPosition= [[658,265],[720,265],[782,265],
[844,265],[906,265],[970,283],[1009,332],
[1013,394],[979,446],[922,470],[860,470],
[798,470],[736,470],[674,470],[612,470],[546,454],[509,402],[506,339],[538,285],[596,265]];

var changedPosition= [[658,265],[720,265],[782,265],
[844,265],[906,265],[970,283],[1009,332],
[1013,394],[979,446],[922,470],[860,470],
[798,470],[736,470],[674,470],[612,470],[546,454],[509,402],[506,339],[538,285],[596,265]];

function getUpperPossition()
{
  var upperFiveItems=[];
  for (var i=0;i<20;i++)
  {
    if(initialPosition[19][0]==changedPosition[i][0] && initialPosition[19][1]==changedPosition[i][1])
    {
      upperFiveItems.push(i);
      break;
    }
  }
  for (var i=0;i<20;i++)
  {
    if(initialPosition[0][0]==changedPosition[i][0] && initialPosition[0][1]==changedPosition[i][1])
    {
      upperFiveItems.push(i);
      break;
    }
  }

  for (var i=0;i<20;i++)
  {
    if(initialPosition[1][0]==changedPosition[i][0] && initialPosition[1][1]==changedPosition[i][1] )
    {
      upperFiveItems.push(i);
      break;
    }
  }

  for (var i=0;i<20;i++)
  {
    if(initialPosition[2][0]==changedPosition[i][0] && initialPosition[2][1]==changedPosition[i][1])
    {
      upperFiveItems.push(i);
      break;
    }
  }

  for (var i=0;i<20;i++)
  {
    if(initialPosition[3][0]==changedPosition[i][0] && initialPosition[3][1]==changedPosition[i][1])
    {
      upperFiveItems.push(i);
      break;
    }
  }
  return upperFiveItems;
}
function getLowerPositions()
{
  var lowerFiveItems=[];
  for (var i=0;i<20;i++)
  {
    if(initialPosition[9][0]==changedPosition[i][0] && initialPosition[9][1]==changedPosition[i][1])
    {
      lowerFiveItems.push(i);
      break;
    }
  }
  for (var i=0;i<20;i++)
  {
    if(initialPosition[10][0]==changedPosition[i][0] && initialPosition[10][1]==changedPosition[i][1])
    {
      lowerFiveItems.push(i);
      break;
    }
  }

  for (var i=0;i<20;i++)
  {
    if(initialPosition[11][0]==changedPosition[i][0] && initialPosition[11][1]==changedPosition[i][1])
    {
      lowerFiveItems.push(i);
      break;
    }
  }

  for (var i=0;i<20;i++)
  {
    if(initialPosition[12][0]==changedPosition[i][0] && initialPosition[12][1]==changedPosition[i][1])
    {
      lowerFiveItems.push(i);
      break;
    }
  }

  for (var i=0;i<20;i++)
  {
    if(initialPosition[13][0]==changedPosition[i][0] && initialPosition[13][1]==changedPosition[i][1])
    {
      lowerFiveItems.push(i);
      break;
    }
  }
  return lowerFiveItems;
}
function getRightPositions()
{
  var rightFiveItems=[];
  for (var i=0;i<20;i++)
  {
    if(initialPosition[4][0]==changedPosition[i][0] && initialPosition[4][1]==changedPosition[i][1] )
    {
      rightFiveItems.push(i);
      break;
    }
  }
  for (var i=0;i<20;i++)
  {
    if(initialPosition[5][0]==changedPosition[i][0] && initialPosition[5][1]==changedPosition[i][1])
    {
      rightFiveItems.push(i);
      break;
    }
  }

  for (var i=0;i<20;i++)
  {
    if(initialPosition[6][0]==changedPosition[i][0] && initialPosition[6][1]==changedPosition[i][1])
    {
      rightFiveItems.push(i);
      break;
    }
  }

  for (var i=0;i<20;i++)
  {
    if(initialPosition[7][0]==changedPosition[i][0] && initialPosition[7][1]==changedPosition[i][1])
    {
      rightFiveItems.push(i);
      break;
    }
  }

  for (var i=0;i<20;i++)
  {
    if(initialPosition[8][0]==changedPosition[i][0] && initialPosition[8][1]==changedPosition[i][1])
    {
      rightFiveItems.push(i);
      break;
    }
  }
  return rightFiveItems;
}
function getLeftPositions()
{
  var leftFiveItems=[];
  for (var i=0;i<20;i++)
  {
    if(initialPosition[14][0]==changedPosition[i][0] && initialPosition[14][1]==changedPosition[i][1])
    {
      leftFiveItems.push(i);
      break;
    }
  }
  for (var i=0;i<20;i++)
  {
    if(initialPosition[15][0]==changedPosition[i][0] && initialPosition[15][1]==changedPosition[i][1])
    {
      leftFiveItems.push(i);
      break;
    }
  }

  for (var i=0;i<20;i++)
  {
    if(initialPosition[16][0]==changedPosition[i][0] && initialPosition[16][1]==changedPosition[i][1])
    {
      leftFiveItems.push(i);
      break;
    }
  }

  for (var i=0;i<20;i++)
  {
    if(initialPosition[17][0]==changedPosition[i][0] && initialPosition[17][1]==changedPosition[i][1])
    {
      leftFiveItems.push(i);
      break;
    }
  }

  for (var i=0;i<20;i++)
  {
    if(initialPosition[18][0]==changedPosition[i][0] && initialPosition[18][1]==changedPosition[i][1])
    {
      leftFiveItems.push(i);
      break;
    }
  }
  return leftFiveItems;
}


function rotate() {
  
  var circles = document.querySelectorAll(".circle");
  
  document.getElementById("rotation").disabled = true;
  document.getElementById("image-rotate").style.visibility = "hidden";
  setTimeout(function(){document.getElementById("rotation").disabled = false;},500);
  setTimeout(function(){document.getElementById("image-rotate").style.visibility = "visible";},500);
  //For upper linear motion
  var trackUP=0
  var upperFiveElements= getUpperPossition();//get idex of elements
  
  upperFiveElements.forEach(function (item, index) {
    
    var circle = circles[item];
  
    circle.keyframes = [{
      opacity: 1,
      transform: "translate3d(" + 62 + "px, 0px, 0px)"
      },
    ];
 
    circle.animProps = {
    duration: 150,
    easing: "ease-out",
    iterations: 1
    }
  
    var animationPlayer = circle.animate(circle.keyframes, circle.animProps);
    
    animationPlayer.onfinish=()=>{
      var elem = document.getElementById("main-object-"+(item+1).toString());
        if(trackUP==0)
        {
          elem.style.left = initialPosition[0][0] + 'px';
          changedPosition[item][0]=initialPosition[0][0];

          
        }
        else if(trackUP==1)
        {
          elem.style.left = initialPosition[1][0] + 'px';
          changedPosition[item][0]=initialPosition[1][0];
          
        }  
        else if(trackUP==2)
        {
          elem.style.left = initialPosition[2][0] + 'px';
          changedPosition[item][0]=initialPosition[2][0];
          
        }  
        else if(trackUP==3)
        {
          elem.style.left = initialPosition[3][0] + 'px';
          changedPosition[item][0]=initialPosition[3][0];
         
        }  
        else if(trackUP==4)
        {
          elem.style.left = initialPosition[4][0] + 'px';
          changedPosition[item][0]=initialPosition[4][0];
        }  
        trackUP=trackUP+1;
  
    }
  });
 
  //console.log(changedPosition) 

  //For down Linear Positions

  var downFiveElement= getLowerPositions();//get idex of elements
  //For upper linear motion  
  downFiveElement.forEach(function (item, index) {
    var circle = circles[item];
  
    circle.keyframes = [{
      opacity: 1,
      transform: "translate3d(" + -62 + "px, 0px, 0px)"
      },
    ];
 
    circle.animProps = {
    duration: 150,
    easing: "ease-out",
    iterations: 1
    }
  
    var animationPlayer = circle.animate(circle.keyframes, circle.animProps);
    animationPlayer.onfinish=()=>{
      
      var elem = document.getElementById("main-object-"+(item+1).toString());
      elem.style.left = elem.getBoundingClientRect().left-62-8 + 'px';
      changedPosition[item][0]=elem.getBoundingClientRect().left-8;
    }

  });
 
  // Right Rotation

  var rightFiveElement= getRightPositions();//get idex of elements
  var trackElements=0;
  var trackRight=0;
  var X1,Y1, X2,Y2;
  rightFiveElement.forEach(function (item, index) {
    var circle = circles[item];
    if(trackElements==0)
    {
      X1= initialPosition[4][0];
      Y1=initialPosition[4][1];
      X2= initialPosition[5][0];
      Y2=initialPosition[5][1];
    }
    
    else if(trackElements==1)
    {
      X1= initialPosition[5][0];
      Y1=initialPosition[5][1];
      X2= initialPosition[6][0];
      Y2=initialPosition[6][1];
    }
    
    else if(trackElements==2)
    {
      X1= initialPosition[6][0];
      Y1=initialPosition[6][1];
      X2= initialPosition[7][0];
      Y2=initialPosition[7][1];
    }
    else if(trackElements==3)
    {
      X1= initialPosition[7][0];
      Y1=initialPosition[7][1];
      X2= initialPosition[8][0];
      Y2=initialPosition[8][1];
    }
    else if(trackElements==4)
    {
      X1= initialPosition[8][0];
      Y1=initialPosition[8][1];
      X2= initialPosition[9][0];
      Y2=initialPosition[9][1];
    }
    

    circle.keyframes = [{
      opacity: 1,
      transform: "translate3d(" + (X2-X1) + "px,"+ (Y2-Y1) +"px, 0px)"
      },
    ];
   
    circle.animProps = {
    duration: 150,
    easing: "ease-out",
    iterations: 1
    }
    trackElements=trackElements+1;
    var animationPlayer = circle.animate(circle.keyframes, circle.animProps);
    
    animationPlayer.onfinish=()=>{
      if(trackRight==0)
      {
        var elem = document.getElementById("main-object-"+(item+1).toString());
        elem.style.left = initialPosition[5][0] +'px';
        elem.style.top = initialPosition[5][1]+ 'px';
        changedPosition[item][0]=initialPosition[5][0];
        changedPosition[item][1]=initialPosition[5][1];
      }
      else if(trackRight==1)
      {
        var elem = document.getElementById("main-object-"+(item+1).toString());
        elem.style.left = initialPosition[6][0] +'px';
        elem.style.top = initialPosition[6][1]+ 'px';
        changedPosition[item][0]=initialPosition[6][0];
        changedPosition[item][1]=initialPosition[6][1];
      }
      else if(trackRight==2)
      {
        var elem = document.getElementById("main-object-"+(item+1).toString());
        elem.style.left = initialPosition[7][0] +'px';
        elem.style.top = initialPosition[7][1]+ 'px';
        changedPosition[item][0]=initialPosition[7][0];
        changedPosition[item][1]=initialPosition[7][1];
      }
      else if(trackRight==3)
      {
        var elem = document.getElementById("main-object-"+(item+1).toString());
        elem.style.left = initialPosition[8][0] +'px';
        elem.style.top = initialPosition[8][1]+ 'px';
        changedPosition[item][0]=initialPosition[8][0];
        changedPosition[item][1]=initialPosition[8][1];
      }
      else if(trackRight==4)
      {
        var elem = document.getElementById("main-object-"+(item+1).toString());
        elem.style.left = initialPosition[9][0] +'px';
        elem.style.top = initialPosition[9][1]+ 'px';
        changedPosition[item][0]=initialPosition[9][0];
        changedPosition[item][1]=initialPosition[9][1];
      }
      trackRight=trackRight+1;
    }
  });


  //Left Rotations

  var leftFiveElement= getLeftPositions();//get idex of elements
  var trackLeftElements=0;
  var trackLeft=0;
  var X1,Y1, X2,Y2;
  leftFiveElement.forEach(function (item, index) {
    var circle = circles[item];
    if(trackLeftElements==0)
    {
      X1= initialPosition[14][0];
      Y1=initialPosition[14][1];
      X2= initialPosition[15][0];
      Y2=initialPosition[15][1];
    }
    
    else if(trackLeftElements==1)
    {
      X1= initialPosition[15][0];
      Y1=initialPosition[15][1];
      X2= initialPosition[16][0];
      Y2=initialPosition[16][1];
    }
    
    else if(trackLeftElements==2)
    {
      X1= initialPosition[16][0];
      Y1=initialPosition[16][1];
      X2= initialPosition[17][0];
      Y2=initialPosition[17][1];
    }
    else if(trackLeftElements==3)
    {
      X1= initialPosition[17][0];
      Y1=initialPosition[17][1];
      X2= initialPosition[18][0];
      Y2=initialPosition[18][1];
    }
    else if(trackLeftElements==4)
    {
      X1= initialPosition[18][0];
      Y1=initialPosition[18][1];
      X2= initialPosition[19][0];
      Y2=initialPosition[19][1];
    }
    
  
    circle.keyframes = [{
      opacity: 1,
      transform: "translate3d(" + (X2-X1) + "px,"+ (Y2-Y1) +"px, 0px)"
      },
    ];
   
    circle.animProps = {
    duration: 150,
    easing: "ease-out",
    iterations: 1
    }
    trackLeftElements=trackLeftElements+1;
    var animationPlayer = circle.animate(circle.keyframes, circle.animProps);
    
    animationPlayer.onfinish=()=>{

      if(trackLeft==0){
        var elem = document.getElementById("main-object-"+(item+1).toString());
        elem.style.left = initialPosition[15][0] +'px';
        elem.style.top = initialPosition[15][1]+ 'px';
        changedPosition[item][0]=initialPosition[15][0];
        changedPosition[item][1]=initialPosition[15][1];
      }
      else if(trackLeft==1)
      {
        var elem = document.getElementById("main-object-"+(item+1).toString());
        elem.style.left = initialPosition[16][0] +'px';
        elem.style.top = initialPosition[16][1]+ 'px';
        changedPosition[item][0]=initialPosition[16][0];
        changedPosition[item][1]=initialPosition[16][1];
      }
      else if(trackLeft==2)
      {
        var elem = document.getElementById("main-object-"+(item+1).toString());
        elem.style.left = initialPosition[17][0] +'px';
        elem.style.top = initialPosition[17][1]+ 'px';
        changedPosition[item][0]=initialPosition[17][0];
        changedPosition[item][1]=initialPosition[17][1];
      }
      else if(trackLeft==3)
      {
        var elem = document.getElementById("main-object-"+(item+1).toString());
        elem.style.left = initialPosition[18][0] +'px';
        elem.style.top = initialPosition[18][1]+ 'px';
        changedPosition[item][0]=initialPosition[18][0];
        changedPosition[item][1]=initialPosition[18][1];
      }
      else if(trackLeft==4)
      {
        var elem = document.getElementById("main-object-"+(item+1).toString());
        elem.style.left = initialPosition[19][0] +'px';
        elem.style.top = initialPosition[19][1]+ 'px';
        changedPosition[item][0]=initialPosition[19][0];
        changedPosition[item][1]=initialPosition[19][1];
      }
      trackLeft=trackLeft+1;
       
    }
   
  });

}
// Reset Button
function reset()
{
  location.reload(true);
}
//T Button
function tButton()
{
  upperFiveElements=getUpperPossition();
  document.getElementById("t-button").disabled = true;
  setTimeout(function(){document.getElementById("t-button").disabled = false;},500);

 //Hidding and showing the T feature images
  var img_non_T_first = document.getElementById('image-non-T-first');
  var img_non_T_second = document.getElementById('image-non-T-second');
  var image_T_up = document.getElementById('image-T-up');
  var image_T_down=document.getElementById('image-T-down');
  if(img_non_T_first.style.visibility=='hidden' && image_T_up.style.visibility=='hidden')
  { 
    img_non_T_first.style.visibility = 'visible';
    image_T_up.style.visibility = 'visible';
  }
  else
  {
    img_non_T_first.style.visibility = 'hidden';
    image_T_up.style.visibility = 'hidden';
  }

  if(img_non_T_second.style.visibility=='visible' && image_T_down.style.visibility=='visible')
  { 
    img_non_T_second.style.visibility = 'hidden';
    image_T_down.style.visibility = 'hidden';
  }
  else
  {
    img_non_T_second.style.visibility = 'visible';
    image_T_down.style.visibility = 'visible';
  }


  //We need to work with 4 positions only so we will focus on last 4 elements
  //Get elements starting from index 1
  elem1= document.getElementById("main-object-"+(upperFiveElements[1]+1).toString());
  elem2= document.getElementById("main-object-"+(upperFiveElements[2]+1).toString());
  elem3= document.getElementById("main-object-"+(upperFiveElements[3]+1).toString());
  elem4= document.getElementById("main-object-"+(upperFiveElements[4]+1).toString());

  elem1.style.left= initialPosition[3][0]+'px';
  elem1.style.top = initialPosition[3][1]+'px';
  changedPosition[upperFiveElements[1]][0]= initialPosition[3][0];
  changedPosition[upperFiveElements[1]][1]= initialPosition[3][1];

  elem2.style.left= initialPosition[2][0]+'px';
  elem2.style.top = initialPosition[2][1]+'px';
  changedPosition[upperFiveElements[2]][0]= initialPosition[2][0];
  changedPosition[upperFiveElements[2]][1]= initialPosition[2][1];

  elem3.style.left= initialPosition[1][0]+'px';
  elem3.style.top = initialPosition[1][1]+'px';
  changedPosition[upperFiveElements[3]][0]= initialPosition[1][0];
  changedPosition[upperFiveElements[3]][1]= initialPosition[1][1];

  elem4.style.left= initialPosition[0][0]+'px';
  elem4.style.top = initialPosition[0][1]+'px';
  changedPosition[upperFiveElements[4]][0]= initialPosition[0][0];
  changedPosition[upperFiveElements[4]][1]= initialPosition[0][1];

}

function mix()
{
  document.getElementById("mix").disabled = true;
  setTimeout(function(){document.getElementById("mix").disabled = false;},500);

}

function swap13()
{
  var upperFiveElements=getUpperPossition();
  document.getElementById("one-three").disabled = true;
  setTimeout(function(){document.getElementById("one-three").disabled = false;},500);
  //We need to work with 2 positions only so we will focus on last only position 1 and position 3
  //Get elements starting from index 1
  elem1= document.getElementById("main-object-"+(upperFiveElements[1]+1).toString());
  elem3= document.getElementById("main-object-"+(upperFiveElements[3]+1).toString());


  elem1.style.left= initialPosition[2][0]+'px';
  elem1.style.top = initialPosition[2][1]+'px';
  changedPosition[upperFiveElements[1]][0]= initialPosition[2][0];
  changedPosition[upperFiveElements[1]][1]= initialPosition[2][1];

  elem3.style.left= initialPosition[0][0]+'px';
  elem3.style.top = initialPosition[0][1]+'px';
  changedPosition[upperFiveElements[3]][0]= initialPosition[0][0];
  changedPosition[upperFiveElements[3]][1]= initialPosition[0][1];

}

function swap174()
{
  var upperFiveElements=getUpperPossition();
  var rightFiveElement=getRightPositions();
  document.getElementById("one-seven-four").disabled = true;
  setTimeout(function(){document.getElementById("one-seven-four").disabled = false;},500);
  // We get total 10 positions but we need to work with position at 1, 4 and 7
  elem1= document.getElementById("main-object-"+(upperFiveElements[1]+1).toString());
  elem4= document.getElementById("main-object-"+(upperFiveElements[4]+1).toString());
  elem7= document.getElementById("main-object-"+(rightFiveElement[2]+1).toString());


  elem1.style.left= initialPosition[6][0]+'px';
  elem1.style.top = initialPosition[6][1]+'px';
  changedPosition[upperFiveElements[1]][0]= initialPosition[6][0];
  changedPosition[upperFiveElements[1]][1]= initialPosition[6][1];

  elem4.style.left= initialPosition[0][0]+'px';
  elem4.style.top = initialPosition[0][1]+'px';
  changedPosition[upperFiveElements[4]][0]= initialPosition[0][0];
  changedPosition[upperFiveElements[4]][1]= initialPosition[0][1];

  elem7.style.left= initialPosition[3][0]+'px';
  elem7.style.top = initialPosition[3][1]+'px';
  changedPosition[rightFiveElement[2]][0]= initialPosition[3][0];
  changedPosition[rightFiveElement[2]][1]= initialPosition[3][1];

}

function rotationInverse()
{
  
}