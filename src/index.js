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

  // document.addEventListener("mousemove", move, false);
  update();
}

function update() {
  if (percent > 1) {
    percent = 0;
  }
  percent += 0.01;
  console.log(percent);

  var index = parseInt(percent * (framesList.length - 1));
  console.log(index);
  context.drawImage(framesList[index], 0, 0, canvas.width, canvas.height);
  requestAnimationFrame(update);
}

init();
