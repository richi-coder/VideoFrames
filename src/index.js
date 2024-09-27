import "./styles.css";
import { extractFramesFromVideo } from "./VideoExtractFrames";
var canvas,
  context,
  percent = 0,
  framesList = [];

async function init() {
  var { frames, images, width, height } = await extractFramesFromVideo(
    "src/movie3.mp4",
    25
  );
  framesList = images;

  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  canvas.width = width;
  canvas.height = height;

  // let frames = [];
  // let interval = 1 / fps;
  // let currentTime = 0;

  document.addEventListener("mousemove", move, false);
  update();
}

function move(event) {
  percent = event.pageX / window.innerWidth;
}

function update() {
  // percent =  0;
  if (percent > 1) {
    percent = 0;
  }

  var index = parseInt(percent * (framesList.length - 1));
  context.drawImage(framesList[index], 0, 0, canvas.width, canvas.height);
  requestAnimationFrame(update);
}

init();
