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
            <img src="${albums.album.cover_small} " alt="${albums.artist.name}-photo" />
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
       
    }

}

window.onload = () => {
    displaySpotify();
}






// <tr> <td> 
//         <audio controls> <source src=" ${albums.preview} " type="audio/mpeg"> </audio>  </td> 
//         <td>${albums.title}<hr />  </td>
//         <td>${albums.album.title}<hr />  </td>
//         <td>${albums.duration}<hr /> </td> </tr>