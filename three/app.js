import {  Scene,
          PerspectiveCamera,
          WebGLRenderer,
          BoxGeometry,
          MeshNormalMaterial,
          ShaderMaterial,
          Mesh
        } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class Sketch {
  constructor(options) {
    this.time = 0
    this.container = options.dom
    this.scene = new Scene();

    this.width = this.container.offsetWidth
    this.height = this.container.offsetHeight

    this.camera = new PerspectiveCamera( 75, this.width / this.height, 0.1, 1000 );
    this.camera.position.z = 5;

    this.renderer = new WebGLRenderer( { antialias: true } );
    this.container.appendChild( this.renderer.domElement );
    this.controls = new OrbitControls( this.camera, this.renderer.domElement );

    this.resize()
    this.setupResize()
    this.addObjects()
    this.render()
  }

  setupResize() {
    window.addEventListener('resize', this.resize.bind(this))
  }

  resize() {
    this.width = this.container.offsetWidth
    this.height = this.container.offsetHeight
    this.renderer.setSize( this.width, this.height )
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
  }

  addObjects() {
    this.geometry = new BoxGeometry();
    // this.material = new MeshNormalMaterial();

    this.material = new ShaderMaterial({
      fragmentShader: `
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,
      vertexShader: `
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `
    })

    this.cube = new Mesh( this.geometry, this.material );
    this.scene.add( this.cube );
  }

  render() {
    this.time += 0.5
    this.cube.rotation.x += 0.01;
  	this.cube.rotation.y += 0.01;
    this.renderer.render( this.scene, this.camera );
    window.requestAnimationFrame(this.render.bind(this))
  }
}

new Sketch({
  dom: document.getElementById('root')
})
