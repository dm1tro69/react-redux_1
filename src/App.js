import './App.css';
import {Provider} from "react-redux";
import {Profile} from "./components";
import {store} from "./store";

function App() {
  return (
      <Provider store={store}>
    <div className="App">
     <Profile/>
    </div>
      </Provider>
  );
}

export default App;
