import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import FirstDemo from './first-demo';
import SecondDemo from '../second-demo/second-demo.jsx';
import ThirdDemo from '../third-demo/third-demo.jsx';
import FourthDemo from '../fouth-demo/fourth-demo.jsx';

export default class FirstDemoComponent extends Component {

    constructor(props) {


        super(props)
        console.log('props in first demo: ', props)
        window.app = new FirstDemo();
    }

    componentWillUnmount() {
        window.app = {}
    }

    renderComponents = () =>{
        console.log('in first demo renderComponents')
        switch (this.props.location.hash) {
            case '#/demo2':
                return <SecondDemo/>
                break
            case '#/demo3':
                return <ThirdDemo/>
                break
            case '#/demo4':
                return <FourthDemo/>
                break


        }
    }


    render() {


        return (
            <div>
                {this.renderComponents()}
            </div>

        );
    }
}
