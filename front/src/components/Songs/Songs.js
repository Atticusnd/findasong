
function Song({song}) {
    console.log(song)
        return(
            <div className='song'>
                <a href={song.trackViewUrl}  target="_blank">
                    <div> 
                    <img src={song.artworkUrl} width="20px"/>
                        <span className='artistName'> <b>{song.trackName}</b> </span> 
                        <span className='genre'>{song.artistName}</span> 
                    </div>
                </a>
            </div>
        );
}

export default Song;