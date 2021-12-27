import React, {Component} from "react"
import MainLayout from '../src/components/main-layout/main-layout.js'
//import 'semantic-ui-css/semantic.min.css'
import {Label} from "semantic-ui-react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FirstDemoComponent from "../src/components/first-demo/first-demo-component.jsx"
import SecondDemo from '../src/components/second-demo/second-demo.jsx'
import ThirdDemo from '../src/components/third-demo/third-demo.jsx'
import FourthDemo from '../src/components/fouth-demo/fourth-demo.jsx'

export default class App extends Component {
    constructor(props) {
        super(props)
        console.log('props in main: ', props)
        this.state = {

        }
    }

    componentWillMount() {
    }



    render() {
        console.log('in App.js')
        return (
            <BrowserRouter>
                    <MainLayout>
                        <Switch>

                            <Route exact path={'/demo1'} render={(props) => <FirstDemoComponent {...props}/>}/>

                            <Route exact path={'/'}
                                   render={(props) => <FirstDemoComponent {...props}/>}/>

                            <Route exact path={'/demo2'}
                                   render={(props) => <SecondDemo {...props}/>}/>

                            <Route exact path={'/demo3'}
                                   render={(props) => <ThirdDemo {...props}/>}/>

                            <Route exact path={'/demo4'}
                                   render={(props) => <FourthDemo {...props}/>}/>

                        </Switch>
                    </MainLayout>
            </BrowserRouter>
        )
    }

}

