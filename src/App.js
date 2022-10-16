import './index.css';
import NavBar from './Layout/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import AllVenues from './AllVenues';
import SelectedVenue from './SelectedVenue';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <div className="content">
        <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/about" element={<About/>}>
        </Route>
        <Route path="/venues/:id" element={<SelectedVenue />}>
        </Route>
        <Route path="/venues" element={<AllVenues />}>
        </Route>
        
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
