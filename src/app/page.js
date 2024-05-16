"use client";

import Image from "next/image";
import styles from "./page-module.css";
import Albums from "./components/covers";
import classNames from "classnames";
import FetchMusic from "./fetch-music.js";
import Single from "./components/single.js";
import FetchSingles from "./components/popularSongs.js";
import FetchData from "./components/fetchData.js";

export default function Home() {
  let headerClasses = classNames("header", "box");
  let playClasses = classNames("buttonPlay", "icon");
  const iconSize = 25;

  const albums = FetchMusic();
  const songs = FetchSingles();

  let musicData = FetchData();
  musicData = musicData.props.children;

  console.log(musicData);
  
  let popularAux = 1;

  return(
    <main className={"main"}>
      <div className={"fixed"}>
        <div className={headerClasses}>
          <div>
            <Image
              src="/images/icons/home.svg"
              width={iconSize}
              height={iconSize}
              alt="home icon"
              className={"icon"}
            />
            <h3>Inicio</h3>
          </div>

          <div>
            <Image
              src="/images/icons/search.svg"
              width={iconSize}
              height={iconSize}
              alt="search icon"
              className={"icon"}
            />
            <h3>Buscar</h3>
          </div>
        </div>

        <div className={headerClasses}>
          <div>
            <Image
              src="/images/icons/library.svg"
              width={iconSize}
              height={iconSize}
              alt="search icon"
              className={"icon"}
            />
            <h3>Tu biblioteca</h3>
          </div>
          <div>
            <a className={"searchBar"}>
              <Image
                src="/images/icons/search.svg"
                width={iconSize}
                height={iconSize}
                alt="search icon"
                className={"icon"}
              />
            </a>
          </div>
        </div>
      </div>

      <div className={"mainScreen"}>
        <div className={"hero"}>
          <div>
            <div className={"one-liner"}>
              <Image
                src="/images/icons/verified.svg"
                width={iconSize}
                height={iconSize}
                alt="verified icon"
                className={"icon"}
              />
              <p>Artista verificado</p>
            </div>
            <h1>Patricio Rey y sus Redonditos de Ricota</h1>
            <p>2,042,541 oyentes mensuales</p>
          </div>
        </div>

        <div className={"songs-section"}>
          <div className={"play-section"}>
            <Image
              src="/images/icons/play.svg"
              width={iconSize * 2}
              height={iconSize * 2}
              alt="play icon"
              className={playClasses}
            />
            <Image
              src="/images/icons/shuffle.svg"
              width={iconSize}
              height={iconSize}
              alt="shuffle icon"
              className={playClasses}
            />
            <h2>Seguir</h2>
            <Image
              src="/images/icons/more.svg"
              width={iconSize * 1.2}
              height={iconSize * 1.2}
              alt="more icon"
              className={playClasses}
            />
          </div>

          <div className={"popular-section"}>
            <h2>Popular</h2>
            {songs.map((song, index) => (
              <Single
                key={index}
                num={popularAux++}
                title={song.title}
                img={song.img}
                long={song.duration}
                views={song.views}
              />
            ))}
          </div>

          <div className={"popular-section"}>
            <h2>Discografía</h2>
            <div className={"albums-section"}>
              {albums.map((album, index) => (
                <Albums
                  key={index}
                  title={album.title}
                  img={album.img}
                  year={album.year}
                  long={album.long}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );

  /*
    <div className={"popular-section"}>
      <h2>Discografía</h2>
      <div className={"albums-section"}>
        {musicData.map((album, index) => (
          <Albums
            key={index}
            title={album.name}
            img={album.image[3]['#text']}
          />
        ))}
      </div>
    </div>
  */
}
