import react, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import firebase from "../firebase";
import 'firebase/auth';
import s from "./Auth.module.css";

const Registr = () => {
    const [isModal, setIsModal] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function regUser(e, email, password){
        e.preventDefault();
        try {
            const data = await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( (userCredential) => {
                let user = userCredential.user;
                user.sendEmailVerification().then( () => {
                    setIsModal(true);
                    console.log("emal sent");
                }).catch(function(error) {
                    alert(error)
                });
            })
            
        } catch (error) {
            alert(error.message)
            throw error
        }
    }
    let sendEmail = () => {
        let user = firebase.auth().currentUser;
        if(user) user.sendEmailVerification().then( () => setIsModal(true) )
    }
    return(
        <>
        <div className={s.auth}>

            { 
            isModal && 
            <div className={s.modal}>
                <div className={s.modal__inner}>
                    <button onClick={ () => setIsModal(false)} className={s.close}>X</button>
                    <div className={s.modal__title}>
                        На {email} было отправлено письмо!
                        <br/>
                        Перейдите по ссылке в письме и возвращайтесь :)
                        <br/>
                        *проверьте спам, возможно, оно там
                    </div>
                </div>
            </div>
            }

            <div className={s.title}>Регистрация</div>
            <form onSubmit={(e) => regUser(e, email, password)} className={s.form}>
                <div className={s.inputs}>
                    <div className={s.inputTitle}>e-mail</div>
                    <input type="text" placeholder="Ваш e-mail" value={email} onChange={ (e) => setEmail(e.target.value.trim())} className={s.input}/>
                    <div className={s.inputTitle}>пароль</div>
                    <input type="password" placeholder="Ваш пароль" value={password} onChange={ (e) => setPassword(e.target.value.trim())} className={s.input}/>
                </div>
                <button className={`${s.button} ${s.log}`}>Зарегестрироваться</button>
                <NavLink to="/auth" className={`${s.button} ${s.log}`}>Войти</NavLink>
                <button type="button" className={`${s.button} ${s.reg}`} onClick={ sendEmail }>Письмо не пришло</button>
            </form>
        </div>
        </>
    )
}

export default Registr;