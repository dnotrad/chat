import Chat from "./components/Chat";
import Auth from "./components/Auth";
import Registr from "./components/Registr";
import { Switch, Route, Redirect } from "react-router-dom";
import firebase from "./firebase";
import "firebase/auth";

const App = (props) => {
  return (
    <div className="App">
      <Route path="/auth" component={Auth}/>
      <Route path="/registr" component={Registr}/>
      <Route path="/" component={Chat}/>
    </div> 
  );
}
export default App;

