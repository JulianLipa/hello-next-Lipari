const FetchMusic = () => {
    const albums = [
        {
            title: "Momo sampler",
            img: "/images/album-covers/momosampler-cover.png",
            year: "2000",
            long: "48:42"
        },
        {
            title: "Ultimo bondi a Finisterre",
            img: "/images/album-covers/finisterre2-cover.jpeg",
            year: "1998",
            long: "44:23"
        },
        {
            title: "Luzbelito",
            img: "/images/album-covers/luzbelito-cover.jpeg",
            year: "1996",
            long: "56:27"
        },
        {
            title: "Lobo suelto",
            img: "/images/album-covers/lobosuelto-cover.jpg",
            year: "1993",
            long: "40:44"
        },
        {
            title: "Cordero atado",
            img: "/images/album-covers/cordero-cover.jpg",
            year: "1993",
            long: "40:45"
        },
        {
            title: "La mosca y la sopa",
            img: "/images/album-covers/mosca-cover.jpeg",
            year: "1991",
            long: "38:48"
        },
        {
            title: "¡Bang! ¡Bang!... Estás liquidado",
            img: "/images/album-covers/bang-cover.jpeg",
            year: "1989",
            long: "32:49"
        },
        {
            title: "Un baión para el ojo idiota",
            img: "/images/album-covers/baion-cover.jpeg",
            year: "1988",
            long: "32:49"
        },
        {
            title: "Oktubre",
            img: "/images/album-covers/oktubre-cover.webp",
            year: "1986",
            long: "41:08"
        },
        {
            title: "Gulp!",
            img: "/images/album-covers/gulp-cover.jpeg",
            year: "1985",
            long: "39:20"
        }
    ];
    return(albums);
};

export default FetchMusic;


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