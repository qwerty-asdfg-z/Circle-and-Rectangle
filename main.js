function preload(){

}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

    tint_color=""

}

function draw(){
    image(video,180,150,300,220)
    tint(tint_color);
    fill("blue");
    stroke("green");
    circle(80,80,100)
    fill("red");
    stroke("yellow");
    circle(550,475,100)
    fill("indigo");
    stroke("violet");
    circle(75,475,100)
    fill("brown");
    stroke("orange");
    circle(550,80,100)
    fill("yellow");
    stroke("red");
    rect(80,130,20,300)
    fill("green");
    stroke("red");
    rect(110,100,400,20)
    fill("blue");
    stroke("red");
    rect(520,120,20,320)
    fill("red");
    stroke("yellow");
    rect(110,450,400,20)
}
function take_snapshot(){
    save('student_name.png');


}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}