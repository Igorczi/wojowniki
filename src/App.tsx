import React, { useState, useEffect } from 'react';
import MainPage from './MainPage/MainPage';

interface Warriors {
  warriors: WarriorField[]
}

interface WarriorField {
  name: string;
  description: string;
  skill: string;
  number: number;
}

function App() {

  const [warriors, setWarriors] = useState([]);
  const [warriorsWithPhotos, setPhotos] = useState([]);


  useEffect( () => {
    fetch('https://run.mocky.io/v3/9010e42c-fa5a-483e-b83f-d7e570a92740').then( reponse => reponse.json()).then(reponse => setWarriors(reponse.wojowniki))
  }, []) 

  useEffect( () => 
    if (warriors == []) return;
    const newWarriors = warriors.map( async ( warrior )  =>  {
      const url = await fetch('http://source.unsplash.com/random/600x400?jedi');
      console.log(url)
    })
  },[warriors])

  return (
    <div>
      <MainPage warriors={warriors} />
    </div>
  );
}

export default App;
