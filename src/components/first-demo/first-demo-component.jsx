import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import FirstDemo from './first-demo';
import SecondDemo from '../second-demo/second-demo.jsx';
import ThirdDemo from '../third-demo/third-demo.jsx';
import FourthDemo from '../fouth-demo/fourth-demo.jsx';

export default class FirstDemoComponent extends Component {

    constructor(props) {
        super(props)
        this.hash = props.location.hash
        window.app= new FirstDemo()
        //window.app = this.hash!== '#/demo2' && this.hash!== '#/demo3' && this.hash !== '#/demo4'?new FirstDemo(): {};
    }

    componentWillUnmount() {
        window.app = {}
    }

    renderComponents = () =>{
        console.log('in first demo renderComponents')
        switch (this.props.location.hash) {
            case '#/demo2':
                return <SecondDemo props={this.props}/>
                break;
            case '#/demo3':
                return <ThirdDemo props={this.props}/>
                break
            case '#/demo4':
                return <FourthDemo props={this.props}/>
                break
        }
    }


    render() {


        return (
            <div>
                {/*{this.renderComponents()}*/}
            </div>

        );
    }
}
