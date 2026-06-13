const gallery = document.getElementById("gallery");

const categories = [
    ["nature", 8],
    ["flower", 8],
    ["animal", 8],
    ["cartoon", 8],
    ["travel", 8],
    ["technology", 8]
];

let allImages = [];

categories.forEach(cat => {
    for (let i = 1; i <= cat[1]; i++) {
        allImages.push({
            category: cat[0],
            src: `Images/${cat[0]}${i}.jpg`
        });
    }
});

let currentImages = [];
let currentIndex = 0;

function renderGallery(filter = "all") {
    gallery.innerHTML = "";

    currentImages = filter === "all"
        ? allImages
        : allImages.filter(img => img.category === filter);

    currentImages.forEach((img, index) => {
        gallery.innerHTML += `
            <div class="card" data-index="${index}">
                <img loading="lazy" src="${img.src}">
                <div class="overlay">
                    ${img.category.toUpperCase()}
                </div>
            </div>
        `;
    });

    attachEvents();
}

function attachEvents() {
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            currentIndex = parseInt(card.dataset.index);
            openLightbox();
        });
    });
}

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const counter = document.getElementById("imageCounter");

function openLightbox() {
    lightbox.style.display = "flex";
    updateLightbox();
}

function updateLightbox() {
    lightboxImage.src = currentImages[currentIndex].src;
    if (counter) {
        counter.innerText = `${currentIndex + 1} / ${currentImages.length}`;
    }
}

document.getElementById("closeBtn").onclick = () => {
    lightbox.style.display = "none";
};

document.getElementById("nextBtn").onclick = () => {
    currentIndex++;
    if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }
    updateLightbox();
};

document.getElementById("prevBtn").onclick = () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    }
    updateLightbox();
};

document.addEventListener("keydown", e => {
    if (lightbox.style.display === "flex") {
        if (e.key === "ArrowRight") document.getElementById("nextBtn").click();
        if (e.key === "ArrowLeft") document.getElementById("prevBtn").click();
        if (e.key === "Escape") lightbox.style.display = "none";
    }
});

document.querySelectorAll(".filter-bar button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-bar button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderGallery(btn.dataset.filter);
    });
});

renderGallery();