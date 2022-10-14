async function displaySpotify(){
    let albums = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=franco-battiato");
    let albumObjects = await albums.json();
    let arrayOfAlbums = albumObjects.data;
    document.querySelector("h1").innerHTML += `${arrayOfAlbums[0].artist.name}`;
    document.querySelector(".img").innerHTML += `<img src="${arrayOfAlbums[0].artist.picture_small}" alt="">`;
    for (let albums of arrayOfAlbums) {

        document.querySelector("table").innerHTML += 
        `<tr> <td> 
        <audio controls> <source src=" ${albums.preview} " type="audio/mpeg"> </audio>  </td> 
        <td>${albums.title}<hr />  </td>
        <td>${albums.album.title}<hr />  </td>
        <td>${albums.duration}<hr /> </td> </tr>`;
           
       
    }

}

window.onload = () => {
    displaySpotify();
}