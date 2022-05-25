import { useNavigate } from "react-router-dom";
import { singUp } from '../../Redux/api';
import './Register.css';

const Register = () => {

    const navigate = useNavigate();

    const doStuff = event => navigate('/', { replace: true });
    const doLogin = event => navigate('/login', { replace: true});

    const register = async () => {
        const credentials = {
            email: document.getElementById('email').value,
            password: document.getElementById('pass').value
        }
        
        await singUp(credentials)
        .then( (res) => {
            if (res.code === "ERR_BAD_REQUEST"){
                alert("Usuario o Contraseña Invalidos, recuerde que  la contraseña debe ser de minimo 6 caracteres")
            }else{
                global.user = res;
                doStuff();
            }
        }).catch( (error) => {
            alert("Usuario o Contraseña Invalidos, recuerde que  la contraseña debe ser de minimo 6 caracteres")
            // console.error(error)
        });
    }


    // Plantilla tomada de https://bbbootstrap.com/snippets/bootstrap-glowing-login-form-61831104
    return(
        <div className="loginBox"> 
            <img className="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px"/>
            <h3>Sign up here</h3>
            <div>
                <div className="inputBox"> 
                    <input id="email" type="text" name="Email" placeholder="Email" required/> 
                    <input id="pass" type="password" name="Password" placeholder="Password" required/> 
                </div> 
                <input type="submit" name="" value="Register" onClick={register}/>
            </div>
            <div className="text-center">
                <a href="#" onClick={doLogin()} className='main-color text-decoration-none'>Sign-In</a>
            </div>
        </div>
    )

}

export default Register