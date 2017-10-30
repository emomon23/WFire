import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Shapes from '../Shapes/Shapes'
import Contact from '../Contact/Contact'

export class MyContainer extends Component {
    render() {
        return (
          <div id='contentContainer'>
             <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/shapes' component={Shapes}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </main>
          </div>
        );
    }
}
export default MyContainer;