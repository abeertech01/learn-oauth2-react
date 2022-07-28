import { BrowserRouter, Route, Switch } from "react-router-dom"
import Homepage from "./Components/Homepage/Homepage"
import Loginpage from "./Components/Loginpage/Loginpage"
import NavBar from "./Components/NavBar/NavBar"

import "./GlobalStyles.css"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" component={Loginpage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
