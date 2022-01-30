import React, {Component} from 'react';
import Firstpage from './Pages/Firstpage'
import Home from './Pages/Home';
import Categories from './components/Categories';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';

export default class App extends Component {
  render() {
    return (
        <Routes>
          <Route path="/" element={ <Firstpage /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/categories"  element={ <Categories /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
    )
  }
}