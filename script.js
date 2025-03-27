import songs from './songs.json' with { "type": "json" };

const sangliste = document.querySelector("#songlist");


songs.songs.forEach(song => {
    sangliste.innerHTML += `
    <div class="song">
        <h2>${song.title} - ${song.artist}</h2>
        <p><strong>Sjanger:</strong> ${song.genre}</p>
        <p><strong>Varighet:</strong> ${song.duration}</p>
        <p><strong>Album:</strong> ${song.album}</p>
        <p><strong>Om artisten:</strong> ${song.artistDescription}</p>
        <p><strong>Anmeldelse:</strong> ${song.review}</p>
        <a href="${song.link}" target="_blank">🎵 Hør på Spotify</a>
        
    </div>
    `;
   
});

console.log(songs);