// --- 1. Array of Objects & Array Methods Requirement ---
const contentData = [
    { id: 1, title: "HTML5 Structure", category: "web-dev", desc: "Using clean, semantic elements." },
    { id: 2, title: "CSS3 Styling", category: "design", desc: "Creating beautiful, responsive, and accessible mobile layouts." },
    { id: 3, title: "Dynamic JS", category: "web-dev", desc: "Injecting data components and tracking user behaviors cleanly." }
];

// --- 2. Multiple Functions & Template Literals Requirement ---
function generateCards(items) {
    const container = document.getElementById("dynamic-cards");
    if (!container) return;

    // Filter example using array methods
    const webDevItems = items.filter(item => item.category === "web-dev" || item.category === "design");

    // Clear container and inject data using Template Literals exclusively
    container.innerHTML = "";
    webDevItems.forEach(item => {
        const cardHTML = `
            <div class="card">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
                <span class="badge">${item.category.toUpperCase()}</span>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// --- 3. LocalStorage & Conditional Branching Requirement ---
function trackVisits() {
    const counterDisplay = document.getElementById("visit-counter");
    if (!counterDisplay) return;

    let visitCount = localStorage.getItem("siteVisits");

    // Conditional branching
    if (!visitCount) {
        visitCount = 1;
        counterDisplay.textContent = `Welcome! This is your first visit to our project site.`;
    } else {
        visitCount = parseInt(visitCount) + 1;
        counterDisplay.textContent = `Welcome back! You have visited this page ${visitCount} times.`;
    }

    localStorage.setItem("siteVisits", visitCount);
}

// --- 4. DOM Interaction & Event Listening Requirement ---
function setupNavigation() {
    const toggleBtn = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");

    if (toggleBtn && mainNav) {
        toggleBtn.addEventListener("click", () => {
            mainNav.classList.toggle("open");
            // Simple accessibility modification
            const isOpen = mainNav.classList.contains("open");
            toggleBtn.setAttribute("aria-expanded", isOpen.toString());
        });
    }
}

function updateFooter() {
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
}

// Initialize all features once DOM is fully built
document.addEventListener("DOMContentLoaded", () => {
    generateCards(contentData);
    trackVisits();
    setupNavigation();
    updateFooter();
});