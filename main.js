function preload(){

}
function take_snapshot(){
    save('student_name.png');
    
   }
function setup(){
    canvas= createCanvas(640 , 480);
    canvas.position(150, 150 );
    video= createCapture(VIDEO);
    video.hide();
    
}
function draw(){
image(video, 230, 150,220,200);

fill(225,0,0);
stroke(225,0,0);
circle(50,50,80);

fill(0,128,0);
stroke(0,128,0);
rect(90,40,460,20);

rect(90,420,460,20);

}
