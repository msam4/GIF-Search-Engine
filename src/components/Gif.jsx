import React from 'react';

function Gif({ id, setSelectedId }) {
  const url = `https://media.giphy.com/media/${id}/giphy.gif`;

  function handleClick() {
    console.log("click!");
    setSelectedId(id);
  }

  return (
    <img className="gif" src={url} alt="" onClick={handleClick} />
  );
};

export default Gif;
