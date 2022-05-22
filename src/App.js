import './App.css';
import { getComic } from './api.js';
import React, { useEffect, useState } from "react";




function App() {
  // State
  const emptyComicForm = {
    ComicID:0,
    Year:"",
    Day:"",
    Month:"",
    Safe_title:"",
    Alt:"",
    Transcript:"",
    Img:"",
    Title:""
  };

  const [comicForm, setComicForm] = useState(emptyComicForm);
  const [comicId, setID] = useState(1);

  // On Page Load and on comidId update

    useEffect(()=>{
      getSingleComic();
      console.log(comicForm)
  },[comicId])

  // Methods
  async function getSingleComic(){
    let comic = await getComic(comicId);
    setComicForm(comic.data.res[0]);
    
    
  }

  function getNextComic(){
    if (comicId< 2621){
      setID(comicId+1);
    }
    
  }

  function getPrevComic(){
    if (comicId> 1){
      setID(comicId -1);
    }
    
  }
  
  //on update



  return (
    <div>
      
    
    <div className="App">
    
      <header className="App-header">
 
      
        {comicForm.Title}

      <div className='arrowDiv'>

       <i onClick={getPrevComic} class="arrow left"></i>
       <i onClick={getNextComic} class="arrow right"></i>
        
        </div>
       <img src= {comicForm.Img}/>
       
      </header>
    </div>
    
    </div>
  );
}

export default App;
