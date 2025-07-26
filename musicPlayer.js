let progress = document.getElementById("progress");
let song = document.getElementById("song");
let icon = document.getElementById("icon");

song.onloadedmetadata = function(){
  progress.max = song.ondurationchange;
  progress.value = song.currentTime;
}
// function playPause() {
//   if (icon.classList.contains("fa-pause")) {
//     song.pause();
//     icon.classList.replace("fa-pause", "fa-play");
//   } else {
//     song.play();
//     icon.classList.replace("fa-play", "fa-pause");
//   }
// }
function playPause(){
  if(icon.classList.contains("fa-pause")){
    song.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }else{
    song.play();
    icon.classList.add("fa-pause");
    icon.classList.remove("fa-play");
  }
}
if(song.play()){
  setInterval(()=>{
    progress.value = song.currentTime;
  },100);
}
progress.onchange = function(){
  song.play();
  song.currentTime = progress.value;
  icon.classList.add("fa-pause");
  icon.classList.remove("fa-play");
}
