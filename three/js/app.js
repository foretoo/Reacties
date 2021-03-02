import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import fragment from './shaders/fragment.glsl'
import vertex from './shaders/vertex.glsl'
import image from '../assets/cloud.jpg'

export default class Sketch {
  constructor(options) {
    this.time = 0
    this.container = options.dom
    this.scene = new THREE.Scene();

    this.width = this.container.offsetWidth
    this.height = this.container.offsetHeight

    this.camera = new THREE.PerspectiveCamera( 50, this.width / this.height, 0.01, 100 );
    this.camera.position.z = 2;

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.container.appendChild( this.renderer.domElement );
    this.controls = new OrbitControls( this.camera, this.renderer.domElement )
    this.controls.enablePan = false;

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
    this.geometry = new THREE.PlaneBufferGeometry( 1,1, 32,32 );
    // this.material = new THREE.MeshNormalMaterial();

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        cloudTexture: { value: new THREE.TextureLoader().load(image)}
      },
      side: THREE.DoubleSide,
      fragmentShader: fragment,
      vertexShader: vertex,
      wireframe: false
    })

    this.cube = new THREE.Mesh( this.geometry, this.material );
    this.scene.add( this.cube );
  }

  render() {
    this.time += 0.005
    // this.cube.rotation.x = -Math.PI/2.5
  	// this.cube.rotation.y += 0.01;
    this.material.uniforms.time.value = this.time
    this.renderer.render( this.scene, this.camera );
    window.requestAnimationFrame(this.render.bind(this))
  }
}

new Sketch({
  dom: document.getElementById('root')
})
