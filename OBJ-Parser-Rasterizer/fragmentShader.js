fragmentShader = `
precision highp float;

varying vec3 vNormal; // Transformed normal from the vertex shader
varying vec3 vPosition; // World-space position from the vertex shader

uniform vec3 uLightPosition; // Light position in world space
uniform vec3 uLightColor; // Light color
uniform vec3 uAmbientColor; // Ambient light color

void main() {

  vec3 normal = normalize(vNormal);
  vec3 lightDir = normalize(uLightPosition - vPosition);
  float diffuse = max(dot(normal, lightDir), 0.0);
  vec3 color = uAmbientColor + uLightColor * diffuse;
  gl_FragColor = vec4(color, 1.0);
}
`;