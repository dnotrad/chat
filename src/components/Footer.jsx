import react, {useState, useEffect} from "react";
import s from "./Footer.module.css";
import mailImg from "../assets/img/mail.svg";
import {db} from "./Messages";

const Footer = (props) => {
    const [inputValue, setInputValue] = useState("");
    let submitForm = (e, message) => {
        e.preventDefault();
        if(message) {
            db.collection("messages").add({
                userEmail: props.userEmail,
                message,
                userId: props.uid,
                date: new Date(),
            })
            setInputValue("");
        }
    }
    return(
        <div className={s.footer}>
            <form onSubmit={ (e) => submitForm(e, inputValue)} className={s.form}>
                <input value={inputValue} onChange={ (e) => setInputValue(e.target.value) } className={s.input} type="text"/>
                <button className={s.button}>
                    <img src={mailImg} alt=""/>
                </button>
            </form>
        </div>
    )
}
export default Footer;