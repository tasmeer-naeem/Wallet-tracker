import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Info from './Pages/Info';
import { BrowserRouter , Route  , Switch } from 'react-router-dom';


const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route exact path="/"  component={Home} ></Route>
    <Route exact path="/transaction/:transactionId"  component={Info} ></Route>
    </Switch>
    </BrowserRouter>,
    </div>
  )
}

export default App
