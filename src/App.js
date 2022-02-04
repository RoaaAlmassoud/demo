import React, {Component} from "react"
import FirstDemoComponent from "../src/components/first-demo/first-demo-component.jsx"
import SecondDemo from '../src/components/second-demo/second-demo.jsx'
import ThirdDemo from '../src/components/third-demo/third-demo.jsx'
import FourthDemo from '../src/components/fouth-demo/fourth-demo.jsx'

export default class App extends Component {
    constructor(props) {
        super(props)
        console.log('props in main: ', props)
        this.state = {}
    }

    componentWillMount() {
    }


    handleItemClick = (e, name) => {
        switch (name) {
            case 'demo1':
                return <FirstDemoComponent/>
                break;
            case 'demo2':
                return <SecondDemo/>
                break;

            case 'demo3':
                return <ThirdDemo/>
                break;
            case 'demo4':
                return <FourthDemo/>
                break;

        }
    }


    render() {
        console.log('in App.js')
        return (
            <div className={'main-container'}>
                <div className="frame">
                    <div className="frame__links">
                        <Link to={'/demo1'}>demo 1</Link>
                        <Link to={'/demo2'}>demo 2</Link>
                        <Link to={'/demo3'}>demo 3</Link>
                        <a href=""
                           onClick={(e) => {
                               this.handleItemClick(e, 'demo1')
                           }}
                        >demo 1</a>
                        <a href=""
                           onClick={(e) => {
                               this.handleItemClick(e, 'demo2')
                           }}
                        >demo 2</a>
                        <a href=""
                           onClick={(e) => {
                               this.handleItemClick(e, 'demo3')
                           }}
                        >demo 3</a>
                        <a href=""
                           onClick={(e) => {
                               this.handleItemClick(e, 'demo4')
                           }}
                        >demo 4</a>
                    </div>
                </div>
            </div>

        )
    }

}

