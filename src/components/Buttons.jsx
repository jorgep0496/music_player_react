import React from 'react';
import '../styles/Buttons.scss';

const Buttons = ({ playSong, pauseSong, forward, backward, playing }) => {
    return (
        <>
        <button className="btn btn-light rounded-circle"><i className="fas fa-step-backward" onClick={backward}></i></button>
        <button className={"btn btn-light rounded-circle" + (playing === false ? " d-none" : " d-inherit")} onClick={pauseSong}><i className="fas fa-pause"></i></button>
        <button className={"btn btn-light rounded-circle" + (playing === true ? " d-none" : " d-inherit")} onClick={playSong}><i className="fas fa-play"></i></button>
        <button className="btn btn-light rounded-circle"><i className="fas fa-step-forward" onClick={forward}></i></button>
        </>
    );
};

export default Buttons;