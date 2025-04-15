fragmentShader = `
precision highp float;

varying vec3 vPosition;
varying vec3 vNormal;
varying float vTime;

void main() {
  vec3 lightDir = normalize(vec3(0.0, 0.0, 1.0));
  float diff = max(dot(vNormal, lightDir), 0.0);

  // Pendulum swing factor: -1 (far left) to 1 (far right)
  float swing = sin(vTime);

  // Per-fragment gradient across X position
  // - vPosition.x: local X coordinate of the vertex
  // - swing shifts the gradient: lighter on the direction of the swing
  float gradient = 0.5 + 0.5 * swing * vPosition.x;

  // Combine with light for depth
  float brightness = 0.2 + 0.9 * diff * gradient;


  vec3 baseColor = vec3(0.3, 0.3, 0.5); // base color in RGB but 0 to 1 instead of 0 to 255
  vec3 color = baseColor * brightness;

  gl_FragColor = vec4(color, 1.0);
}
`;