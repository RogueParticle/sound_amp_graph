var song;
var button;
var amp;
var volHistory = [];

function toggle() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound("Mississippi Fred McDowell - CC Rider.mp3");
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  button = createButton('start / stop');
  button.mousePressed(toggle);
  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  var vol = amp.getLevel();
  //console.log('vol: ' + vol);
  var vol2 = map(vol, 0, 1, 10, 400);
  //console.log('vol2: ' + vol2);
  volHistory.push(vol2);
  stroke(255);
  noFill();
  translate(width / 2, height /2);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = volHistory[i];
    //console.log('i: ' + i + ' r: ' + r);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if (volHistory.length > 360) {
    volHistory.splice(0, 1);
  }

}
