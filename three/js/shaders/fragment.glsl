varying float vNoise;

void main() {
  vec3 blueColor = vec3(0., 0., 1.);
  vec3 redColor = vec3(1., 0., 0.);
  vec3 finalColor = mix(blueColor, redColor, 0.5*(vNoise + 1.));
  gl_FragColor = vec4(finalColor, 1.0);
}
