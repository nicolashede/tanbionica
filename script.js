const audioPlayer = document.getElementById("audio-player");
const options = document.querySelectorAll(".option");

const songs = [ "Arruinarse.mp3", "Beautiful.mp3",
 "Bye Bye.mp3", "Chica Biónica.mp3", "Ciudad Mágica.mp3",
 "Dominguicidio.mp3","El Color del Ayer.mp3","El Duelo.mp3"
 ,"El Huracán.mp3","Ella.mp3","Frágil.mp3"
 ,"La Comunidad.mp3","La Depresión.mp3","La Ensalada.mp3"
 ,"La Suerte Esta Echada.mp3","Loca.mp3","Lunita de Tucumán.mp3"
 ,"Mis madrugaditas.mp3","Nací en Primavera.mp3","Obsesionario en la mayor.mp3"
 ,"Pastillitas del Olvido.mp3","Perdida.mp3","Petalos.mp3"
 ,"Queso Ruso.mp3","Razón Perdida.mp3","Tapa de Moda.mp3"
 ,"Teléfonos.mp3","Veneno.mp3","Vidas Perfectas.mp3"
 ,"Vinidy Swing.mp3","Wonderful Noches.mp3","Yo Te Espero.mp3","La Melodía de Dios.mp3"
 ,"Mis Noches de Enero.mp3","Tus Ojos Mil.mp3","Música.mp3","Hola Noviembre.mp3","Vamonós.mp3","Mi Vida Secreta.mp3"
 ,"Momentos de Mi Vida.mp3","El Asunto.mp3","Poema de los Cielos.mp3","Tus Horas Mágicas.mp3","Las Cosas Que Pasan.mp3","La Manera Que Eligio Para Matarme.mp3"
 ,"Un Poco Perdido.mp3","700 Toneladas.mp3","Hola Mi Vida.mp3","A.M.E.R.I.C.A.mp3","Víctimas.mp3","La Otra Manera.mp3"
 ,"No Me Atreví A Sugerirte Que Te Mueras.mp3"
  ];

let currentSongIndex = 0;

function getRandomIndexes(max, count) {
  const indexes = [];
  while (indexes.length < count) {
    const randomIndex = Math.floor(Math.random() * max);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function playRandomSong() {
  currentSongIndex = Math.floor(Math.random() * songs.length);
  audioPlayer.src = songs[currentSongIndex];
  audioPlayer.play();

  const randomIndexes = getRandomIndexes(songs.length, 4);
  randomIndexes.forEach((index, i) => {
    options[i].textContent = songs[index].replace(".mp3", "").replace(/_/g, " ");
    options[i].setAttribute("data-song-index", index);
  });

  const correctOptionIndex = Math.floor(Math.random() * 4);
  options[correctOptionIndex].textContent = songs[currentSongIndex].replace(".mp3", "").replace(/_/g, " ");
  options[correctOptionIndex].setAttribute("data-song-index", currentSongIndex);

  shuffleArray(options);
}

function checkAnswer(selectedOption) {
  const selectedSongIndex = parseInt(selectedOption.getAttribute("data-song-index"));
  
  if (selectedSongIndex === currentSongIndex) {
    alert("Correcto! 🎉");
  } else {
    alert("Incorrecto! 🙁");
  }
  
  playRandomSong();
}

playRandomSong();
