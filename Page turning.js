const bgMusic = document.getElementById("bg-music");
const flipSound = document.getElementById("flip-sound");
const bookContent = document.getElementById("book-content");
const coverPage = document.getElementById("cover-page");
const images = ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg"];
const titles = ["作品標題 1", "作品標題 2", "作品標題 3"];
const descriptions = [
    "這是第一張照片的描述。",
    "這是第二張照片的描述。",
    "這是第三張照片的描述。"
];

let currentIndex = 0;

function startBook() {
    coverPage.style.display = "none";
    bookContent.classList.remove("hidden");
    bgMusic.play();
}

function openBook(index) {
    currentIndex = index;
    updateContent();
    startBook();
}

function updateContent() {
    document.getElementById("prev-img").src = images[currentIndex];
    document.getElementById("title").textContent = titles[currentIndex];
    document.getElementById("description").textContent = descriptions[currentIndex];
}

function nextPage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        flipSound.play();
        updateContent();
    }
}

function prevPage() {
    if (currentIndex > 0) {
        currentIndex--;
        flipSound.play();
        updateContent();
    }
}

function goBack() {
    bookContent.classList.add("hidden");
    coverPage.style.display = "flex";
    bgMusic.pause();
}
