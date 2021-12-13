import axios from 'axios';
import constants from '../lib/constants.js';

const searchByArtist = async (term) => {
    try {
        const response = await axios({
            url: constants.ITUNES_URL,
            method: 'GET',
            params: {
                limit: constants.LIMIT,
                entity: 'musicArtist',
                term,
            }
        });
        const data = response.data;
        if(data.resultCount === 0) return null 
        return DataSearchArtistMaped(data);
    } catch (error) {
        console.log(error);
        throw new Error('Something is wrong with iTunes API');
    }
}

const DataSearchArtistMaped = (data) => {
    const newData = [];
    data.results.map((artist) => {
        newData.push({
            artistName: artist.artistName,
            genre: artist.primaryGenreName,
            artistLink: artist.artistLinkUrl,
        })
    });
    return newData;
}

const searchBySong = async (term) => {
    try {
        const response = await axios({
            url: constants.ITUNES_URL,
            method: 'GET',
            params: {
                limit: constants.LMIT,
                entity: 'song',
                term,
            }
        });
        const data = response.data;
        if(data.resultCount === 0) return null 
        return DataSearchSongMaped(data);
    } catch (error) {
        throw new Error('Something is wrong with iTunes API');
    }
}

const DataSearchSongMaped = (data) => {
    const newData = [];
    data.results.map((song) => {
        newData.push({
            artistName: song.artistName,
            trackName: song.trackName,
            artistLink: song.artistLinkUrl,
            artworkUrl: song.artworkUrl100,
            genre: song.primaryGenreName,
            previewUrl: song.previewUrl,
            releaseDate: song.releaseDate,
            trackViewUrl: song.trackViewUrl,
        });
    });
    return newData;
}

const getResults = async (term) => {
    const artistData = await searchByArtist(term);
    const songsData = await searchBySong(term);
    return {
        artistData,
        songsData,
    }
}

export {
    getResults,
}