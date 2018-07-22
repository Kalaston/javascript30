const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
  .then(localMediaStream => {
    video.src = window.URL.createObjectURL(localMediaStream);
    video.play();
  })
  .catch(error => console.error("There's been an error! ", error));
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video,0,0, width, height);
    // take the pixels out
    //let pixels = ctx.getImageData(0,0, width, height);
    // mes with them
    //pixels = redEffect(pixels);
    ctx.globalAlpha = 0.1;
    // take them back;
    //ctx.putImageData(pixels, 0,0);
  }, 16);
}

function takePhoto() {
  snap.currentTime = 0
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src=${data} alt="Kawaii!!"/>`
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for(let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i + 500] = pixels.data[i + 0]; // red
    pixels.data[i + 500] = pixels.data[i + 1]; // green
    pixels.data[i -550] = pixels.data[i + 2]; // blue
  }
  return pixels;
}
getVideo();


video.addEventListener('canplay', paintToCanvas);