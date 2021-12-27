import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import FirstDemo from './first-demo';

export default class FirstDemoComponent extends Component {

    constructor(props) {


        super(props)
        window.app = new FirstDemo();
    }

    componentWillUnmount() {
        window.app = {}
    }

    render() {
        console.log('in first demo')
        return (
            <div>

            </div>

        );
    }
}
