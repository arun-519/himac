// Event data
const eventData = {
    'bi-battle': {
        category: 'Technical Events',
        title: 'BI BATTLE',
        description: 'Business Intelligence Competition - Showcase your data analytics and business intelligence skills through competitive challenges and case studies.',
        color: 'blue'
    },
    'stock-war': {
        category: 'Technical Events',
        title: 'STOCK WAR',
        description: 'Stock Market Trading Competition - Test your financial acumen and trading strategies in an exciting simulated stock market environment.',
        color: 'green'
    },
    'best-manager': {
        category: 'Technical Events',
        title: 'BEST MANAGER',
        description: 'Leadership & Management Competition - Demonstrate exceptional leadership and management skills through strategic business scenarios and team challenges.',
        color: 'purple'
    },
    'talent-show': {
        category: 'Cultural Events',
        title: '1 Minute Talent Show',
        description: 'Quick Talent Showcase - Showcase your unique talents in just one minute. A fast-paced competition where creativity meets brevity.',
        color: 'orange'
    },
    'mime': {
        category: 'Cultural Events',
        title: 'Mime',
        description: 'Silent Performance Art - Express stories and emotions through the art of mime. A competition celebrating non-verbal communication and artistic expression.',
        color: 'purple'
    },
    'ipl-auction': {
        category: 'Fun Events',
        title: 'IPL Auction',
        description: 'Cricket Team Auction Simulation - Experience the thrill of an IPL-style auction. Build your dream team and compete in this exciting event.',
        color: 'green'
    },
    'face-painting': {
        category: 'Cultural Events',
        title: 'Face Painting',
        description: 'Creative Art Competition - Transform faces into stunning canvases of art through vibrant, themed face painting designs.',
        color: 'pink'
    },
    'startup-expo': {
        category: 'Entrepreneurship Events',
        title: 'Startup Expo',
        description: 'Entrepreneurship Development Showcase - Present innovative startup ideas and entrepreneurial projects to investors and mentors.',
        color: 'orange'
    },
    'brand-to-boardroom': {
        category: 'Business Events',
        title: 'Brand to Boardroom',
        description: 'Brand Management & Corporate Strategy Competition - Transform your brand vision into boardroom success through strategic planning and brand positioning challenges.',
        color: 'blue'
    },
    'strategix': {
        category: 'Technical Events',
        title: 'STRATEGIX',
        description: 'Strategic Management Competition - Test your strategic thinking and decision-making skills in complex business scenarios and competitive strategy challenges.',
        color: 'purple'
    }
};

// Modal elements
const eventModal = document.getElementById('eventModal');
const aboutModal = document.getElementById('aboutModal');
const contactModal = document.getElementById('contactModal');
const sponsorModal = document.getElementById('sponsorModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const closeAboutModal = document.getElementById('closeAboutModal');
const closeContactModal = document.getElementById('closeContactModal');
const closeSponsorModal = document.getElementById('closeSponsorModal');
const aboutLink = document.getElementById('aboutLink');
const eventsLink = document.getElementById('eventsLink');
const contactsLink = document.getElementById('contactsLink');
const sponsorLink = document.getElementById('sponsorLink');

// Group events by category
function groupEventsByCategory() {
    const grouped = {};
    Object.keys(eventData).forEach(key => {
        const event = eventData[key];
        if (!grouped[event.category]) {
            grouped[event.category] = [];
        }
        grouped[event.category].push({ ...event, key });
    });
    return grouped;
}

// Create modal content for events
function createEventModalContent() {
    const grouped = groupEventsByCategory();
    let html = '';

    Object.keys(grouped).forEach(category => {
        html += `<div class="section-title">${category}</div>`;
        grouped[category].forEach(event => {
            html += `
                <div class="event-item ${event.color}">
                    <div class="event-item-title">${event.title}</div>
                    <div class="event-item-description">${event.description}</div>
                </div>
            `;
        });
    });

    html += `
        <div class="event-info-footer">
            <p><strong>All events will be held on 06 March 2026</strong></p>
            <p>at HiCET Valley Campus, Coimbatore</p>
        </div>
    `;

    return html;
}

// Open event modal
function openEventModal() {
    modalBody.innerHTML = createEventModalContent();
    eventModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close event modal
function closeEventModal() {
    eventModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Open about modal
function openAboutModal() {
    aboutModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close about modal
function closeAboutModalFunc() {
    aboutModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Open contact modal
function openContactModal() {
    contactModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close contact modal
function closeContactModalFunc() {
    contactModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Open sponsor modal
function openSponsorModal() {
    sponsorModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close sponsor modal
function closeSponsorModalFunc() {
    sponsorModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mainNav = document.getElementById('mainNav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', function() {
            hamburgerMenu.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        // Close menu when clicking on a nav link
        const navLinks = mainNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerMenu.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburgerMenu.contains(e.target) && !mainNav.contains(e.target)) {
                hamburgerMenu.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });
    }

    // Register button clicks
    const registerButtons = document.querySelectorAll('.register-btn');
    registerButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            // In a real application, this would redirect to a registration page
            alert('Registration functionality will be implemented soon!');
        });
    });

    // Close modal buttons
    closeModal.addEventListener('click', closeEventModal);
    closeAboutModal.addEventListener('click', closeAboutModalFunc);
    closeContactModal.addEventListener('click', closeContactModalFunc);
    closeSponsorModal.addEventListener('click', closeSponsorModalFunc);

    // About link
    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        openAboutModal();
    });

    // Events link
    eventsLink.addEventListener('click', function(e) {
        e.preventDefault();
        openEventModal();
    });

    // Contacts link
    contactsLink.addEventListener('click', function(e) {
        e.preventDefault();
        openContactModal();
    });

    // Sponsor link
    sponsorLink.addEventListener('click', function(e) {
        e.preventDefault();
        openSponsorModal();
    });

    // Close modals when clicking outside
    eventModal.addEventListener('click', function(e) {
        if (e.target === eventModal) {
            closeEventModal();
        }
    });

    aboutModal.addEventListener('click', function(e) {
        if (e.target === aboutModal) {
            closeAboutModalFunc();
        }
    });

    contactModal.addEventListener('click', function(e) {
        if (e.target === contactModal) {
            closeContactModalFunc();
        }
    });

    sponsorModal.addEventListener('click', function(e) {
        if (e.target === sponsorModal) {
            closeSponsorModalFunc();
        }
    });

    // Close modals with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeEventModal();
            closeAboutModalFunc();
            closeContactModalFunc();
            closeSponsorModalFunc();
        }
    });
});

