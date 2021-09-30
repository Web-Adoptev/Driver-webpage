import logo from './logo.svg';
import './App.css';
// import Login from './Login';
// import Pickup from './Pickup';
import PickMap from './PickMap';
import DropMap from './DropMap';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route exact path='/'>
      {/* <Login />  */}
      <PickMap />
      </Route>
      <Route exact path='/Pickup'>
      {/* <Pickup /> */}
      </Route>
      <Route exact path='/PickMap'>
       {/* <PickMap /> */}
      </Route>
      <Route exact path='/DropMap'>
        {/* <DropMap /> */}
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
