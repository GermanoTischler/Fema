import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { AvatarRegistry } from './components/avatar/AvatarRegistry';
import { AvatarList } from './components/avatar/AvatarList';
import { Home } from './components/home/Home'

export default function App() {
  return (
    <>
      <h1>Hello Avatar</h1>

      <ul>
        <li> <Link to={'/'}>Home</Link> </li>
        <li> <Link to={'/avatar'}>Avatar</Link> </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avatar" element={<AvatarList />} />
        <Route path="/avatar/registry" element={<AvatarRegistry />} />
        <Route path="/avatar/registry/:id" element={<AvatarRegistry />} />
      </Routes>
    </>
  );
}
