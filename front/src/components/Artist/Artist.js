import React from 'react';

function Artist(songsData) {
    console.log('inicio')
    console.log(songsData);
    console.log(Array.isArray(songsData));
    console.log('ok');
    // const arreglo = Array.from(songsData.artistData);
    // console.log(arreglo[1]);
    console.log('final')
    return(
    <ul>
        {/* {songsData.map(artist => {
            console.log(artist);
            return <li key={`name-${artist.name}`}>{artist.name}</li>
        })} */}
    </ul>
    );
}
export default Artist;
