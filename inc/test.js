"use strict";

let canvas;

window.onload = init;

function init() {
	canvas = document.querySelector("canvas");
	setTargetContext(canvas.getContext("2d"));

	background(Color.hsl(200, 100, 10));
	stroke(Color.rgb(255));
	strokeWeight(3);
	lineJoin('round');

	grid(new Vector(100, 100), new Vector(51, 51), new Vector(0, 0), new Vector(400, 400))

	let imgData = createImageData(100, 500);

	mapImageData(imgData, pickColr);
	putImageData(imgData, 600, 100);
}

function pickColor() {
	return new Color( 51*Math.floor(Math.random()*6),
			  51*Math.floor(Math.random()*6),
			  51*Math.floor(Math.random()*6) );
}
