img="";
status="";
objects=[];


function setup(){
    canvas=createCanvas(640,420);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status:detecting objects"
}


function modelloaded(){
console.log("modelloaded");
status=true;
objectDetector.detect(img,gotResult);


}

function gotResult(error,results){
    if(error){
        console.log(error)

    }
    else{
        console.log(results)
        objects=results;
    }



}

function preload(){
    img=loadImage("tv.jpg")

}

function draw(){
    image(img,0,0,640,420);
    
   

    if(status != ""){
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="status:objects detected";
            fill("#d66d0b");

            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+20,objects[i].y+20);
            noFill();
            stroke("#d66d0b");
            rect(objects[i].x,objects[i].y,objects[i].width ,objects[i].height);
        
        }
    }
}

