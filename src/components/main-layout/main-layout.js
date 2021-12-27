import React, {Component} from 'react'
import {withRouter} from "react-router-dom";


class MainLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        let pathName = props ? props.location.pathname.substring(1) : 'first'
        this.state = {
            activeItem: pathName !== 'demo1' ? pathName : 'demo1'
        }
    }


    render() {
        const {activeItem} = this.state
        return (
            <div className={'main-container'}>
                <div className="frame">
                    <div className="frame__links">
                        <a  href="/demo1"  className={`${activeItem === 'demo1'? 'clicked': ''}`}>demo 1</a>
                        <a className={`${activeItem === 'demo2'? 'clicked': ''}`} href="/demo2">demo 2</a>
                        <a className={`${activeItem === 'demo3'? 'clicked': ''}`} href="demo3">demo 3</a>
                        <a className={`${activeItem === 'demo4'? 'clicked': ''}`} href="demo4">demo 4</a>
                    </div>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default withRouter(MainLayout);