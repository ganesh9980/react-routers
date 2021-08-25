import React from 'react'
import Shop from './shop';
import About from './about'
import Nav from './nav'
import Itemdetail from './itemdetail';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/About" exact component={About}/>
          <Route path="/Shop"  exact component={Shop}/>
          <Route path="/Shop/:id" component={Itemdetail}/>
        </Switch>
        
      </Router>
      
    </div>
  )
}
const Home =()=>{
  return(
    <div>
    <h1>Home Page</h1>
  </div>
  )
}

export default App
