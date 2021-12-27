import React, {Component} from 'react';
import myImage from '../../../static/images/home.png'

export default class ThirdDemo extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

        //let image = document.getElementById('logo')
        let image = document.createElement('img')
        image.id = 'logo'
        image.src = myImage
        //image.style.width = 100%
        document.getElementById('container').appendChild(image)

        let nextScr = document.getElementById('next')
        if(nextScr){
            let nextParticle = new NextParticle({
                image: document.all.logo,
                width: window.innerWidth,
                height: window.innerHeight,
                maxWidth: window.innerWidth * 0.8,
                particleGap: 1
            });
            window.onresize = function () {
                if (window.innerWidth > 600) {
                    nextParticle.width = window.innerWidth - 20;
                    nextParticle.height = window.innerHeight - 20;
                    nextParticle.start();
                }
            }
        }
    }

    componentWillUnmount() {
        let image = document.getElementById('logo')
        document.getElementById('container').removeChild(image)
        //image.style.display= 'none'
    }

    render() {

        return (
            <div>

            </div>

        );
    }
}
