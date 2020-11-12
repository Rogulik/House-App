import './styles/App.scss';
import './styles/typography.scss'
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import HousesList from './components/HousesList';
import SingleHouse from './components/SingleHouse';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route exact path="/" component={Main}/>
          <Switch>
            <Route exact path="/houses-list" component={HousesList} />
            <Route exact path="/single-house/:houseId" component={SingleHouse} />
          </Switch>
        </Router>
      </div>
    </Provider>
    
  );
}

export default App;
