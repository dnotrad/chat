import './App.css';
import react, {useEffect, useState} from "react";
import firebase from "./firebase";

const db = firebase.firestore();

function App() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect( () => {
    const unsubscribe = db.collection("messages").orderBy("message", "asc").onSnapshot(
     function(snapshot) {
       let messages = [];
       snapshot.forEach( doc => {
         messages.push(doc.data().message);
       } )
       setMessages( messages )
    });
    return () => unsubscribe();
  }, [])

  useEffect( () => {
    console.log(messages);
  }, [messages] )

  let addMessage = (message) => {
    db.collection("messages").add({
      message
    })
  }

  return (
    <div className="App">
      <input value={inputValue} type="text" onChange = { (e) => setInputValue(e.target.value)}/>
      <button onClick = { () => addMessage(inputValue)}>ADD mes</button>
      {messages.map( message => <div>{message}</div> )}
    </div>
  );
}

export default App;

