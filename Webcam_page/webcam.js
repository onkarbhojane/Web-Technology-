'use strict';
const video = document.querySelector("#video");
const video1 = document.querySelector("#video1");
const video2 = document.querySelector("#video2");
const video3 = document.querySelector("#video3");
const canvas = document.querySelector("#canvas");
const snap = document.querySelector("#snap");
const constraints = {
    audio: false, // Assuming you don't need audio for the photo capture
    video: {
        width: 600,
        height: 300,
        facingMode: "user" // This will request the front camera
    }
};

async function init() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
    } catch (e) {
        console.error(`navigator.getUserMedia error: ${e.toString()}`);
    }
}

function handleSuccess(stream) {
    window.stream = stream; // make stream available to console
    video.srcObject = stream;
    video1.srcObject = stream;
    video2.srcObject = stream;
    video3.srcObject = stream;
}

init();

video.addEventListener("click",()=>{
    setTimeout(1000);
    video.style.height="104vh";
    video.style.width="auto";
    video1.remove();
    video2.remove();
    video3.remove();
    canvas.remove();
})

video1.addEventListener("click",()=>{
    setTimeout(1000);
    video1.style.height="104vh";
    video1.style.width="auto";
    video.remove();
    video2.remove();
    video3.remove();
    canvas.remove();
})

video2.addEventListener("click",()=>{
    setTimeout(1000);
    video2.style.height="104vh";
    video2.style.width="auto";
    video1.remove();
    video.remove();
    video3.remove();
    canvas.remove();
})

video3.addEventListener("click",()=>{
    setTimeout(1000);
    video3.style.height="104vh";
    video3.style.width="auto";
    video1.remove();
    video2.remove();
    video.remove();
    canvas.remove();
})