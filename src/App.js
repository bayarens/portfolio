import './App.css';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Resume from './Components/Resume'
import HomePage from './Components/HomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return(
      <div>
          <BrowserRouter>
              <NavBar/>
                  <Switch>
                      <Route exact path='/resume' component={Resume} />
                      <Route exact path='/projects' component={Projects} /> 
                      <Route exact path='/' component={HomePage} /> 
                  </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;
