import React from 'react';
import './characters.css';

function Characters({ chars }) {
  console.log(chars);

  return (
    <div className="karakter">
      {chars.length > 0
        ? chars.map((karakter) => (
            <div className="karakter-item">
              <img className="gambar" src={karakter.character_picture} />
              <h4 className="nama">{karakter.character_name}</h4>
            </div>
          ))
        : 'Character not found'}
    </div>
  );
}

export default Characters;
