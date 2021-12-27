import React, {Component} from 'react'
import {withRouter, Link} from "react-router-dom";
import {Menu, Dropdown, Button, Icon} from "semantic-ui-react";


class MainLayout extends Component {
    constructor(props) {
        super(props)
        console.log('props: ', props)
        this.state = {
            notificationsCount: 0,
            notifications: [],
            firsCall: true
        }
        let pathName = props ? props.location.pathname.substring(1) : 'first'
        this.state = {
            activeItem: pathName !== 'demo1' ? pathName : 'demo1'
        }
    }

    handleItemClick = (e, name) => {
console.log('this.props: ', this.props)
        this.setState({
            activeItem: name
        }, () => {
            this.props.history.push(`/${name}`)
        })
    }


    render() {
        console.log('in main layout')
        console.log('this.props.history: ', this.props.history)
        const {activeItem, notificationsCount, notifications, firstCall} = this.state
        return (
            <div className={'main-container'}>
                <div className="frame">
                    <div className="frame__links">
                        {/*<Link to={'/demo1'}>demo 1</Link>
                        <Link to={'/demo2'}>demo 2</Link>
                        <Link to={'/demo3'}>demo 3</Link>*/}
                        <a  href="/demo1"  className={`${activeItem === 'demo1'? 'clicked': ''}`}
                            onClick={(e) => {this.handleItemClick(e, 'demo1')}}
                        >demo 1</a>
                        <a className={`${activeItem === 'demo2'? 'clicked': ''}`} href="/demo2"
                           onClick={(e) => {this.handleItemClick(e, 'demo2')}}
                        >demo 2</a>
                        <a className={`${activeItem === 'demo3'? 'clicked': ''}`} href="/demo3"
                           onClick={(e) => {this.handleItemClick(e, 'demo3')}}
                        >demo 3</a>
                        <a className={`${activeItem === 'demo4'? 'clicked': ''}`} href="/demo4"
                           onClick={(e) => {this.handleItemClick(e, 'demo4')}}
                        >demo 4</a>
                    </div>
                </div>

                {/* <Menu id={"navbar"} borderless className={"navbar-section frame"}>
              <div className={'frame__links'}>
                  <Menu.Item
                      name='demo1'
                      active={activeItem === 'first'}
                      onClick={this.handleItemClick}
                  />
                  <Menu.Item
                      name='demo2'
                      active={activeItem === 'second'}
                      onClick={this.handleItemClick}
                  />
              </div>


                </Menu>*/}
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default withRouter(MainLayout);