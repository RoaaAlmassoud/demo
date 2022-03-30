// @author brunoimbrizi / http://brunoimbrizi.com

precision highp float;
precision highp int;

uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform vec2 viewport;
varying vec2 vPUv;
varying vec2 vUv;

float creatCircle(){
	vec2 viewportUv = gl_FragCoord.xy / viewport/2.;
	float viewportAspect = viewport.x / viewport.y;

	vec2 mousePoint = vec2(uMouse.x, 1.0 - uMouse.y);
	float circleRadius = max(0.0, 100. / viewport.x);

	vec2 shapeUv = viewportUv - mousePoint;
	shapeUv /= vec2(1.0, viewportAspect);
	shapeUv += mousePoint;

	float dist = distance(shapeUv, mousePoint);
	dist = smoothstep(circleRadius, circleRadius * 0.001, dist);
	return dist;

}

void main() {
	float circle = creatCircle();
	vec4 color = vec4(0.0);
	vec2 uv = vUv;
	vec2 puv = vPUv;

	// pixel color
	vec4 colA = texture2D(uTexture, puv);

	// greyscale
	float grey = colA.r * 0.21 + colA.g * 0.71 + colA.b * 0.07;
	vec4 colB = vec4(grey, grey, grey, 1.0);

	// circle
	float border = 0.3;
	float radius = 0.5;
	float dist = radius - distance(uv, vec2(0.5));
	float t = smoothstep(0.0, border, dist);

	// final color
	color = vec4(0.522,0.322,0.949, 1);
	color.a = t;

	gl_FragColor = vec4(vec3(circle), 1.0);
	gl_FragColor = color;
}