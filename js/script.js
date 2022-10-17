//quando clicchiamo sul bottone la funzione prende il value che ha nell'input
// let risultato = document.querySelector("p")

function search() {
    let query = document.querySelector("input").value
    // risultato.innerHTML = query 
    console.log(query)
    displaySpotify(query)
}

//il parametro è un contenitore che puo cambiate ma il contenuto comunque rimane lo stesso




//let query = document.querySelector("input").value
let api = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

async function displaySpotify(query){
    //let albums = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=")
    let albums = await fetch(api+query);
    console.log(albums);
    let albumObjects = await albums.json();
    let arrayOfAlbums = albumObjects.data;
    document.querySelector(".artist-name").innerHTML = `${arrayOfAlbums[0].artist.name}`;
    document.querySelector(".artist-img").innerHTML = `<img src="${arrayOfAlbums[0].artist.picture}" alt="${arrayOfAlbums[0].artist.name} photo">`;
    document.querySelector("table").innerHTML = ("")
    for (let albums of arrayOfAlbums) {
        document.querySelector("table").innerHTML += 
        `<div class="label">
        <div class="song-data">
          <div class="cover-img">
            <img src="https://e-cdns-images.dzcdn.net/images/cover/519400e29d268f449cf00af879e71af6/56x56-000000-80-0-0.jpg" alt="" />
          </div>
          <div>
            <div class="data-up">
              <div class="btn-play">
                <button id="playAudio"><i class="fas fa-play"></i></button>
                <audio id="testAudio" hidden src=" ${albums.preview} " type="audio/mpeg"></audio>
              </div>
              <h5> ${albums.title} </h5>
            </div>

            <div class="data-down">
              <p> ${albums.artist.name} - ${albums.album.title} </p>
            </div>
          </div>
        </div>
        <div class="like">
          <button>
            <i class="fas fa-heart"></i>
          </button>
        </div>

        <div class="time"><p> ${albums.duration} </p></div>
      </div>`;
        // document.querySelector("table").innerHTML += 
        // `<tr> <td> 
        // <audio controls> <source src=" ${albums.preview} " type="audio/mpeg"> </audio>  </td> 
        // <td>${albums.title}<hr />  </td>
        // <td>${albums.album.title}<hr />  </td>
        // <td>${albums.duration}<hr /> </td> </tr>`;
           
       
    }

}

window.onload = () => {
    displaySpotify();
}



document.getElementById("playAudio").addEventListener("click", function(){
	let audio = document.getElementById('testAudio');
  if(this.className == 'is-playing'){
    this.className = "";
    this.innerHTML = '<i class="fas fa-play"></i>'
    audio.pause();
  }else{
    this.className = "is-playing";
    this.innerHTML = '<i class="fas fa-pause"></i>';
    audio.play();
  }

});