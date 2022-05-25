import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getComic } from '../../Redux/api';
import './Home.css';


const Login = () => {
  // Proppet
  const navigate = useNavigate();

  const doLogin = event => navigate('/login', { replace: true });
  const doRegister = event => navigate('/register', { replace: true });

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
  const [comicId, setID] = useState(Math.round(Math.random()*2621) + 1);

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
            <div className='position-relative'>
            {global.user != null ? 
              (
                <div className="d-flex position-absolute buttons-autenticate mt-3">
                  <span className='text-white fs-3'>Welcome to the Jungle</span>
                </div>) :
              (<div className="d-flex position-absolute buttons-autenticate mt-3">
                <button type='button' className='btn btn-outline-light me-2' onClick={doRegister}>Register</button>
                <button type='button' className='btn btn-outline-light' onClick={doLogin}>Login</button>
              </div>)
            }
            </div>

            <section className="App-header">
                {comicForm.Title}

                <div className='arrowDiv'>
                  <i onClick={getPrevComic} className="arrow left"></i>
                  <i onClick={getNextComic} className="arrow right"></i>
                </div>

                <img src= {comicForm.Img}/>
            </section>
        </div>
    )

}

export default Login