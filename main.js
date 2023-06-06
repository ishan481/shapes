function setup(){
    canvas= createCanvas(640,480);
    canvas.position(150,150);
    Video=createCapture(Video);
    Video.hide();
    tint_color=""

}

function draw(){
    image(Video,0,0,640,480);
    tint(tint_color);
    circle(30, 30,20);
    fill(255,0,0);
    stroke(255,0,0);
    ellipse(56, 46, 55, 55 );
    fill(255,0,0);
    stroke(255,0,0);
    rect(30, 20, 55, 55);
    fill(255,0,0);
    stroke(255,0,0);


}