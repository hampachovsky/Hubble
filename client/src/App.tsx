import React from 'react';
import './App.less';
import { Route, Routes } from 'react-router-dom';
import { RoutesPath } from 'constants/routes';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { Profile } from 'pages/Profile';
import { Articles } from 'pages/Articles';
import { Article } from 'pages/Article';

function App() {
    return (
        <Routes>
            <Route path={RoutesPath.LOGIN} element={<Login />} />
            <Route path={RoutesPath.REGISTER} element={<Register />} />
            <Route path={RoutesPath.PROFILE} element={<Profile />} />
            <Route path={RoutesPath.ARTICLES} element={<Articles />} />
            <Route path={RoutesPath.ARTICLE} element={<Article />} />
            <Route path='*' element={<div>Page not found</div>} />
        </Routes>
    );
}

export default App;
