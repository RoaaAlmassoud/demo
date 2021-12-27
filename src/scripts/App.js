import React, {Component} from "react"
import MainLayout from '../components/main-layout/main-layout.js'
//import 'semantic-ui-css/semantic.min.css'
import {Label} from "semantic-ui-react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FirstDemoComponent from "../components/first-demo/first-demo-component.jsx"
import SecondDemo from '../components/second-demo/second-demo.jsx'
import ThirdDemo from '../components/third-demo/third-demo.jsx'
import FourthDemo from '../components/fouth-demo/fourth-demo.jsx'

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
        console.log('in render')
        return (
            <BrowserRouter>
                    <MainLayout>
                        <Switch>

                            <Route exact path={process.env.PUBLIC_URL + '/demo1'} render={(props) => <FirstDemoComponent {...props}/>}/>

                            <Route exact path={process.env.PUBLIC_URL + '/'}
                                   render={(props) => <FirstDemoComponent {...props}/>}/>

                            <Route exact path={process.env.PUBLIC_URL + '/demo2'}
                                   render={(props) => <SecondDemo {...props}/>}/>

                            <Route exact path={process.env.PUBLIC_URL + '/demo3'}
                                   render={(props) => <ThirdDemo {...props}/>}/>

                            <Route exact path={process.env.PUBLIC_URL + '/demo4'}
                                   render={(props) => <FourthDemo {...props}/>}/>

                        </Switch>
                    </MainLayout>
            </BrowserRouter>
        )
    }

}

