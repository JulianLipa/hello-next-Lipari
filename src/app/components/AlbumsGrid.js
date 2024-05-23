'use client'

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Albums from "./Album";

const AlbumsGrid = () => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true);
      const handleFetchData = async () => {
        try {
          const response = await axios.get(
            "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Patricio+Rey&api_key=d659cc02b91f8569a8d3a3e95091db43&format=json"
          );
          const data = response.data.topalbums.album;
          setAlbums(data);
          setLoading(false);
        } catch (error) {
          console.log("error", error);
        }
      };
  
      handleFetchData();
    }, []);
  
    return(
      <div className={"albums-section"}>
        {loading && <p>Fetching data</p>}
        {!loading &&
          albums.map((album, index) => (
          <Albums
            key={index}
            title={album.name}
            img={album.image[3]['#text']}
          />
        ))}
      </div>
    );
  };
  
  export default AlbumsGrid;