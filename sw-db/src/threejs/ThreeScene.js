// import * as THREE from 'three'
import { Scene } from 'three/src/scenes/Scene'
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer'
import { Geometry } from 'three/src/core/Geometry'
import { Vector3 } from 'three/src/math/Vector3'
import { LineBasicMaterial } from 'three/src/materials/LineBasicMaterial'
import { LineSegments } from 'three/src/objects/LineSegments'
// import motionBlurShader from './motionBlurShader'
// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
// import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

export default function ThreeScene(sceneRef) {

  const scene = new Scene()

  const camera = new PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.z = 1
  camera.rotation.x = Math.PI / 3

  const renderer = new WebGLRenderer( { antialias: true } )
  renderer.setSize(window.innerWidth, window.innerHeight)
  sceneRef.appendChild(renderer.domElement)

  window.onresize = function () {
		const width = window.innerWidth
		const height = window.innerHeight
		camera.aspect = width / height
		renderer.setSize( width, height )
	}

  // //////// HELLO SHADER ////////
  //
  // // EFFECTS
  // const composer = new EffectComposer(renderer)
  //
  // // define a render target with a depthbuffer
  // const target = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight)
  // target.depthBuffer = true
  // target.depthTexture = new THREE.DepthTexture()
  //
  // // add a motion blur pass
  // const motionPass = new ShaderPass(motionBlurShader)
  // motionPass.renderToScreen = false
  // composer.addPass(motionPass)
  //
  // // define variables used by the motion blur pass
  // let previousMatrixWorldInverse = new THREE.Matrix4()
  // let previousProjectionMatrix = new THREE.Matrix4()
  // let previousCameraPosition = new THREE.Vector3()
  // let tmpMatrix = new THREE.Matrix4()
  //
  // //////// BUYE SHADER ////////

  const starsPosBlue = new Geometry()
  const starsPosViolet = new Geometry()
  const starsPosUltra = new Geometry()

  function correct(x, z) {
    const l = Math.sqrt(Math.pow(Math.abs(x),2) + Math.pow(Math.abs(z),2))
    const d = (350 - l) / 350
    const k = d*2.5
    return [x*k, z*k]
  }
  function generateStarsPos(group) {
    for (let i = 0; i < 1000; i++) {
      let star
      if (i % 2 === 0) {
        star = new Vector3(
          Math.random() * 400 - 200,
          Math.random() * 1200 - 600,
          Math.random() * 400 - 200
        )
      } else {
        star = new Vector3(
          group.vertices[i-1].x,
          group.vertices[i-1].y,
          group.vertices[i-1].z
        )
      }
      star.velocity = 5
      star.acceleration = 0.05 * (Math.abs(star.x) + Math.abs(star.z)) / 200
      group.vertices.push(star)
    }
  }
  generateStarsPos(starsPosBlue)
  generateStarsPos(starsPosViolet)
  generateStarsPos(starsPosUltra)

  const starsMatlBlue = new LineBasicMaterial( { color: 0x4488aa, linewidth: 1 } )
  const starsMatViolet = new LineBasicMaterial( { color: 0x4477ee, linewidth: 1 } )
  const starsMatUltra = new LineBasicMaterial( { color: 0xaabbff, linewidth: 1 } )

  const starsBlue = new LineSegments(starsPosBlue, starsMatlBlue)
  const starsViolet = new LineSegments(starsPosViolet, starsMatViolet)
  const starsUltra = new LineSegments(starsPosUltra, starsMatUltra)
  scene.add(starsBlue)
  scene.add(starsViolet)
  scene.add(starsUltra)

  function updateStarsPos(group) {
    group.vertices.forEach((star, i) => {
      if (i % 2 === 0) {
        star.velocity += star.acceleration
      } else {
        if (star.y < -(100 + Math.random()*500)) {
          star.y = group.vertices[i-1].y = 100 + Math.random()*500
          star.x = Math.random() * 400 - 200
          star.z = Math.random() * 400 - 200
          const [x, z] = correct(star.x, star.z)
          star.x = group.vertices[i-1].x = x
          star.z = group.vertices[i-1].z = z
          star.velocity = group.vertices[i-1].velocity = 5
        }
      }
      star.y -= star.velocity
    })
    group.verticesNeedUpdate = true
  }
  function animate() {
    updateStarsPos(starsPosBlue)
    updateStarsPos(starsPosViolet)
    updateStarsPos(starsPosUltra)
    starsBlue.rotation.y += 0.001
    starsViolet.rotation.y += 0.0015
    starsUltra.rotation.y += 0.002
    renderer.render(scene, camera)

    // //////// HELO SHADER ////////
    //
    // // render scene and depthbuffer to the render target
    // renderer.render(scene, camera, target)
    //
    // // update motion blur shader uniforms
    // motionPass.material.uniforms.tColor.value = target.texture
    // motionPass.material.uniforms.tDepth.value = target.depthTexture
    // motionPass.material.uniforms.velocityFactor.value = 1
    // motionPass.material.uniforms.delta.value = delta
    // // tricky part to compute the clip-to-world and world-to-clip matrices
    // motionPass.material.uniforms.clipToWorldMatrix.value
    //   .getInverse(camera.matrixWorldInverse).multiply(tmpMatrix.getInverse(camera.projectionMatrix))
    // motionPass.material.uniforms.previousWorldToClipMatrix.value
    //   .copy(previousProjectionMatrix.multiply(previousMatrixWorldInverse))
    // motionPass.material.uniforms.cameraMove.value.copy(camera.position).sub(previousCameraPosition)
    //
    // // render the postprocessing passes
    // composer.render(delta)
    //
    // // save some values for the next render pass
    // previousMatrixWorldInverse.copy(camera.matrixWorldInverse)
    // previousProjectionMatrix.copy(camera.projectionMatrix)
    // previousCameraPosition.copy(camera.position)
    //
    // //////// BUYE SHADER ////////

    requestAnimationFrame(animate)
  }

  animate()
}
