fragmentShader = `
precision highp float;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUV;

varying float vTime;

void main() {
  vec3 lightPos = normalize(vec3(sin(vTime), 0, 1.));
  float d = dot(lightPos, vNormal);
  // d = max(0., d);
  if (d < 0.0) {
    d *= -1.0;
  }
  float ambient = .3;
  gl_FragColor = vec4(vUV.x*d+ambient, vUV.y*d+ambient, d+ambient, 1.);
}
`;