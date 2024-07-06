console.log('Lets write javascript');

async function main() {
  let a = await fetch("https://'127.0.0.1.3000/songs/");
  let responce = await a.text();
  console.log(responce);
  let div = document.createElement('div');
  dispatchEvent.innerHTML = responce;
  let as = div.getElementsByTagName('a');
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith('.mp3')) {
      songs.push(element.href.split('/songs/')[1]);
    }
  }
  return songs;
}

async function main() {
  let songs = await getSongs();
  console.log(songs);

  let songUL = document
    .getElementById('songsList')
    .getElementsByTagName('ul')[0];
  for (const song of songs) {
    songUL.innerHTML =
      songUL.innerHTML + `<li> ${song.replaceAll('%20', ' ')} </li>`;
  }

  var audio = new Audio(songs[0]);

  audio.addEventListener('loadeddata', () => {
    console.log(audio.duration, audio.currentSrc, audio.currentTime);
  });
}
