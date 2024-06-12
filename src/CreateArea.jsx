import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
  });

  const [currentAudio, setCurrentAudio] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handlePlay(audioRef) {
    if (currentAudio && currentAudio !== audioRef) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    setCurrentAudio(audioRef);
}
  return (
    <div>
      <form id="songcontainer">
        <h2>안녕하세요! Let's have fun and sing!</h2>
        <h3>What's on your mind?</h3>
        <input
          name="targetpushup"
          onChange={handleChange}
          value={note.targetpushup}
          placeholder="Search norae"
        />
        <select>
        <option value="">--Please choose an option--</option>
        <option value="option1">APINK</option>
        <option value="option2">IU</option>
        <option value="option3">GFRIEND</option>
        </select>
        <h3>Song lists:</h3>
        <div className="songlist">
      
          <audio 
          id="song1" 
          controls
          onPlay={() => handlePlay(document.getElementById('song1'))} >
            <source src="/audio/navillera.mp3" type="audio/mpeg"/>
          </audio>
        
          <div className="desc">
            <h3>Artist : GFRIEND</h3>
            <h3>Title  : NAVILLERA</h3>
          </div>
        </div>
        <div className="songlist">
      
          <audio  
           id="song2" 
           controls
           onPlay={() => handlePlay(document.getElementById('song2'))} >
            <source src="/audio/lovewhisper.mp3" type="audio/mpeg"/>
          </audio>
        
          <div className="desc">
            <h3>Artist : GFRIEND</h3>
            <h3>Title  : Love Whisper</h3>
          </div>
        </div>
        </form>
        <form id="artistcontainer">
        <h2>Search your favourite artist!</h2>
        <h3>Artist</h3>
        <input
          name="targetpushup"
          onChange={handleChange}
          value={note.targetpushup}
          placeholder="Search artist"
        />
        <h3>Artists:</h3>
        <div>
          <div className="artistlist">
            <img src="/image/gfriend.webp" id="gfriend"></img>
            <h1 className="artisttitle">GFRIEND</h1>
          </div>
          <div className="artistlist">
            <img src="/image/apink.jpeg" id="gfriend"></img>
            <h1 className="artisttitle">APINK</h1>
          </div>
          <div className="artistlist">
            <img src="/image/IU.jpeg" id="gfriend"></img>
            <h1 className="artisttitle">IU</h1>
          </div>
        </div>
        </form>
    
    </div>
    
  );}


export default CreateArea;