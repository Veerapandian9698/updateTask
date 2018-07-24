var end=0;
var max_index=0;

//Menu bar creation
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//Scrolling functionality
var marginY = 0;
var destination=0;
var speed=10;
var scroller=null;

function initScroll(elementId){
 
  destination = document.getElementById(elementId).offsetTop;
  scroller=setTimeout(function(){
    initScroll(elementId);
  },1);

marginY=marginY+speed;
if(marginY>=destination){
  clearTimeout(scroller);
}
  window.scroll(0,marginY);
  if(marginY > 550 && elementId =='demo')
  {
    Top();
    function Top(){
      scroller=setTimeout(function(){
        Top();
      },1);
      marginY=marginY-speed;
      if(marginY <=550){
        clearTimeout(scroller);
      }

      window.scroll(0,marginY);
    }

  } 
  // if(marginY == 1650 && elementId=='second'){
  //   marginY=0;
  // }  
  // if(marginY==640 && elementId=='first')
  // {
  //   marginY=0;
  // }
}
window.onscroll = function (e) { 
console.log(window.scrollY);
  if(window.scrollY==0){
    marginY=0;
  }
  if(window.scrollY<550 && window.scrollY>0)
  {
    marginY=window.scrollY;
  }
  if(window.scrollY>=1060){
    marginY=1060;
  }
  if(window.scrollY > 550 && window.scrollY<1060)
  {
    marginY=window.scrollY;
  }
  if(window.scrollY>=550){
    marginY=window.scrollY;
  }
};






function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}



var i,j=0;
const http = new easyHTTP;
// Get Posts
http.get('/json/first.json', function(err, posts) {
  if(err) {
    console.log(err);
  } else {
    var obj = JSON.parse(posts);
    console.log(obj);
    if(obj!=null){
      
      var result = "";
      var loaders = {"1":"/assets/application-onboarding.png","2":"/assets/app-sec-scanning.png","3":"/assets/asset-50-6-x.png","4":"/assets/hawk-eye-dashboard.png","5":"/assets/hawk-eye-api.png","6":"/assets/security-assist-plugin.png"};


      var template = '  <li class="box carousel_each" id="boxes">\
                                <div class="image-div">\
                                    <img src="{class}">\
                                </div>\
                                <div class="text-div">\
                                    <p class="heading" id="headings">{heading}</p>\
                                    <p class="details">{details}</p>\
                                </div>\
                            </li>';
                end=obj.length;
                if(obj.length%2==0){
                max_index=Math.floor(end/2)-1;
                }
                else{
                  max_index=Math.floor(end/2);
                }            
            for(i = 0;i < obj.length;i++){
               result += template.replace("{class}",loaders[obj[i].tag_id]).replace("{heading}",obj[i].title).replace("{details}",obj[i].details);
            }
            console.log(result);
            document.getElementById('first').innerHTML = result;
    }
  }
});
  var current_index = 0;
if(current_index==0){
  document.getElementById('buttonLeft').style.display='none';
}
 var min_index = 0;

 function slideLeft() {
  if(current_index <= min_index){
    return
  }
  else{
    current_index -= 1;
    if(current_index<max_index)
    {
      document.getElementById('buttonRight').style.display='block';
    }
    if(current_index==0){
      document.getElementById('buttonLeft').style.display='none';
    }
    var slideValue = -20 * current_index
    var slideString = String(slideValue)
    document.getElementById("first").style.transform = "translateX(" + slideString + "%)"
  }
 }
 
 function slideRight() {
  if(current_index >= max_index){
    return
  }
  else{
    current_index += 1;
    if(current_index>0){
      document.getElementById('buttonLeft').style.display='block';
    }
     if(current_index==max_index){
      document.getElementById('buttonRight').style.display='none';
     }
    var slideValue = -20 * current_index
    var slideString = String(slideValue)
    document.getElementById("first").style.transform = "translateX(" + slideString + "%)";
  }
 }
 
 document.getElementById("buttonLeft").onclick = slideLeft
 document.getElementById("buttonRight").onclick = slideRight
 


