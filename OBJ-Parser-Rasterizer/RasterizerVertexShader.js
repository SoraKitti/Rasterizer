vertexShader = `
precision highp float;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
uniform float uTime;

attribute vec3 aPosition;
attribute vec3 aNormal;
attribute vec2 aUV;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUV;

varying float vTime;

void main() {
  gl_Position =  uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
  vPosition = aPosition;
  vNormal = aNormal;
  vUV = aUV;
  vTime = uTime;
}
`;