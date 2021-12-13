
import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Search = () => {
    const [songsData, setSongsData] = useState({});
    const [term, setTerm] = useState({});

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };

    const searchAPI = () => {
        console.log('entra');
        const token = `Bearer ${getToken()}`;
        console.log(token);
        axios({
                url: 'http://localhost:3000/songs',
                method: 'GET'
                // headers: {
                //     'Authorization': token,
                //   },
                // method: "POST",
                // body: {term: 'Mac Miller'}
            }).then(res => console.log(res))
            .catch(error => console.log(error));       
        console.log('finalizo');
    }
    return(
        <><h2>Search</h2><form>
            <label>
                <p>Search</p>
                <input type="text" onChange={e => setTerm(e.target.value)}/>
            </label>
            <div>
                <button type="submit" onClick={searchAPI}>Submit</button>
            </div>
        </form>
        {/* <ul>
          {songsData.artistData.map(artist => {
            return <li key={`name-${artist.name}`}>{artist.name}</li>
          })}
        </ul> */}
        </>

    );
}
export default Search;
