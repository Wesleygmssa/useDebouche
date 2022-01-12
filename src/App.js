/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { Searchinput } from './Searchinput'
const api = 'https://kitsu.io/api/edge/';
function App() {
  const [info, setInfo] = React.useState({});
  const [text, setText] = React.useState('');

  // console.log(info);
  // console.log(text);

  useEffect(() => {
    if (text)
      console.log(text);
    fetch(api + 'anime?filter[text]=' + text)
      .then(res => res.json())
      .then(data => {
        setInfo(data.data[0]);
      });
  }, [text]);

  return (
    <>
      <div><Searchinput value={text} onChange={(search) => setText(search)} /></div>

      {
        info?.attributes ? (
          <div>
            <h1>{info.attributes.titles.en_jp}</h1>
            <img src={info.attributes.posterImage.small} />
            <p>{info.attributes.synopsis}</p>
          </div>
        ) : (
          <div>
            <h1>No results</h1>
          </div>
        )
      }
    </>
  );
}

export default App;
