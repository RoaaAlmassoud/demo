import React, {Component} from 'react';
//import Sketch from './scene'
import './css/base.css'
import './js/particles.js'

import myimage from "../second-demo/img/3.jpg";


export default class SecondDemo extends Component {

    constructor(props) {
        console.log('in constructor: SecondDemo:')

        super(props)
        this.state = {
            needRefresh: true
        }
        this.refreshPage()
        // window.app = new Sketch();
    }


    refreshPage = () => {
        console.log('in refresh page')
        this.setState({
            needRefresh: false
        })


        /* let refreshed = this.state.refreshed
         if(!refreshed){
             console.log('in reloading')*/

        /*} else {
            this.setState({
                refreshed: true
            }, () => {
                console.log('after setstate')
            })
        }*/


    }

    componentDidMount() {
        console.log('before refresh')
        this.refreshPage()
        console.log('second componentDidMount: ', this.props)
        const image = new Image();
        const particles = document.createElement('div');
        particles.id = "particles-js"
        document.getElementById('container').appendChild(particles)
        /* image.src = myimage
         image.id = 'second'
         document.getElementById('container2').appendChild(image)*/

        particlesJS('particles-js',

            {
                "particles": {
                    "number": {
                        "value": 800,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#000"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 1,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": false,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 200,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                "config_demo": {
                    "hide_card": false,
                    "background_color": "#b61924",
                    "background_image": "",
                    "background_position": "50% 50%",
                    "background_repeat": "no-repeat",
                    "background_size": "cover"
                }
            }
        );

        /*const script = document.createElement('script')
        script.src = './js/app.js'
        document.body.appendChild(script)
*/
        /*image.addEventListener('load', function(){

        const ctx = canvas.getContext('2d');
        canvas.width = 800;
        canvas.height = 600;

        let particlesArray = [];
        const numberOfParticles = 12000;
        const detail = 1;

        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let grid = [];
        for (let y = 0; y < canvas.height; y += detail){
            let row = [];
            for (let x = 0; x < canvas.width; x += detail){
                const red = pixels.data[(y * 4 * pixels.width) + (x * 4)]
                const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)]
                const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)]
                const color = 'rgb(' + red +',' + green + ',' + blue + ')';
                const brightness = calculateBrightness(red, green, blue)/100;

                row.push(brightness);
            }
            grid.push(row);
        }

        class Particle {
            constructor(){
                this.x = Math.random() * canvas.width;
                this.y =  0;
                //this.prevX = this.x;
                this.speed = 0;
                this.velocity = Math.random() * 0.7;
                this.size = Math.random() * 2 + .1;
            }
            update () {
                this.speed = grid[Math.floor(this.y / detail)][Math.floor(this.x / detail)];
                let movement = (2.5 - this.speed) + this.velocity;
                this.y += movement;
                if (this.y >= canvas.height) {
                    this.y = 0;
                    this.x = Math.random() * canvas.width;
                }
                //console.log(this.x += movement)
            }
            draw(){
                ctx.beginPath();
                ctx.fillStyle = 'white';
                ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                ctx.fill();
            }
        }

        function init(){
            for (let i = 0; i < numberOfParticles; i++){
                particlesArray.push(new Particle());
            }
        }
        init();

        function animate () {
            ctx.globalAlpha = 0.05;
            ctx.fillStyle = 'rgb(0, 0,0)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 0.2;
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                ctx.globalAlpha = particlesArray[i].speed * 0.3;
                particlesArray[i].draw();
            }
            requestAnimationFrame( animate );
        }
        animate();

        function calculateBrightness(red, green, blue){
            return Math.sqrt(
                (red * red) * 0.299 +
                (green * green) * 0.587 +
                (blue * blue) * 0.114
            );
        }

    });

    let mouse = {
        x: null,
        y: null,
        radius: 90
    }
    window.addEventListener('mousemove',
        function(event){
            mouse.x = event.x + canvas.clientLeft;
            mouse.y = event.y + canvas.clientTop;
            console.log('mouse: ')
        });*/

    }


    render() {
        if (this.state.needRefresh) {
            window.location.reload(true)
        }
        return (

            <img src={myimage} id={'second'}/>


        );
    }
}
