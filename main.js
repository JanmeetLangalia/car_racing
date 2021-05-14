canvas = document.getElementById("myCanvas");
    ctx=canvas.getContext("2d");
    
    background_image = "racing.jpg";
    car1_width=120;
    car1_height=70;
    car1_img="car11.png";
    car1_x=0;
    car1_y=10;
    
    
    car2_width=120;
    car2_height=70;
    car2_img="car22.png";
    car2_x=0;
    car2_y=100;
    
function add(){
    

background_imgTag = new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src = background_image;


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
    console.log("Hahaha1");
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}

function uploadcar2(){
    console.log("Hahaha2");
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown", my_keydown); 

function my_keydown(e) 

    { keyPressed = e.keyCode; console.log(keyPressed); 
        if(keyPressed == '38') { up(); console.log("up"); } 
        if(keyPressed == '40') { down(); console.log("down"); } 
        if(keyPressed == '37') { left(); console.log("left"); } 
        if(keyPressed == '39') { right(); console.log("right"); } 
        if(keyPressed == '87') { car2w(); console.log("w"); } 
        if(keyPressed == '83') { car2s(); console.log("s"); } 
        if(keyPressed == '65') { car2a(); console.log("a"); } 
        if(keyPressed == '68') { car2d(); console.log("d"); } 
    }

function up() { if(car1_y >=0) {
    console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    car1_y = car1_y - 10;
     console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
      uploadBackground(); 
      uploadcar1(); uploadcar2(); 
   } 



}

function down() 

{ if(car1_y <=500) {
    car1_y = car1_y + 10;
    console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    uploadBackground(); 
    uploadcar1(); uploadcar2(); 
   } 
}

function left() 

{ if(car1_x >=0) {
    car1_x = car1_x - 10;
    console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    uploadBackground(); 
    uploadcar1(); uploadcar2(); 
   } 
}

function right() 
{ if(car1_x <=700) {
    car1_x = car1_x + 10;
    console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    uploadBackground(); 
    uploadcar1(); uploadcar2(); 
    check_result();
}
}

function car2w() 
{ if(car2_y >=0) {
    car2_y = car2_y - 10;
    console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y);
    uploadBackground(); 
   uploadcar2();    uploadcar1(); 
   } 
}

function car2s() 
{ if(car2_y <=500) {
    car2_y = car2_y + 10;
    console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y);
    uploadBackground(); 
    uploadcar2();
    uploadcar1();  
   } 
}

function car2a() 
{ if(car2_x >=0) {
    car2_x = car2_x - 10;
    console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y);
    uploadBackground(); 
    uploadcar2(); 
    uploadcar1(); 
   } 
}

function car2d() 
{ if(car2_x <=700) {
    car2_x = car2_x + 10;
    console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y);
    uploadBackground(); 
    uploadcar2();    uploadcar1();
    check_result();
    }
 
}


function check_result() 
    {
        document.getElementById("status").innerHTML = "Game Status : ";
        if(car1_x >=700) 
        {   
         console.log("Car1 won ");
         document.getElementById("status").innerHTML = "Game Status : Car1 Won !!!";
        }
        if (car2_x >=700) 
        {   
         console.log("Car2 won ");
         document.getElementById("status").innerHTML = "Game Status : Car2 Won !!!";
        }

    }




