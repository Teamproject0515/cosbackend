import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import AppRouter from './component/route/RouterComponent';
import Banner from "./Maincomponent/Banner";

function App() {
  return (
    <div className="App">
      <Router>
        <Banner/>
        <AppRouter/>
      </Router>
    </div>
  );
}

export default App;
