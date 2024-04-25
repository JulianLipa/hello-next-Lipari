import Image from "next/image";
import styles from "./page.module.css";
import HeaderSection from "./components/header";
import Album from "./components/covers";

export default function Home() {
  const albums = [
    {
      title: "Gulp!",
      img: "",
      year: "1985",
      long: "39:20",
    },
    {
      title: "Oktubre",
      img: "",
      year: "1986",
      long: "41:08",
    },
  ];

  return (
    <main className={styles.main}>
      <h4 style={{marginTop:"10px"}}>*HEADER SECTION</h4>
      <HeaderSection cont1="Home" cont2="About me" cont3="Portfolio" />

      <h4 style={{marginTop:"10px"}}>*COVERS SECTION</h4>
      <div style={{display:"flex", justifyContent:"center"}}>
        <Album title="Gulp!" img="/gulp-cover.jpeg" year="1985" long="39:20" />
        <Album title="Oktubre" img="/oktubre-cover.webp" year="1986" long="41:08" />
        <Album title="¡Bang! ¡Bang!... Estas liquidado" img="/bang-cover.jpeg" year="1989" long="32:49" />
      </div>
    </main>
  );
}
