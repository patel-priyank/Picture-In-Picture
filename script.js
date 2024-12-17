const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

// Prompt to select media stream and pass to video element
const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
  } catch (error) {
    // Catch error here
  }
};

button.addEventListener('click', async () => {
  button.disabled = true;

  // Select media stream, play the video, then open picture in picture
  await selectMediaStream();
  await videoElement.play();
  await videoElement.requestPictureInPicture();

  button.disabled = false;
});
