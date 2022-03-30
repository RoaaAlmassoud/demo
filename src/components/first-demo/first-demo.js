import WebGLView from '../../scripts/webgl/WebGLView';
import GUIView from '../../scripts/gui/GUIView';

export default class FirstDemo {

    constructor() {
        this.init();
    }

    init() {
        this.initWebGL();
        this.initGUI();
        this.addListeners();
        this.animate();
        this.resize();

    }


    componentWillMount() {
        this.resize();
    }


    initWebGL() {
        this.webgl = new WebGLView(this);
        document.querySelector('.container').appendChild(this.webgl.renderer.domElement);
    }

    initGUI() {
        this.gui = new GUIView(this);
    }

    addListeners() {
        this.handlerAnimate = this.animate.bind(this);

        window.addEventListener('resize', this.resize.bind(this));
        window.addEventListener('keyup', this.keyup.bind(this));

        const el = this.webgl.renderer.domElement;

        el.addEventListener('click', this.click.bind(this));
    }

    animate() {
        //console.log('in animate')
        this.update();
        this.draw();

        this.raf = requestAnimationFrame(this.handlerAnimate);
    }

    // ---------------------------------------------------------------------------------------------
    // PUBLIC
    // ---------------------------------------------------------------------------------------------

    update() {
        if (this.gui.stats) this.gui.stats.begin();
        if (this.webgl) this.webgl.update();
        if (this.gui) this.gui.update();
    }

    draw() {
        if (this.webgl) this.webgl.draw();
        if (this.gui.stats) this.gui.stats.end();
    }

    // ---------------------------------------------------------------------------------------------
    // EVENT HANDLERS
    // ---------------------------------------------------------------------------------------------

    resize() {
        if (this.webgl) this.webgl.resize();
    }

    keyup(e) {
        // g
        if (e.keyCode == 71) { if (this.gui) this.gui.toggle(); }
    }

    click(e) {
        //console.log('this.webgl: ', this.webgl)
        //this.webgl.next();
    }
}
