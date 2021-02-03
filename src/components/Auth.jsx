import react, {useState} from "react";
import { NavLink, Redirect } from "react-router-dom";
import firebase from "../firebase";
import 'firebase/auth';
import s from "./Auth.module.css";
const Auth = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRedirect, setIsRedirect] = useState(false);
    let logUser = (e, email, password) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email.trim(), password.trim()).then((userCredential) => {
            let user = userCredential.user;
            if(user && user.emailVerified){
                setIsRedirect(true)
            }else{
                alert("Неверные данные или почта не подтверждена!")
            }
          })
          .catch((error) => {
            alert("Неверные данные или почта не подтверждена!")
          });
    }
    if(isRedirect) return <Redirect to="/"/>
    return(
        <div className={s.auth}>
            <div className={s.title}>Войти в чат</div>
            <form onSubmit={(e) => logUser(e, email, password)} className={s.form}>
                <div className={s.inputs}>
                    <div className={s.inputTitle}>e-mail</div>
                    <input type="text" placeholder="Ваш e-mail" value={email} onChange={ (e) => setEmail(e.target.value)} className={s.input}/>
                    <div className={s.inputTitle}>пароль</div>
                    <input type="password" placeholder="Ваш пароль" value={password} onChange={ (e) => setPassword(e.target.value)} className={s.input}/>
                </div>
                <button className={`${s.button} ${s.log}`}>Войти</button>
                <NavLink to="registr" className={`${s.button} ${s.reg}`} >Регистрация</NavLink>
            </form>
        </div>
    )
}
export default Auth;