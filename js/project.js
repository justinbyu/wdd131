// --- Eco-Tips Dynamic Content Array ---
const ecoTipsData = [
    { 
        id: 1, 
        title: "Leave No Trace Principles", 
        category: "Eco-Tip", 
        desc: "Keep wildlife wild and environments pristine. Pack out all trash, leftover food, and organic litter." 
    },
    { 
        id: 2, 
        title: "Low-Impact Footwear Selection", 
        category: "Gear", 
        desc: "Utilize soft-sole trail runners or traditional hiking boots that minimize deep trail erosion while staying on route." 
    },
    { 
        id: 3, 
        title: "Stay on the Designated Path", 
        category: "Trail Safety", 
        desc: "Cutting across switchbacks causes severe soil damage. Protect local plant species by staying within trail boundaries." 
    }
];

// --- Generates cards via array mapping and template literals ---
function displayEcoCards(tips) {
    const cardsContainer = document.getElementById("dynamic-cards");
    if (!cardsContainer) return;

    cardsContainer.innerHTML = ""; // Reset fallback
    
    tips.forEach(tip => {
        const cardTemplate = `
            <div class="card">
                <h4>${tip.title}</h4>
                <p>${tip.desc}</p>
                <span class="badge">${tip.category}</span>
            </div>
        `;
        cardsContainer.innerHTML += cardTemplate;
    });
}

// --- Tracking Visits Using LocalStorage ---
function monitorUserVisits() {
    const counterDisplay = document.getElementById("visit-counter");
    if (!counterDisplay) return;

    let totalVisits = localStorage.getItem("ecoExplorerVisits");

    if (!totalVisits) {
        totalVisits = 1;
        counterDisplay.textContent = "Welcome to EcoTrails Explorer! This is your first visit.";
    } else {
        totalVisits = parseInt(totalVisits) + 1;
        counterDisplay.textContent = `Welcome back, Explorer! You have visited this portal ${totalVisits} times.`;
    }

    localStorage.setItem("ecoExplorerVisits", totalVisits);
}

// --- Navigation Toggle Logic ---
function initMobileNav() {
    const toggleBtn = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");

    if (toggleBtn && mainNav) {
        toggleBtn.addEventListener("click", () => {
            mainNav.classList.toggle("open");
            const isOpen = mainNav.classList.contains("open");
            toggleBtn.setAttribute("aria-expanded", isOpen.toString());
        });
    }
}

// --- Automated Footer Date Controls ---
function setupFooterData() {
    const currentYearElem = document.getElementById("current-year");
    const lastModifiedElem = document.getElementById("last-modified");

    if (currentYearElem) currentYearElem.textContent = new Date().getFullYear();
    if (lastModifiedElem) lastModifiedElem.textContent = document.lastModified;
}

// --- Initialization DOM Event Listener ---
document.addEventListener("DOMContentLoaded", () => {
    displayEcoCards(ecoTipsData);
    monitorUserVisits();
    initMobileNav();
    setupFooterData();
});