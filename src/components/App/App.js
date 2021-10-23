import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Component} from 'react'
import { connect } from 'react-redux';
import Login from '../Login/Login'
import { handleInitialData } from '../../store/actions/shared';
import { setAuthUser } from '../../store/actions/authedUsers'
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import PollView from '../PollView/PollView';

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render(){
    const {authUser} = this.props
    return (
      <Router>
        <div className="App container">
          {authUser === null?(
            <Route
              render={() => (
                  <Login />
              )}
            />
          ):(
            <div>
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/questions/bad_id" component={NoMatch} /> */}
              <Route path="/questions/:question_id" component={PollView} />
              {/* <Route path="/add" component={NewPoll} /> */}
              {/* <Route path="/leaderboard" component={Leaderboard} /> */}
              {/* <Route component={NoMatch} /> */}
            </Switch>
            </div>
           
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  };
}

export default connect(
  mapStateToProps,
  { handleInitialData, setAuthUser }
)(App);
