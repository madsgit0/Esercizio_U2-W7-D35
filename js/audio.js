document.getElementById("playAudio").addEventListener("click", function(){
	let audio = document.getElementById('testAudio');
  if(this.className == 'is-playing'){
    this.className = " ";
    this.innerHTML = '<i class="fas fa-play"></i>'
    audio.pause();
  }else{
    this.className = "is-playing";
    this.innerHTML = '<i class="fas fa-pause"></i>';
    audio.play();
  }

});