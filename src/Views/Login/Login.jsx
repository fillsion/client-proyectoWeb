import { useNavigate } from "react-router-dom";
import { singIn } from '../../Redux/api';
import './Login.css';

const Login = () => {

    const navigate = useNavigate();

    const doStuff = event => navigate('/', { replace: true });

    const login = async () => {
        const credentials = {
            email: document.getElementById('email').value,
            password: document.getElementById('pass').value
        }
        
        await singIn(credentials)
        .then( (res) => {
            if (res.code === "ERR_BAD_REQUEST"){
                alert("Usuario o Contraseña Invalidos")
            }else{
                doStuff();
            }
        }).catch( (error) => {
            alert("Usuario o Contraseña Invalidos")
            // console.error(error)
        });
    }


    // Plantilla tomada de https://bbbootstrap.com/snippets/bootstrap-glowing-login-form-61831104
    return(
        <div className="loginBox"> 
            <img className="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px"/>
            <h3>Sign in here</h3>
            <div>
                <div className="inputBox"> 
                    <input id="email" type="text" name="Email" placeholder="Email" required/> 
                    <input id="pass" type="password" name="Password" placeholder="Password" required/> 
                </div> 
                <input type="submit" name="" value="Login" onClick={login}/>
            </div> 
            <a href="#">Forget Password </a>
            <div className="text-center">
                <p className='main-color'>Sign-Up</p>
            </div>
        </div>
    )

}

export default Login