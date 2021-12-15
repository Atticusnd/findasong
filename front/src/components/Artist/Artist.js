import React from 'react';
import './Artist.css';

function Artist({artistData}) {
    return(
        <div className='artist'>
            <a href={artistData.artistLink}  target="_blank">
                <div className='wrapper-artist glow-on-hover'> 
                    <span className='artistName'> <b>{artistData.artistName}</b> </span> 
                    <span className='genre'>{artistData.genre}</span> 
                </div>
            </a>
        </div>
    );
}
export default Artist;
