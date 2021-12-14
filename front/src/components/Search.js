
import React, {useState, useEffect} from 'react'
import Artist from './Artist/Artist.js';

const Search = () => {
    const [songsData, setSongsData] = useState([]);
    const [term, setTerm] = useState({});

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };

    const searchAPI = async () => {
        console.log('entra');
        try {
            const token = `Bearer ${getToken()}`;
            const response = await fetch('http://localhost:3000/songs/',{
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                },
                  method: "POST",
                body: JSON.stringify({term: term | ''})
            });
            const json = await response.json();
            console.log('---------------------');
            console.log('json');
            console.log(json);
            const { artistData } = json;
            console.log('artistData');
            console.log(artistData);
            console.log(Array.isArray(artistData));
            console.log('---------------------');
            setSongsData(...artistData);
        } catch (error) {
            console.log(error);
        }
        
    }
    return(
        <><h2>Search</h2><form>
            <label>
                <p>Search</p>
                <input type="text" onChange={e => setTerm(e.target.value)}/>
            </label>
            <div>
                <button type="button" onClick={searchAPI}>Submit</button>
            </div>
        </form>
        {songsData.map(artist => {
            console.log(artist);
            return <li key={`name-${artist.name}`}>{artist.name}</li>
        })}
{/*         
        { songsData
            ? console.log(Array.isArray(songsData))
            : ''
        } */}
        </>

    );
}
export default Search;
