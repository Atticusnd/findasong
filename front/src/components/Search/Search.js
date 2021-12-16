
import React, {useState, useEffect} from 'react'
import Artist from '../Artist/Artist.js';
import './Search.css';
import Song from '../Songs/Songs.js';

const Search = () => {
    const [songsData, setSongsData] = useState([]);
    const [artistData, setArtistData] = useState([]);
    const [term, setTerm] = useState({});

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };
    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }
    const onFormSubmit = e => {
        e.preventDefault();
        searchAPI();
    }
      
    const searchAPI = async () => {
        try {
            const token = `Bearer ${getToken()}`;
            const response = await fetch('https://mysql-beatport.herokuapp.com/songs/',{
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                },
                  method: "POST",
                body: JSON.stringify({term})
            });
            const json = await response.json();
            const { artistData, songsData } = json;
            setArtistData(artistData);
            setSongsData(songsData);
        } catch (error) {
            console.log(error);
        }
        
    }
    return(
        <>
        <div className='logout'><a href='#' onClick={logout}>Logout</a></div>
        <form className='search-form' onSubmit={onFormSubmit}>
        <h2>Search</h2>
            <label>
                <input type="text" onChange={e => setTerm(e.target.value)}/>
            </label>
            <div>
                <button type="submit" className='button-login' onClick={searchAPI}>Search</button>
            </div>
        </form>
        <div class='artists'>
         {artistData.length > 0 ? <h1>Artists</h1> : <h1>Try to find some music</h1>}
            {artistData.map(artist => {
                return <Artist artistData= {artist} />
            })}
        </div>
        <div class='songs'>
        {artistData.length > 0 ? <h1>Songs</h1> : <h1></h1>}
            {songsData.map(song => {
                return <Song song = {song}/>
            })}
        </div>
        </>

    );
}
export default Search;
