varying float vNoise;
varying vec2 vUv;
uniform sampler2D cloudTexture;
uniform float time;

void main() {
  vec3 blueColor = vec3(0., 0., 1.);
  vec3 redColor = vec3(1., 0., 0.);
  vec3 finalColor = mix(blueColor, redColor, 0.5*(vNoise + 1.));

  // vec2 newUV = vUv;
  // newUV = vec2(newUV.x, newUV.y*.8 + .1 + .1*sin(newUV.x*5. + time*.1));

  // vec4 cloud = texture2D(cloudTexture, newUV);

  // gl_FragColor = vec4(finalColor, 1.0);
  // gl_FragColor = vec4(vUv, 0.0, 1.0);
  gl_FragColor = vec4(vNoise);
  // gl_FragColor = cloud;
}
