// import logo from '../logo.svg';
import '../style/App.css'
import 'semantic-ui-css/semantic.min.css'
import Navbar from './Navbar';
import Signup from './Signup';
import Home from './Home';
import Login from './Login'
import { Route, Switch, withRouter } from 'react-router-dom'
import Component404 from './404Component';
import { currentUser } from '../actions/authAction';
import NoteForm  from '../components/NoteForm'
import { connect } from 'react-redux'

function App() {
  return (
    <div>
      <Navbar title="Notable Notes"  />
    <Switch>
      <Route component= { Signup } exact path='/signup' />
      <Route component={ Login } exact path='/login' />
      <Route component= { Home } exact path='/' />
      <Route component= { NoteForm } exact path='/notes/new' />
      <Route component={ Component404 } path='*' />
    </Switch>

    </div>
  );
}

export default  connect(null, { currentUser})(withRouter(App));
