vertexShader = `
precision highp float;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat3 uNormalMatrix; // Matrix to transform normals correctly

attribute vec3 aPosition;
attribute vec3 aNormal;
attribute vec2 aUV;

varying vec3 vNormal; // Pass the transformed normal to the fragment shader
varying vec3 vPosition; // Pass the world-space position to the fragment shader
varying vec2 vUV;

void main() {
  // Transform the position to clip space
  gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);

  // Transform the normal to world space
  vNormal = normalize(uNormalMatrix * aNormal);

  // Transform the position to world space
  vPosition = (uModelViewMatrix * vec4(aPosition, 1.0)).xyz;

  vUV = aUV;
}
`;