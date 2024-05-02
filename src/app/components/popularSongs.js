const FetchSingles = () => {
    const famousSongs = [
        {
          title: "Ji Ji Ji",
          img: "/images/album-covers/oktubre-cover.webp",
          duration: "6:13",
          views: "9,000,000"
        },
        {
          title: "Un poco de amor francés",
          img: "/images/album-covers/mosca-cover.jpeg",
          duration: "4:45",
          views: "8,500,000"
        },
        {
          title: "Todo un palo",
          img: "/images/album-covers/baion-cover.jpeg",
          duration: "7:10",
          views: "10,000,000"
        },
        {
          title: "Esa estrella era mi lujo",
          img: "/images/album-covers/bang-cover.jpeg",
          duration: "2:39",
          views: "7,300,000"
        },
        {
          title: "El pibe de los astilleros",
          img: "/images/album-covers/mosca-cover.jpeg",
          duration: "3:53",
          views: "6,200,000"
        }
      ];
      

    return(famousSongs);
};

export default FetchSingles;


/*  let imgsrc;

async function fetchImageData() {
  try {
    const response = await fetch('https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=The+Strokes&api_key=d659cc02b91f8569a8d3a3e95091db43&format=json');
    const data = await response.json();
    const imageUrl = data.topalbums.album[1].image[3]['#text'];
    imgsrc = imageUrl;

    // Ahora que imgsrc tiene la URL de la imagen, puedes utilizarla aquí o llamar a otra función para utilizarla
    console.log(imgsrc);
    return imageUrl;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}

imgsrc = fetchImageData();*/

  