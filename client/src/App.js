import {BrowserRouter, Route} from "react-router-dom"
import Homepage from './Components/Homepage/Homepage';
import Loginpage from './Components/Loginpage/Loginpage';

function App() {
  return (
    <BrowserRouter>
    <Route path="/" exact component={Homepage} />
    <Route path="/login" exact component={Loginpage} />
    </BrowserRouter>
  );
}

export default App;
