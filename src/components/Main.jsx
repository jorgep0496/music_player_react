import React from 'react';
import { useEffect, useRef, useState } from 'react';
import '../styles/main.scss';

import Buttons from './Buttons.jsx';

const Main = () => {
  const [songs, setSongs] = useState([]);

  const [selectedSong, setSelectedSong] = useState(null);

  const [playing, setPlaying] = useState(false);

  let player = useRef(null);

  useEffect(() => {
    getSongs();
  }, []);

  const selectSong = (index) => {
    const song = songs[index];
    player.src = `https://assets.breatheco.de/apis/sound/${song.url}`;
    setSelectedSong(index);
  }

  const getSongs = () => {
    fetch("https://assets.breatheco.de/apis/sound/songs", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => {setSongs(data)})
      .catch(err => console.log(err))
  }

  const playSong = () => {
    player.play();
    setPlaying(!playing);
  }

  const pauseSong = () => {
    player.pause();
    setPlaying(!playing);
  }

  const forward = () => {
    selectSong(selectedSong + 1);
    playSong();
  }

  const backward = () => {
    selectSong(selectedSong - 1);
    playSong();
  }

  return (
    <>
      <div className="container">
        <div className="row title">
          <div className="col-md-12">
            <h2><b>Music Player</b></h2>
          </div>
        </div>
        <div className="row body">
          <div className="col-md-12">
            <div className="row songs">
              <ol>
                {
                  songs.map((song, index) => {
                    return (
                      <li key={index} onClick={() => selectSong(index)}>{song.name}</li>
                    )
                  })
                }
              </ol>
            </div>
          </div>
        </div>
        <div className="row buttons">
          <div className="col-md-12">
            <Buttons playSong={() => playSong()} pauseSong={() => pauseSong()} forward={() => forward()} backward={() => backward()} playing={playing} />
            <audio ref={(a) => player = a} src="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main;