import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAvxQW4me3Jg31Ws-yMU4vALEO00LV_3u8'

const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));