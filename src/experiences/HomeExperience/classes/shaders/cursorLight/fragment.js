/* eslint-disable import/no-anonymous-default-export */

export default `
uniform vec3 uColor;

varying vec2 vUv;

void main() {
    float distanceToCenter = distance(vUv, vec2(0.5));
    float strength = pow(1.0 - distanceToCenter, 10.0);

    gl_FragColor = vec4(uColor, strength);
}
`;