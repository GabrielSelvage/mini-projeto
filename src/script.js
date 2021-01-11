var image = null;
var imgCanvas;

function loadImage() {
  imgCanvas = document.getElementById("canvas1");
  var fileInput = document.getElementById("bot1");
  image = new SimpleImage(fileInput);
  image.drawTo(imgCanvas);
}
 
function verific (image) {
  if (image == null || ! image.complete()) {
  return true;
  }
  else
    {      
      return false;
  }  
}

function doGray() {
  for (var pixel of image.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
}
}

function makeGray() {
 if (verific(image) == false) {
   doGray();
   image.drawTo(imgCanvas);
 }
 }

function doBlue () {
  for(var pixel of image.values()) {
    if(pixel.getX() <= image.getWidth()) {
        pixel.setBlue(255);
}
  }
}

  function makeBlue () {
    if (verific(image) == false) {
      doBlue();
      image.drawTo(imgCanvas);
    }
  }

function doRed () {
  for(var pixel of image.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) /3;
    if(avg < 128) {
     pixel.setRed(avg*2);
     pixel.setGreen(0);
     pixel.setBlue(0);  
}
    else {
     pixel.setRed(255);
     pixel.setGreen(avg*2 - 255);
     pixel.setBlue(avg*2 - 255);
    }
  }
}

  function makeRed () {
    if (verific(image) == false) {
   doRed();
   image.drawTo(imgCanvas);
    }
  }

function makeWindow() {
  for(var pixel of image.values()) {
    var x= pixel.getX();
    var y= pixel.getY();
    var w= image.width;
    var h= image.height;
    if(x > (w/3) && x < (w/3)+4) {
      pixel.setBlue(0);
      pixel.setRed(0);
      pixel.setGreen(0);
    }
    if (x > (w/3)*2 && x < (w/3)*2+4) {
      pixel.setBlue(0);
      pixel.setRed(0);
      pixel.setGreen(0);
    }
    if (x > (w/3)*3 && x < (w/3)*3+4) {
      pixel.setBlue(0);
      pixel.setRed(0);
      pixel.setGreen(0);
    }
    if (y > (w/3) && y < (w/3)+4) {
      pixel.setBlue(0);
      pixel.setRed(0);
      pixel.setGreen(0);
    }
    if (y > (w/3)*2 && y < (w/3)*2+4) {
      pixel.setBlue(0);
      pixel.setRed(0);
      pixel.setGreen(0);
    }
    if (y > (w/3)*3 && y < (w/3)*3+4) {
      pixel.setBlue(0);
      pixel.setRed(0);
      pixel.setGreen(0);
    }
  }
  image.drawTo(imgCanvas);
}


function doRainbow() {
image = new SimpleImage(image);
  var h = image.getHeight();
  var parse = parseInt(h) / 7;
  var Y;
  var X;
for(var pixel of image.values()) {
var x= pixel.getX();
    var y= pixel.getY();
    var w= image.width;
    var h= image.height;
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) /3;
        if(y <= parseInt(parse)){
        if (avg < 128){
        pixel.setRed(avg*2);
        pixel.setGreen(0);
        pixel.setBlue(0);
             } 
        else {
        pixel.setRed(255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);
           }
        }
  if(y >= parseInt(parse) && y <= 2 * parseInt(parse)){
     if (avg < 128) {
     pixel.setRed(2*avg);
     pixel.setGreen(0.8*avg);
     pixel.setBlue(0);  
         }
     else {
     pixel.setRed(255);
     pixel.setGreen(1.2*avg-51);
     pixel.setBlue(2*avg-255); 
            }
        }
  if(y >= 2* parseInt(parse) && y <= 3 * parseInt(parse)){
    if (avg < 128) {
    pixel.setRed(2*avg);
    pixel.setGreen(2*avg);
    pixel.setBlue(0);  
        }
    else {
    pixel.setRed(255);
    pixel.setGreen(255);
    pixel.setBlue(2*avg-255); 
          } 
        }
  if(y >= 3* parseInt(parse) && y <= 4 * parseInt(parse)){
    if (avg < 128) {
    pixel.setRed(0);
    pixel.setGreen(2*avg);
    pixel.setBlue(0);  
       }
    else {
    pixel.setRed(2*avg-255);
    pixel.setGreen(255);
    pixel.setBlue(2*avg-255); 
         }                  
       }
  if(y >= 4* parseInt(parse) && y <= 5 * parseInt(parse)){
    if (avg < 128) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(2*avg);  
        }
    else {
    pixel.setRed(2*avg-255);
    pixel.setGreen(2*avg-255);
    pixel.setBlue(255); 
             }       
         }
  if(y >= 5* parseInt(parse) && y <= 6 * parseInt(parse)){
    if (avg < 128) {
    pixel.setRed(0.8*avg);
    pixel.setGreen(0);
    pixel.setBlue(2*avg);  
          }
    else {
    pixel.setRed(1.2*avg-51);
    pixel.setGreen(2*avg-255);
    pixel.setBlue(255); 
           }    
        }
  if(y >= 6* parseInt(parse) && y <= 7 * parseInt(parse)){
     if (avg < 128) {
     pixel.setRed(1.6*avg);
     pixel.setGreen(0);
     pixel.setBlue(1.6*avg);  
        }
     else {
     pixel.setRed(0.4*avg+153);
     pixel.setGreen(2*avg-255);
     pixel.setBlue(0.4*avg+153); 
         }
       }
     }
  image.drawTo(imgCanvas);
}


function makeRaibown () {
  if (verific()) {
    doRainbow();
    image.drawTo(imgCanvas);
  } else {
    alert("Imagem Não Carregada");
  }
}

function makeBlur(){
  if(verific(image)!=null){
    var newImage = new SimpleImage(image.getWidth(),image.getHeight());
    
    for(var pixel of image.values()){
      var newPixel = newImage.getPixel(pixel.getX(),pixel.getY());
      if(Math.random()>0.5){
        newPixel.setRed(pixel.getRed());
        newPixel.setGreen(pixel.getGreen());
        newPixel.setBlue(pixel.getBlue());
      }
      else{
        var spixel = randPixel(pixel,image);
        /*while(isValid(spixel,nimage)==false){
          spixel = randPixel(npixel);
        }*/
        newPixel.setRed(spixel.getRed());
        newPixel.setGreen(spixel.getGreen());
        newPixel.setBlue(spixel.getBlue());
      }
    }
    var canvas = document.getElementById("canvas1");
    newImage.drawTo(canvas);
  }
}
function randPixel(pixel,image){
  var check=false;
  while(check==false){
    var xMath = Math.round(Math.random()*10);
    if (Math.random()<0.5){
      xMath=xMath*-1;
    }
    var x = pixel.getX()+xMath;

    var yMath = Math.round(Math.random()*10);
    if (Math.random()<0.5){
      yMath = yMath*-1;
    }
    var y = pixel.getY()+yMath;
    if (x>=0 && x<image.getWidth() && y>=0 && y<image.getHeight()){
      check=true;
    }
  }
  var spixel = image.getPixel(x, y);
  return spixel;
}


function makeReset() {
  doClear(imgCanvas);
  loadImage(imgCanvas);
}

function doClear (canvas) {
  canvas = document.getElementById("canvas1");
  var context = canvas.getContext("2d"); context.clearRect(0,0,canvas.width,canvas.height);
}