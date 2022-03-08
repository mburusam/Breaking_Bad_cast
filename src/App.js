import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search';

function App() {

  const [items,setItems] =useState([])
  const [isLoading,setIsLoading] =useState(true)
  const [query,setQuery] =useState('')


  useEffect( () =>{
      const fetchItems = async () =>{
        const result =await axios(`https:/www.breakingbadapi.com/api/characters?name=${query}`)
        
      // console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
      }

      fetchItems()
  },[query])

  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
