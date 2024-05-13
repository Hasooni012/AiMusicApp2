function perload(){
    song=loadSound("base-rap-super-aggressiva-veloce-hard-beat-fast-instrumental-aggresive-202858.mp3");
    song=loadSound("emotional-type-trap-beat-rap-instrumental-lost-it-2024-206093.mp3");
} 

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO); 
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}
