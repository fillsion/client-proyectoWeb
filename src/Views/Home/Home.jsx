import { useState, useEffect } from 'react';
import { getComic } from '../../Redux/api';


const Login = () => {
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
  },[comicId])

  // Methods
  async function getSingleComic(){
    let comic = await getComic(comicId);
    setComicForm(comic);
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

    return(
        <div>
            <header className="App-header">
                {comicForm.Title}

                <div className='arrowDiv'>

                <i onClick={getPrevComic} className="arrow left"></i>
                <i onClick={getNextComic} className="arrow right"></i>
                    
                    </div>
                <img src= {comicForm.Img}/>
            </header>
        </div>
    )

}

export default Login