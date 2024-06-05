import { images } from './data.js';

// 設定圖片
function setImages() {
    const imageElements = [document.getElementById('image1'), document.getElementById('image2')];
    imageElements.forEach((img, index) => {
        img.src = images[index].src;
    });
}

setImages();

let currentAudio = null;

function playAudio() {
    if (currentAudio) {
        currentAudio.pause();
    }
    const randomIndex = Math.floor(Math.random() * images.length);
    currentAudio = new Audio(images[randomIndex].audio);
    currentAudio.play();
}

function checkAnswer(index) {
    // 檢查答案的邏輯
    // 根據你的具體需求實現檢查邏輯
}

// 將函數附加到 window 對象
window.playAudio = playAudio;
window.checkAnswer = checkAnswer;
