canvas = document.getElementById("myCanvas");
    ctx=canvas.getContext("2d");
    
    background_image = "racing.jpg";
    car1_width=120;
    car1_height=70;
    car1_img="car11.png";
    car1_x=10;
    car1_y=10;
    
    
    car2_width=120;
    car2_height=70;
    car2_img="car22.png";
    car2_x=10;
    car2_y=100;
    
function add(){
    

background_imgTag = new Image();
console.log("Hiiiii");
background_imgTag.onload=uploadBackground;
console.log("Hooo");
background_imgTag.src = background_image;
console.log("Hi");

car1_imgTag = new Image();
car1_imgTag.onload=uploadcar1;
car1_imgTag.src = car1_img;

car2_imgTag = new Image();
car2_imgTag.onload=uploadcar2;
car2_imgTag.src = car2_img;
}

function uploadBackground(){
    console.log("Hahaha");
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}


function uploadcar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}