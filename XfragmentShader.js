fragmentShader = `
precision highp float;

varying vec3 vNormal;

uniform vec3 color;

uniform vec3 ambientColor;

//World space position we will receive to the fragment shader
varying vec3 vPosition;

void main() {
    vec3 lightPosition = (0.0, 1.5, 0.0);
    
    //To calculate the direction, we need to subtract the world position
    //from the light position
    //and then normalize it
    float lightStrength = dot(normalize(lightPosition - vPosition), vNormal);
    
    gl_FragColor = vec4( color * lightStrength + ambientColor, 1.0 );
}
`;