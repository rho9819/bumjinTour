var myImage = document.getElementById("mainimg");
var imageArray = ["../img/남이섬.jpg", "../img/설악산.jpg", "../img/아차산.jpg","../img/경복궁1.jpg"];
var imageindex = 0;

function changeImage(){
    myImage.style.backgroundImage=`url(${imageArray[imageindex]})`; 
    imageindex++;
    if(imageindex>=imageArray.length){
        imageindex=0;
    }
}
setInterval(changeImage,3000);