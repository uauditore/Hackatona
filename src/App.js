import React, {Component} from 'react';
import Firstpage from './Pages/Firstpage'
import Home from './Pages/Home';
import Categories from './components/Categories';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Especialistas from './Pages/Especialistas';
import Marcacao from './components/MarcacaoConsulta';
import Confirmacao from './components/Confirmacao';
import Forum from './Pages/Forum';
import Perfil from './Pages/Perfil';
import PostFeito from './Pages/PublicacaoFeita';

export default class App extends Component {
  render() {
    return (
        <Routes>
          <Route path="/" element={ <Firstpage /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/categories"  element={ <Categories /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/especialistas" element={ <Especialistas /> } />
          <Route path="/marcacao-consulta" element={ <Marcacao /> } />
          <Route path="/confirmacao-consulta" element={ <Confirmacao /> } />
          <Route path="/forum" element={ <Forum /> }/>
          <Route path="/perfil" element={ <Perfil /> }/>
          <Route path="/post-feito" element={ <PostFeito />} />
        </Routes>
    )
  }
}