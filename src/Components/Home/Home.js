import React, { Component } from 'react';
import './Home.css'

export default class Home extends Component {
    constructor(){
        super();
                
        let rightNow = new Date();
        let [date, time] = rightNow.toLocaleString('en-US').split(', ');
        let greetingToUse = 'Good Morning';
        
        if (rightNow.getHours() > 11){
            greetingToUse = rightNow.getHours() > 15? 'Good Evening': 'Good Afternoon';
        } 

        this.state = {currentTime: time,
                      currentDate: date,
                      greeting: greetingToUse }
    }

    componentDidMount(){
       //Call your Rest service here to get data from the BE
    };

    render(){
       return(
           <section id='homeComponent' className='Home-section'>
                <h1>Welcome to Shapes, created by Mike Emo.  Written using React.</h1>
                <div>
                    {this.state.greeting}. 
                </div>
                
                <div>
                    The current time is {this.state.currentDate} {this.state.currentTime}.
                </div>

                
                <h2>
                The Assignment
                </h2>
                <ul>
                    <li>
                        Create 50 squares and 50 circles
                    </li>
                    <li>
                        The size of the shapes should all be randomized
                    </li>
                    <li>
                        Circles are blue
                    </li>
                    <li>
                        Squares are red
                    </li>
                    <li>
                        Display the list of all shapes, ordered from largest to smallest
                    </li>
                    <li>
                        The user should be able to change the color or circles and squares
                    </li>
                    <li>
                        The user should be able to change the number of shapes created
                    </li>
                    <li>
                        The ui should update whenever the user changes any of these values
                    </li>
                </ul>
            
                <p className='Call-to-action'>
                    Click 'Shapes' navigation menu to see the results
                </p>

                <p>
                    Source code can be found on <a href='https://github.com/emomon23/WFire/tree/master/src'>Github</a>
                </p>
           </section>
       )
    }
}
