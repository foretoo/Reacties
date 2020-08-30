import * as THREE from 'three'
import img from "./star.png"

export default function ThreeScene(sceneRef, isMobile) {

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.z = 1
  camera.rotation.x = Math.PI / 2

  const renderer = new THREE.WebGLRenderer( { antialias: true } )
  renderer.setSize(window.innerWidth, window.innerHeight)
  sceneRef.appendChild(renderer.domElement)

  window.onresize = function () {
		const width = window.innerWidth
		const height = window.innerHeight
		camera.aspect = width / height
		renderer.setSize( width, height )
	}

  const starGeo = new THREE.Geometry()
  for (let i = 0; i < 500; i++) {
    const star = new THREE.Vector3(
      Math.random() * 400 - 200,
      Math.random() * 1200 - 600,
      Math.random() * 400 - 200
    )
    star.velocity = 1
    star.acceleration = 0.5
    starGeo.vertices.push(star)
  }

  const sprite = new THREE.TextureLoader().load(img)
  const starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    transparent: true,
    fog: false,
    size: isMobile ? 0.75 : 0.5,
    map: sprite
  })
  const stars = new THREE.Points(starGeo, starMaterial)

  scene.add(stars)

  function animate() {
    starGeo.vertices.forEach(star => {
      star.velocity += star.acceleration
      star.y -= star.velocity
      if (star.y < -(100 + Math.random()*500)) {
        star.y = 100 + Math.random()*500
        star.x = Math.random() * 400 - 200
        star.z = Math.random() * 400 - 200
        star.velocity = 1
      }
    });
    starGeo.verticesNeedUpdate = true
    stars.rotation.y += 0.001

    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }

  animate()
}
