import Image from "next/image";
import styles from "./page.module.css";
import HeaderSection from "./components/header";
import Album from "./components/covers";



export default function Home() {
  const albums = [
    {
      title: "Gulp!",
      img: "/images/gulp-cover.jpeg",
      year: "1985",
      long: "39:20"
    },
    {
      title: "Oktubre",
      img: "/images/oktubre-cover.webp",
      year: "1986",
      long: "41:08"
    },
    {
      title: "Un baión para el ojo idiota",
      img: "/images/baion-cover.jpeg",
      year: "1988",
      long: "32:49"
    },
    {
      title: "¡Bang! ¡Bang!... Estás liquidado",
      img: "/images/bang-cover.jpeg",
      year: "1989",
      long: "32:49"
    },
    {
      title: "La mosca y la sopa",
      img: "/images/mosca-cover.jpeg",
      year: "1991",
      long: "38:48"
    },
    {
      title: "Cordero atado",
      img: "/images/cordero-cover.jpg",
      year: "1993",
      long: "40:45"
    },
    {
      title: "Lobo suelto",
      img: "/images/lobosuelto-cover.jpg",
      year: "1993",
      long: "40:44"
    },
    {
      title: "Luzbelito",
      img: "/images/luzbelito-cover.jpeg",
      year: "1996",
      long: "56:27"
    },
    {
      title: "Ultimo bondi a Finisterre",
      img: "/images/finisterre2-cover.jpeg",
      year: "1998",
      long: "44:23"
    },
    {
      title: "Momo sampler",
      img: "/images/momosampler-cover.png",
      year: "2000",
      long: "48:42"
    }
  ];

  fetch('https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=The+Strokes&api_key=d659cc02b91f8569a8d3a3e95091db43&format=json')
  .then(res => res.json())
  .then(data => {
    data = data.topalbums.album;
    data.map((album, index) => {
      if(index < 5){
        console.log(data[index].name);
      }
    })
  })

  return (
    <main className={styles.main}>
      <h4 style={{marginTop:"10px"}}>*HEADER SECTION</h4>
      <HeaderSection cont1="Home" cont2="About me" cont3="Portfolio" />

      <h4 style={{marginTop:"10px"}}>*COVERS SECTION oaoaoao</h4>
      <div style={{display:"flex", flexWrap:"wrap", width:"1000px", justifyContent:"center"}}>

        {albums.map((album, index) => (
          <Album key={index} title={album.title} img={album.img} year={album.year} long={album.long}/>
        ))}
      </div>
    </main>
  );
}
