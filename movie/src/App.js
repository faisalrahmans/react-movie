import React from 'react';
import './App.css';
import Movies from './Component/Movies/Movies'

// const BASE_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=ecd2dc88'
// const api_key = 'faf7e5bb'

// const api = axios.create({ baseURL: BASE_URL });

function App() {
  return (
    <div className="App">
      <Movies />
    </div>
  );
}

export default App;
