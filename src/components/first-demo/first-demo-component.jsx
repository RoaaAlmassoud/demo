import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import FirstDemo from './first-demo';

export default class FirstDemoComponent extends Component {

    constructor(props) {

        console.log('in first demo')
        super(props)
        window.app = new FirstDemo();
    }

    componentWillUnmount() {
        window.app = {}
    }

    render() {

        return (
            <div>

            </div>

        );
    }
}
