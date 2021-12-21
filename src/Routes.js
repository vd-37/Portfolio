import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './Core/Home'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path='/twitter' component={() => {
                    window.location.href = 'https://twitter.com/VINNGINEER';
                    return null;
                }} />
                <Route path='/github' component={() => {
                    window.location.href = 'https://github.com/vd-37';
                    return null;
                }} />
                <Route path='/instagram' component={() => {
                    window.location.href = 'https://www.instagram.com/vinayakadayanand/';
                    return null;
                }} />
                <Route path='/linkedin' component={() => {
                    window.location.href = 'https://www.linkedin.com/in/vinayaka-d-44442b178/';
                    return null;
                }} />
                <Route path='/project/Tshirt/website' component={() => {
                    window.location.href = 'https://thetshirtstore.netlify.app/';
                    return null;
                }} />
                <Route path='/project/Tshirt/github' component={() => {
                    window.location.href = 'https://github.com/vd-37/tshirt-react-frontend';
                    return null;
                }} />
                <Route path='/project/Todo/website' component={() => {
                    window.location.href = 'https://shielded-basin-33925.herokuapp.com/';
                    return null;
                }} />
                <Route path='/project/Todo/github' component={() => {
                    window.location.href = 'https://github.com/vd-37/TODOLIST';
                    return null;
                }} />
                <Route path='/project/Loopstudios/website' component={() => {
                    window.location.href = 'https://vd-37.github.io/Loopstudios-frontend/';
                    return null;
                }} />
                <Route path='/project/Loopstudios/github' component={() => {
                    window.location.href = 'https://github.com/vd-37/Loopstudios-frontend';
                    return null;
                }} />
                <Route path='/project/Keeper/website' component={() => {
                    window.location.href = 'https://tg0oo.csb.app/';
                    return null;
                }} />
                <Route path='/project/Keeper/github' component={() => {
                    window.location.href = 'https://github.com/vd-37/Keeper-App';
                    return null;
                }} />
                <Route path='/project/Tindog/website' component={() => {
                    window.location.href = 'https://vd-37.github.io/Tindog/';
                    return null;
                }} />
                <Route path='/project/Tindog/github' component={() => {
                    window.location.href = 'https://github.com/vd-37/Tindog';
                    return null;
                }} />
                <Route path='/project/Blogr/website' component={() => {
                    window.location.href = 'https://blogr-frontendmentor-3r21sx062-vd-37.vercel.app/';
                    return null;
                }} />
                <Route path='/project/Blogr/github' component={() => {
                    window.location.href = 'https://github.com/vd-37/Blogr-frontendmentor';
                    return null;
                }} />
                <Route path='/project/Drums/website' component={() => {
                    window.location.href = 'https://vd-37.github.io/Drum-Kit/';
                    return null;
                }} />
                <Route path='/project/Drums/github' component={() => {
                    window.location.href = 'https://github.com/vd-37/Drum-Kit';
                    return null;
                }} />
                <Route path='/project/Easybank/website' component={() => {
                    window.location.href = 'https://vd-37.github.io/Easybank-landing-frontend/';
                    return null;
                }} />
                <Route path='/project/Easybank/github' component={() => {
                    window.location.href = 'https://github.com/vd-37/Easybank-landing-frontend';
                    return null;
                }} />
                <Route path='/project/Bootstrap/website' component={() => {
                    window.location.href = 'https://vd-37.github.io/Bootstrap-website/';
                    return null;
                }} />
                <Route path='/project/Bootstrap/github' component={() => {
                    window.location.href = 'https://github.com/vd-37/Bootstrap-website';
                    return null;
                }} />
                <Route path='/project/Fest/website' component={() => {
                    window.location.href = "https://vd-37.github.io/College-fest--website/";
                    return null;
                }} />
                <Route path='/project/Fest/github' component={() => {
                    window.location.href = "https://github.com/vd-37/College-fest--website";
                    return null;
                }} />

            </Switch>
        </BrowserRouter>
    )
}
