import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login'
import { Fragment } from 'react';
// import PrivateRoute from './components/routing/PrivateRoute'
import  React ,{ useEffect } from 'react';
import {loadUser} from './actions/auth'
import Weathers from './components/weathers/Weathers'
import Weather from './components/weather/Weather'

const App= ()=> {
 
    useEffect(()=>{
      store.dispatch(loadUser())
    },[])


  return (
    <Provider store={store}>
      <Router>
        <Fragment> 
        <Navbar />
        <Route exact path='/' component = {Login} />
        <Switch>
        <Route exact path='/weathers'component={Weathers} />
      {/*   <Route exact path='/weather/:id' component = {Weather} /> */}
        </Switch>
        </Fragment>
      </Router>
    </Provider>
    
  );
}

export default App;
