import React from 'react';
import CatsList from './Cat/CatsList';


function App() {
  const cats = [
    {
      id: 1, 
      name: 'Max', 
      likes: ['milk', 'fish', 'walk' ], 
      photoUrl: 'https://bit.ly/37gsein'
    },

    {
      id: 2, 
      name: 'Tom', 
      likes: ['milk', 'fish' ], 
      photoUrl: 'https://bit.ly/37gsein'
    }
  ]

  return (
    <div className='wrapper'>
      <h1>Cat</h1>
      <CatsList cats={cats}/>
    </div>
  );
}

export default App;