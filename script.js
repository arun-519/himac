// Event data
const eventData = {
    'bi-battle': {   
        category: 'Technical Events',
        title: 'BI BATTLE',
        description: 'Business Intelligence Competition - Showcase your data analytics and business intelligence skills through competitive challenges and case studies.',
        color: 'blue',
        registrationUrl:'https://docs.google.com/forms/d/e/1FAIpQLSepQTMnlqX_1XOX1OieH-HglOF5J62HnMSk56gRs9cb5CUVkg/viewform?usp=publish-editor'
    },
    'stock-war': {
        category: 'Technical Events',
        title: 'STOCK WAR',
        description: 'Stock Market Trading Competition - Test your financial acumen and trading strategies in an exciting simulated stock market environment.',
        color: 'green',
        registrationUrl:'https://docs.google.com/forms/d/e/1FAIpQLSfrRMP1ll_EYkbB42ZoLISOcTboCGU2TPMQOw3o-1ee7idfug/viewform?usp=header'
    },
    'best-manager': {
        category: 'Technical Events',
        title: 'BEST MANAGER',
        description: 'Leadership & Management Competition - Demonstrate exceptional leadership and management skills through strategic business scenarios and team challenges.',
        color: 'purple',
        registrationUrl:'https://docs.google.com/forms/d/e/1FAIpQLScXk6sSQnG6T0pM3-wAV31DjcfGjKsl79ENQ4X5P3ccJOOHDg/viewform?usp=publish-editor'
    },
    'talent-show': {
        category: 'Non-Technical Events',
        title: '1 Minute Talent Show',
        description: 'Quick Talent Showcase - Showcase your unique talents in just one minute. A fast-paced competition where creativity meets brevity.',
        color: 'orange',
        registrationUrl:'https://docs.google.com/forms/d/e/1FAIpQLSdzvgoKhLywGfWg1aRoNZdPbgqJiu6cZe7tkTokvY5hChNbHA/viewform?usp=publish-editor'
    },
    'mime': {
        category: 'Non-Technical Events',
        title: 'Mime',
        description: 'Silent Performance Art - Express stories and emotions through the art of mime. A competition celebrating non-verbal communication and artistic expression.',
        color: 'purple',
        registrationUrl:'https://docs.google.com/forms/d/e/1FAIpQLSf_aBq-vlQux2d5S-mcQwQUwVc3PERwWfWcmR3s3COKlXxGBg/viewform?usp=publish-editor'
    },
    'ipl-auction': {
        category: 'Non-Technical Events',
        title: 'IPL Auction',
        description: 'Cricket Team Auction Simulation - Experience the thrill of an IPL-style auction. Build your dream team and compete in this exciting event.',
        color: 'green',
        registrationUrl:'https://docs.google.com/forms/d/e/1FAIpQLSeoEIumrCbL5hNRwBMW7I6HUqQdk9VNud_2dBz9VIK8ayipVg/viewform?usp=publish-editor'
    },
    'face-painting': {
        category: 'Non-Technical Events',
        title: 'Face Painting',
        description: 'Creative Art Competition - Transform faces into stunning canvases of art through vibrant, themed face painting designs.',
        color: 'pink',
        registrationUrl:'https://docs.google.com/forms/d/e/1FAIpQLScoo1M8z6N-WEgJoB83Av2OcN_gHZ7uQvAzvg-q74z8_7mU8A/viewform?usp=publish-editor'
    },
    'Project-expo': {
        category: 'Non-Technical Events',
        title: 'Project Expo',
        description: 'Entrepreneurship Development Showcase - Present innovative startup ideas and entrepreneurial projects to investors and mentors.',
        color: 'orange', 
        registrationUrl:'https://docs.google.com/forms/d/e/1FAIpQLSfGXBqNChVpY0q1xj7W8MQdNXMjBXW_c9xm37_-rv7eaQYcwg/viewform?usp=publish-editor'
    },
    'brand-to-boardroom': {
        category: 'Technical Events',
        title: 'Brand to Boardroom',
        description: 'Brand Management & Corporate Strategy Competition - Transform your brand vision into boardroom success through strategic planning and brand positioning challenges.',
        color: 'blue',
        registrationUrl:'https://docs.google.com/forms/d/e/1FAIpQLSf9h-EHP9eDwGp-QKpgBnwG7sBc0W0SrN0HOLBNUrBjPo0HQQ/viewform?usp=header'
    },
    'strategix': {
        category: 'Technical Events',
        title: 'STRATEGIX',
        description: 'Strategic Management Competition - Test your strategic thinking and decision-making skills in complex business scenarios and competitive strategy challenges.',
        color: 'purple'
    },
    'vibrant-ventures': {
        category: 'Non-Technical Events',
        title: 'Vibrant Ventures',
        description: 'Entrepreneurship & Innovation Showcase - Present your innovative startup ideas, business models, and entrepreneurial ventures to a panel of judges and potential investors.',
        color: 'cyan',
        registrationUrl:'https://docs.google.com/forms/d/e/1FAIpQLSeJHrZwZzBSlk6gsHFLtUdmabJ1KVLmrQXaX0K9FLkPAk5_1w/viewform?usp=header'
    },
    'treasure-hunt': {
        category: 'Non-Technical Events',
        title: 'Treasure Hunt',
        description: 'A thrilling adventure where participants solve clues and puzzles to find hidden treasures.',
        color: 'gold',
        registrationUrl:'https://docs.google.com/forms/d/e/1FAIpQLSfj77kyCtZmvPTrOU-KkentRnfSMsJOhirj6cD0TzEUOIbieQ/viewform?usp=publish-editor'
    }
};

// Event-specific guidance (shown when clicking event card image)
const eventGuidance = {
    'bi-battle': {
        title: 'BI Battle – Guidelines',
        points: [
            'Participants must bring their own laptop with internet access.',
            'A common dataset will be provided and must be used strictly for all rounds.',
            'Use of external datasets, AI tools, or external assistance is strictly prohibited.',
            'Plagiarism, copying, or sharing of work will lead to immediate disqualification.',
            'Judges\' decisions will be final and binding.',
            'Winners and runners-up will be selected based on overall performance across all rounds.'
        ]
    },
    'stock-war': {
        title: 'Stock War – Guidelines',
        points: [
            'Teams must report at least 15 minutes before the event start time.',
            'Use of personal mobile phones during rounds is strictly prohibited.',
            'Any form of malpractice or unfair means will lead to immediate disqualification.',
            'The decisions of judges and event coordinators will be final and binding.'
        ]
    },
    'mime': {
        title: 'Mime – Guidelines',
        points: [
            'Teams must report at least 15 minutes before the event start time.',
            'Use of personal mobile phones during any round is strictly prohibited, unless explicitly permitted by the coordinators.',
            'Points will be awarded for correct answers, and negative marking may be applied for incorrect answers at the discretion of the coordinators.',
            'Final winners will be decided based on total points scored across all rounds and response time, if required.'
        ]
    },
    'best-manager': {
        title: 'Best Manager – Guidelines',
        points: [
            'This is an individual event.',
            'Participants must report on time for all rounds.',
            'Each round is eliminatory, and decisions of the judges will be final.',
            'Use of unfair means or misconduct will lead to immediate disqualification.',
            'The organizing committee reserves the right to modify the rules or schedule if required.'
        ]
    },
    'brand-to-boardroom': {
        title: 'Brand to Boardroom – Guidelines',
        points: [
            'Teams must report at least 15 minutes before the event start time.',
            'Use of personal mobile phones during any round is strictly prohibited, unless explicitly permitted by the coordinators.',
            'Points will be awarded for correct answers, and negative marking may be applied for incorrect answers at the discretion of the coordinators.',
            'Final winners will be decided based on total points scored across all rounds and response time, if required.'
        ]
    },
    'strategix': {
        title: 'Strategix – Guidelines',
        points: [
            'Participants must report on time for all rounds.',
            'Team must use PESTLE or SWOT Analysis.',
            'Each round is eliminatory, and decisions of the judges will be final.',
            'Use of unfair means or misconduct will lead to immediate disqualification.',
            'The organizing committee reserves the right to modify the rules or schedule if required.'
        ]
    },
    'vibrant-ventures': {
        title: 'Vibrant Ventures – Guidelines',
        points: [
            'Teams must report at least 15 minutes before the event start time.',
            'Use of personal mobile phones during any round is strictly prohibited, unless explicitly permitted by the coordinators.',
            'Points will be awarded for correct answers, and negative marking may be applied for incorrect answers at the discretion of the coordinators.',
            'Final winners will be decided based on total points scored across all rounds and response time, if required.'
        ]
    },
    'face-painting': {
        title: 'Face Painting – Guidelines',
        points: [
            'Participants must report on time for all rounds.',
            'Team must use PESTLE or SWOT Analysis.',
            'Each round is eliminatory, and decisions of the judges will be final.',
            'Use of unfair means or misconduct will lead to immediate disqualification.',
            'The organizing committee reserves the right to modify the rules or schedule if required.'
        ]
    },
    'talent-show': {
        title: 'Talent Show – Guidelines',
        points: [
            'Participants must report on time for all rounds.',
            'Team must use PESTLE or SWOT Analysis.',
            'Each round is eliminatory, and decisions of the judges will be final.',
            'Use of unfair means or misconduct will lead to immediate disqualification.',
            'The organizing committee reserves the right to modify the rules or schedule if required.'
        ]
    },
    'ipl-auction': {
        title: 'IPL Auction – Guidelines',
        points: [
            'Teams must report at least 15 minutes before the event start time.',
            'Use of personal mobile phones during any round is strictly prohibited, unless explicitly permitted by the coordinators.',
            'Points will be awarded for correct answers, and negative marking may be applied for incorrect answers at the discretion of the coordinators.',
            'Final winners will be decided based on total points scored across all rounds and response time, if required.'
        ]
    },
    'Project-expo': {
        title: 'Project Expo – Guidelines',
        points: [
            'Participants must report on time for all rounds.',
            'Team must present the Prototype or Project.',
            'Each round is eliminatory, and decisions of the judges will be final.',
            'Use of unfair means or misconduct will lead to immediate disqualification.',
            'The organizing committee reserves the right to modify the rules or schedule if required.'
        ]
    }
};

// Modal elements
const guidanceModal = document.getElementById('guidanceModal');
const eventModal = document.getElementById('eventModal');
const aboutModal = document.getElementById('aboutModal');
const contactModal = document.getElementById('contactModal');
const sponsorModal = document.getElementById('sponsorModal');
const mapModal = document.getElementById('mapModal');
const modalBody = document.getElementById('modalBody');
const closeGuidanceModal = document.getElementById('closeGuidanceModal');
const closeModal = document.getElementById('closeModal');
const closeAboutModal = document.getElementById('closeAboutModal');
const closeContactModal = document.getElementById('closeContactModal');
const closeSponsorModal = document.getElementById('closeSponsorModal');
const closeMapModal = document.getElementById('closeMapModal');
const eventGuidanceModal = document.getElementById('eventGuidanceModal');
const eventGuidanceTitle = document.getElementById('eventGuidanceTitle');
const eventGuidanceBody = document.getElementById('eventGuidanceBody');
const closeEventGuidanceModal = document.getElementById('closeEventGuidanceModal');
const aboutLink = document.getElementById('aboutLink');
const eventsLink = document.getElementById('eventsLink');
const contactsLink = document.getElementById('contactsLink');
const sponsorLink = document.getElementById('sponsorLink');
const mapLink = document.querySelector('a[href="#map"]');

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

// Open map modal
function openMapModal() {
    mapModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close map modal
function closeMapModalFunc() {
    mapModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Open general guidance popup
function openGuidanceModal() {
    guidanceModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close general guidance popup
function closeGuidanceModalFunc() {
    guidanceModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Open event-specific guidance modal
function openEventGuidanceModal(eventKey) {
    const guidance = eventGuidance[eventKey];
    if (!guidance || !eventGuidanceModal || !eventGuidanceTitle || !eventGuidanceBody) return;
    eventGuidanceTitle.textContent = guidance.title;
    eventGuidanceBody.innerHTML = '<div class="event-guidance-box"><ul class="guidance-list">' +
        guidance.points.map(function(p) { return '<li>' + p + '</li>'; }).join('') +
        '</ul></div>';
    eventGuidanceModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close event guidance modal
function closeEventGuidanceModalFunc() {
    if (eventGuidanceModal) {
        eventGuidanceModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
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

        // Close menu when clicking on a nav link (but not dropdown items)
        const navLinks = mainNav.querySelectorAll('.nav-link:not(.dropdown-item)');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (!this.closest('.nav-dropdown') || window.innerWidth > 768) {
                    hamburgerMenu.classList.remove('active');
                    mainNav.classList.remove('active');
                }
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

    // Event card image click – open event-specific guidance if available
    document.querySelectorAll('.event-card').forEach(function(card) {
        const eventKey = card.getAttribute('data-event');
        const imageArea = card.querySelector('.event-image');
        if (!imageArea || !eventKey) return;
        imageArea.style.cursor = eventGuidance[eventKey] ? 'pointer' : 'default';
        imageArea.addEventListener('click', function() {
            if (eventGuidance[eventKey]) openEventGuidanceModal(eventKey);
        });
    });

    // Register button clicks – redirect to form if event has registrationUrl, else show alert
    const registerButtons = document.querySelectorAll('.register-btn');
    registerButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.event-card');
            const eventKey = card ? card.getAttribute('data-event') : null;
            const event = eventKey ? eventData[eventKey] : null;
            const url = event && event.registrationUrl;
            if (url) {
                window.location.href = url;
            } else {
                alert('Registration functionality will be implemented soon!');
            }
        });
    });

    // Close modal buttons
    if (closeGuidanceModal) closeGuidanceModal.addEventListener('click', closeGuidanceModalFunc);
    if (closeEventGuidanceModal) closeEventGuidanceModal.addEventListener('click', closeEventGuidanceModalFunc);
    closeModal.addEventListener('click', closeEventModal);
    closeAboutModal.addEventListener('click', closeAboutModalFunc);
    closeContactModal.addEventListener('click', closeContactModalFunc);
    closeSponsorModal.addEventListener('click', closeSponsorModalFunc);

    // About link
    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        openAboutModal();
    });

    // Events link - open modal on main link click
    eventsLink.addEventListener('click', function(e) {
        e.preventDefault();
        openEventModal();
    });

    // Dropdown menu items - scroll to event card
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const eventKey = this.getAttribute('data-event');
            if (eventKey) {
                // Close mobile menu if open
                if (hamburgerMenu) {
                    hamburgerMenu.classList.remove('active');
                }
                if (mainNav) {
                    mainNav.classList.remove('active');
                }
                
                // Close dropdown on mobile
                const navDropdown = document.querySelector('.nav-dropdown');
                if (navDropdown) {
                    navDropdown.classList.remove('active');
                }
                
                // Scroll to the event card
                const eventCard = document.querySelector(`[data-event="${eventKey}"]`);
                if (eventCard) {
                    eventCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Highlight the card briefly
                    eventCard.style.transform = 'scale(1.05)';
                    eventCard.style.transition = 'transform 0.3s';
                    setTimeout(() => {
                        eventCard.style.transform = '';
                    }, 500);
                }
            }
        });
    });

    // Mobile dropdown toggle
    const navDropdown = document.querySelector('.nav-dropdown');
    if (navDropdown) {
        const dropdownLink = navDropdown.querySelector('.nav-link');
        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                navDropdown.classList.toggle('active');
            }
        });

        // Close dropdown when clicking outside on mobile
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768 && !navDropdown.contains(e.target)) {
                navDropdown.classList.remove('active');
            }
        });
    }

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

    // Map link
    if (mapLink) {
        mapLink.addEventListener('click', function(e) {
            e.preventDefault();
            openMapModal();
        });
    }

    // Close modal buttons
    if (closeMapModal) {
        closeMapModal.addEventListener('click', closeMapModalFunc);
    }

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

    if (mapModal) {
        mapModal.addEventListener('click', function(e) {
            if (e.target === mapModal) {
                closeMapModalFunc();
            }
        });
    }

    if (guidanceModal) {
        guidanceModal.addEventListener('click', function(e) {
            if (e.target === guidanceModal) {
                closeGuidanceModalFunc();
            }
        });
    }

    if (eventGuidanceModal) {
        eventGuidanceModal.addEventListener('click', function(e) {
            if (e.target === eventGuidanceModal) {
                closeEventGuidanceModalFunc();
            }
        });
    }

    // Close modals with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeGuidanceModalFunc();
            closeEventGuidanceModalFunc();
            closeEventModal();
            closeAboutModalFunc();
            closeContactModalFunc();
            closeSponsorModalFunc();
            closeMapModalFunc();
        }
    });

    // Open general guidance popup once when the website loads
    setTimeout(function() {
        if (guidanceModal) openGuidanceModal();
    }, 300);
});

