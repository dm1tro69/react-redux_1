import './App.css';
import {Provider} from "react-redux";
import {Profile} from "./components";
import {store} from "./store";
import LoginForm from "./components/LoginForm/LoginForm";
import Routing from "./routing/Routing";

function App() {
  return (
      <Provider store={store}>
    <div className="App">
     <Routing/>
    </div>
      </Provider>
  );
}

export default App;
