import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <Router>
      <Navbar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login'>Login</Route>
            <Route path='/signup'>Sign up</Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
