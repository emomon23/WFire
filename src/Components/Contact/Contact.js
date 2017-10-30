import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'

export class Contact extends Component {
    render() {
        return (
            <section id='contactComponent'>
                <div>
                    Mike Emo
                </div>

                <div>
                    612-615-6937
                </div>
                
                <div>
                    memo@iemosoft.com
                </div>

                
            </section>
        );
    }
}
export default Contact;