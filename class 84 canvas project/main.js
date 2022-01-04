canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

img_height=100;
img_width=300;

var img_image;

img_x=100;
img_y=100;

function add(){
    image_imgTag = new Image();
	image_imgTag.onload = uploadimg;
	image_imgTag.src = img_image;
}

function uploadimg(){
    ctx.drawImage(image_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keyPress=e.keyCode;
    if(keyPress>65 && keyPress<90){
         alphabetKey();
         document.getElementById("d1").innerHTML="You pressed alphabet key";
         console.log(alphabetKey);
    } 
}

function alphabetKey(){
    img_image="Alpkey.png";
    document.getElementById("d1").innerHTML="You pressed alphabet key";
         console.log(alphabetKey);
    add();
}