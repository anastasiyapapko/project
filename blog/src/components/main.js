import React from 'react';
import MainPage from './mainpage';
import Article from './articles';
import Lifestyle from './lifestyle';
import Travelling from './travelling';
import {Route,Switch} from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path='/' component = {MainPage}/>
        <Route path='/articles' component = {Article}/>
        <Route path='/lifestyle' component = {Lifestyle}/>
        <Route path='/travelling' component = {Travelling}/>
        <Route component = {NoMatchPage}/>

    </Switch>
)

const NoMatchPage = () => {
    return (
      <h3>404 - Not found</h3>
    );
  };

export default Main;