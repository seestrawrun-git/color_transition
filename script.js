let myHue = chroma('pink').darken().rgb();

let myGradient = chroma.scale(['blue', 'orange']);
console.log(myHue);
console.log(myGradient(1).rgb());

function setup() {
	createCanvas(400, 300);
}

function draw() {
	background(myHue);

	noStroke();

	let g = sin(frameCount/60);
	fill(myGradient(g).rgb());
	ellipse(width/2, height/2, 50, 50);
}