const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carousel = document.querySelector('.carousel');
const videos = carousel.querySelectorAll('iframe');

let currentVideoIndex = 0;

function showVideo(index) {
    videos.forEach((video, i) => {
        if (i === index) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    showVideo(currentVideoIndex);
}

function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    showVideo(currentVideoIndex);
}

nextButton.addEventListener('click', nextVideo);
prevButton.addEventListener('click', prevVideo);

showVideo(currentVideoIndex);
