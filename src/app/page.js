import Image from "next/image";
import styles from "./page.module.css";
import Album from "./components/covers";
import classNames from 'classnames';
import FetchMusic from './fetch-music.js'

export default function Home() {
  let headerClasses = classNames('header', 'box');
  const iconSize = 25;

  const albums = FetchMusic();


  return (
    <main className={"main"}>
      <div className={"fixed"}>
        <div className={headerClasses}>
          <div>
            <Image src="/images/icons/home.svg" width={iconSize} height={iconSize} alt="home icon" className={'icon'}/>
            <h3>Inicio</h3>
          </div>

          <div>
            <Image src="/images/icons/search.svg" width={iconSize} height={iconSize} alt="search icon" className={'icon'}/>
            <h3>Buscar</h3>
          </div>
        </div>

        <div className={headerClasses}>
          <div>
            <Image src="/images/icons/library.svg" width={iconSize} height={iconSize} alt="search icon" className={'icon'}/>
            <h3>Tu biblioteca</h3>
          </div>
          <div>
            <Image src="/images/icons/search.svg" width={iconSize} height={iconSize} alt="search icon" className={'icon'}/>
          </div>
        </div>
      </div>

      <div className={'mainScreen'}>
        <div className={'hero'}>
          <div>
            <div className={'one-liner'}>
            <Image src="/images/icons/verified.svg" width={iconSize} height={iconSize} alt="verified icon" className={'icon'}/>
            <p>Artista verificado</p>
            </div>
            <h2>Patricio Rey y sus Redonditos de Ricota</h2>
            <p>2,042,541 oyentes mensuales</p>
          </div>
        </div>
        <div className={'albums-section'}>
          {albums.map((album, index) => (
            <Album key={index} title={album.title} img={album.img} year={album.year} long={album.long}/>
          ))}
        </div>
      </div>
    </main>
  );
}
