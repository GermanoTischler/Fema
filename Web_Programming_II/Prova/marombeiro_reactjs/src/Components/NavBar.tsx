import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Treinos } from './Treinos';
import { Cadastrar } from './Cadastrar';
import '../Styles/NavBar.css';

export function NavBar() {
    return (
        <BrowserRouter>

            <nav>
                
                <Link to={'/'}><img src={require('../Img/dumbbells.png')} /></Link>
                <Link to={'/'}>Home</Link>
                <Link to={'/treinos'}>Treinos</Link>
                <Link to={'/cadastrar'}><div id='cad_btn'>Cadastrar Exercício</div></Link>
                
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/treinos" element={<Treinos />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
            </Routes>

        </BrowserRouter>
    );
}