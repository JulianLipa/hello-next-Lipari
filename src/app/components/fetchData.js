'use client'

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const FetchData = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const handleFetchData = async () => {
            try {
                const response = await axios.get('https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Patricio+Rey&api_key=d659cc02b91f8569a8d3a3e95091db43&format=json');
                setData(response.data.topalbums.album);
            } catch(error) {
                console.log(error);
            }
        };

        handleFetchData();
    }, []);

    return (
        <div>
            {/* Renderizado condicional para mostrar un mensaje de carga */}
            {data === null ? (
                <p>Cargando...</p>
            ) : (
                data
            )}
        </div>
    );
};

export default FetchData;
