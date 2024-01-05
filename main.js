nose_X=0;
nose_Y=0;

function preload(){
moustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
webcam=createCapture(VIDEO);
webcam.size(300,300);
webcam.hide();

poseNet=ml5.poseNet(webcam,modelLoaded);
poseNet.on('pose',gotPoses);

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose_x="+results[0].pose.nose.x);
        console.log("nose_y="+results[0].pose.nose.y);
        nose_X=results[0].pose.nose.x-20;
        nose_Y=results[0].pose.nose.y;
        console.log("yes");
    }
}

function modelLoaded(){
console.log("pose net has been initialized");
}

function draw(){
image(webcam,0,0,300,300);
image(moustache,nose_X,nose_Y,40,40);
console.log("no");
}

function take_snapshot(){
    save("filter_image");
}