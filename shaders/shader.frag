#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform float u_debug;

float something() {
    return 0.5 + 0.5 * sin(u_time * 5.0);
}

void main() {
    gl_FragColor = vec4(something(), u_debug, 0.0, 1.0);
}  