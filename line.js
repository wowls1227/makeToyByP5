
const canvas_size = 728;

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(255,255,255);
    vx=0 ,vy=0, x=0,y=0, checkpoint=false;

}

function draw(){
    
    line(x,y,x,windowHeight);
    x=x+5;
    line(vx,vy,windowWidth,vy);
    vy=vy+5;
    
    if(mouseIsPressed){
        fill(random(255),random(255),random(255));
        circle(mouseX,mouseY,random(50));
        fill(random(255),random(255),random(255));
    rect(random(windowWidth),random(windowHeight),random(80));
    }
    
}

function makeCircles(){
    fill('red');
    circle(mouseX,mouseY,50);
    
}
function keyTyped(){
    if(key==='r'){
        
    createCanvas(windowWidth,windowHeight);
    background(255,255,255);
    vx=0 ,vy=0, x=0,y=0, checkpoint=false;
    line(x,y,x,windowHeight);
    x=x+5;
    line(vx,vy,windowWidth,vy);
    vy=vy+5;
    }
}