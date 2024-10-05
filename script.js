



let audioElement=new Audio('song0.mp3');
let songIndex=0;
let masterplay=document.getElementById("masterplay");
let myprogressbar=document.getElementById('myprogress');
let play=document.getElementById("0");
let play1=document.getElementById("1");
let play2=document.getElementById("2");
let play3=document.getElementById("3");
let play4=document.getElementById("4");
let play5=document.getElementById("5");
let play6=document.getElementById("6");
let play7=document.getElementById("7");
let play8=document.getElementById("8");
let play9=document.getElementById("9");
let play10=document.getElementById("10");
let play11=document.getElementById("11");
let play12=document.getElementById("12");
let play13=document.getElementById("13");
let play14=document.getElementById("14");
let play15=document.getElementById("15");
let play16=document.getElementById("16");
let play17=document.getElementById("17");
let play18=document.getElementById("18");
let play19=document.getElementById("19");

let haris=0;

masterplay.addEventListener("click",()=>{
    if(audioElement.paused||audioElement.currentTime<=0 ){
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
 
    }
     else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
     
     }
})
audioElement.addEventListener("timeupdate",()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myprogressbar.value=progress
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})





Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=> {
    element.addEventListener('click',(e)=>{
      songIndex= parseInt(e.target.id);
        audioElement.src = `song${songIndex}.mp3`;
        audioElement.play();
        audioElement.currentTime=0;

        play.classList.remove("fa-circle-play");
        play.classList.add("fa-circle-pause");
    
   

    })
});
document.getElementById('backward').addEventListener("click",()=>{
    if(songIndex>=19){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
        audioElement.src = `song${songIndex}.mp3`;
        audioElement.play();
        audioElement.currentTime=0
       
})
document.getElementById('pre').addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1
    }
   
        audioElement.src = `song${songIndex}.mp3`;
        audioElement.play();
        audioElement.currentTime=0
        //add
})
//font-family: 'Proxima Nova', sans-serif;




const volumeRange = document.getElementById('volumeRange');
const muteIcon = document.getElementById('muteIcon');

muteIcon.addEventListener('click', toggleMute);
volumeRange.addEventListener('input', updateVolume);

function updateVolume() {
  audioElement.volume = parseFloat(volumeRange.value);
  updateMuteIcon();
}

function toggleMute() {
  audioElement.muted = !audioElement.muted;
  updateMuteIcon();
}

function updateMuteIcon() {
  muteIcon.className = audioElement.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
}
//  box-shadow: -407px 0 0 400px green;