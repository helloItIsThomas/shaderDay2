#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_debug;

float something() {
    return 0.5 + 0.5 * sin(u_time * 5.0);
}

float plot(vec2 uv) {
    // return smoothstep(0.02, 0.0, abs(uv.y - uv.x));
    return smoothstep(0.0, 0.05, abs(uv.x - uv.y));
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(uv.x);
    float pct = plot(uv);
    color = pct * color * vec3(1.0, 0.0, 0.0);
    gl_FragColor = vec4(color, 1.0);
}