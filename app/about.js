import React, { Component } from 'react';
import Menu from './menu';

class About extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <div>
                    This is our cool music app
                </div>
            </div>
        );

    }
}

export default About;