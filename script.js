document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector("video");

    video.addEventListener("play", function () {
        console.log("Video is playing");
    });

    video.addEventListener("pause", function () {
        console.log("Video is paused");
    });

    video.addEventListener("ended", function () {
        console.log("Video has ended");
    });
});
