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

 useEffect(() => {
    
    (async function getWojownikiData () {
      const response = await fetch('https://run.mocky.io/v3/9010e42c-fa5a-483e-b83f-d7e570a92740');
      const json = await response.json();
      const wojowniki = await json.wojowniki;

      const getData = async() => {

      return Promise.all(wojowniki.map( async ( warrior: any) => {
        const url = await fetch('http://source.unsplash.com/random/600x400?jedi');
        console.log(url)
        return  Object.assign({}, warrior , {url: url.url})
      }));

      }
     getData().then(( data: any ) => {
       setWarriors(data)
     }) 

    })();

  }, []);

  return (
    <div>
      <MainPage warriors={warriors} />
    </div>
  );
}

export default App;
