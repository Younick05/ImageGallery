import React from 'react';
import{BrowserRouter as Router,  Route} from 'react-router-dom';
import './App.css';
import AddImage from './components/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import ImageGallery from './components/ImageGallery';


function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Route path="/" exact component={ImageGallery}/>
      <Route path="/add" exact component={AddImage}/>
    </Router>
  );
}

export default App;
