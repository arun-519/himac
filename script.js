 // Poster (small poster) and General Guidelines modal handling
const posterModal = document.getElementById('guidanceModal');
const posterClose = document.getElementById('closeGuidanceModal');
const guidelinesLink = document.getElementById('guidelinesLink');
const guidelinesModal = document.getElementById('guidelinesModal');
const guidelinesClose = document.getElementById('guidelinesClose');

// Auto-open poster modal on first page load (one-time across visits)
function initPosterModal() {
    if (!localStorage.getItem('posterShown')) {
        if (posterModal) {
            posterModal.style.display = 'block';
            localStorage.setItem('posterShown', 'true');
        }
    }
}

// Open General Guidelines modal when nav link clicked
if (guidelinesLink) {
    guidelinesLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (guidelinesModal) {
            guidelinesModal.style.display = 'block';
        }
    });
}

// Close General Guidelines modal with its X button
if (guidelinesClose) {
    guidelinesClose.addEventListener('click', () => {
        if (guidelinesModal) {
            guidelinesModal.style.display = 'none';
        }
    });
}

// Close General Guidelines modal when clicking outside
if (guidelinesModal) {
    window.addEventListener('click', (e) => {
        if (e.target === guidelinesModal) {
            guidelinesModal.style.display = 'none';
        }
    });
}

// Close poster modal with its X button
if (posterClose) {
    posterClose.addEventListener('click', () => {
        if (posterModal) posterModal.style.display = 'none';
    });
}

// Close poster when clicking outside
if (posterModal) {
    window.addEventListener('click', (e) => {
        if (e.target === posterModal) posterModal.style.display = 'none';
    });
}

// Initialize poster modal on page load
document.addEventListener('DOMContentLoaded', initPosterModal);

// Countdown Timer Functionality
function updateCountdown() {
    const eventDate = new Date('2026-03-06').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        document.getElementById('countdownDays').textContent = '00';
        document.getElementById('countdownHours').textContent = '00';
        document.getElementById('countdownMinutes').textContent = '00';
        document.getElementById('countdownSeconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdownDays').textContent = String(days).padStart(2, '0');
    document.getElementById('countdownHours').textContent = String(hours).padStart(2, '0');
    document.getElementById('countdownMinutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('countdownSeconds').textContent = String(seconds).padStart(2, '0');
}

// Initialize countdown
updateCountdown();

// Update countdown every second
setInterval(updateCountdown, 1000);

// Event data (each event now has three organiser contacts)
const eventData = {
    'bi-battle': {
        category: 'Technical Events',
        title: 'BI BATTLE (Data Visualization)',
        description: 'Business Intelligence Competition - Showcase your data analytics and business intelligence skills through competitive challenges and case studies.',
        color: 'blue',
        registrationUrl: 'https://forms.gle/p8GhQYeqK3MGYG36A',
        organizerContacts: [
            { name: 'Mr.Sri Ram R', phone: '+91-63830 24512' },
            { name: 'Mr.Kanishkha Chella E', phone: '+91-94899 63004' },
        ]
    },
    'stock-war': {
        category: 'Technical Events',
        title: 'STOCK WAR',
        description: 'Stock Market Trading Competition - Test your financial acumen and trading strategies in an exciting simulated stock market environment.',
        color: 'green',
        registrationUrl: 'https://forms.gle/4ZBAX1qXxTeVm4p87',
        organizerContacts: [
            { name: 'Ms. Swathilakshmi CV', phone: '+91-8078851872' },
            { name: 'Mr. Vigneswaran S', phone: '+91-8825724369' }
        ]
    },
    'best-manager': {
        category: 'Technical Events',
        title: 'BEST MANAGER',
        description: 'Leadership & Management Competition - Demonstrate exceptional leadership and management skills through strategic business scenarios and team challenges.',
        color: 'purple',
        registrationUrl: 'https://forms.gle/Yi1RJXCMuxmEqWpQ6',
        organizerContacts: [
            { name: 'Mr.Udhayanithi S', phone: '+91-72007 08938' },
            { name: 'Mr.Vengatesh K', phone: '+91-97513 93844' },
        ]
    },
    'Project-expo': {
        category: 'Non-Technical Events',
        title: 'Project Expo',
        description: 'Entrepreneurship Development Showcase - Display your Prototype and entrepreneurial projects to investors and mentors.',
        color: 'orange',
        registrationUrl: 'https://forms.gle/uRL8KnMfFmAJmtpX9',
        organizerContacts: [
            { name: 'Ms.Josephin Rasula', phone: '+91-86107 63539' },
            { name: 'Mr. Jefrin', phone: '+91-93454 14653' },
        ]
    },
    'talent-show': {
        category: 'Non-Technical Events',
        title: 'Talent Show',
        description: 'Quick Talent Showcase - Showcase your unique talents in just one minute. A fast-paced competition where creativity meets brevity.',
        color: 'orange',
        registrationUrl: 'https://forms.gle/FUSo46xjWJQsi4UH7',
        organizerContacts: [
            { name: 'Mr.G.Sharath', phone: '+91-73971 54670' },
            { name: 'Ms.Srimathi.S', phone: '+91-70105 93891' },
            { name: 'Mr.Vijaya Bharathi A', phone: '+91-90805 21305' }
        ]
    },
    'mime': {
        category: 'Non-Technical Events',
        title: 'Mime',
        description: 'Silent Performance Art - Express stories and emotions through the art of mime. A competition celebrating non-verbal communication and artistic expression.',
        color: 'purple',
        registrationUrl: 'https://forms.gle/LufUuK9RzNRcBKzQ7',
        organizerContacts: [
            { name: 'Mr.Kishore R', phone: '+91-95976 12550' },
            { name: 'Mr.Gokul S', phone: '+91-82208 16426' },
            { name: 'Ms.Abinaya S', phone: '+91-99943 86854' }
        ]
    },
    'Hpl-auction': {
        category: 'Non-Technical Events',
        title: 'HPL Auction',
        description: 'Cricket Team Auction Simulation - Experience the thrill of an IPL-style auction. Build your dream team and compete in this exciting event.',
        color: 'green',
        registrationUrl: 'https://forms.gle/khL6FC18kpvS52or7',
        organizerContacts: [
            { name: 'Mr.Dinesh Kumar', phone: '+91-70103 10419' },
            { name: 'Ms.Kowslaya .M', phone: '+91-88380 32990' },
            { name: 'Ms.Shini D', phone: '+91-90259 33769' }
        ]
    },
    'face-painting': {
        category: 'Non-Technical Events',
        title: 'Face Painting',
        description: 'Creative Art Competition - Transform faces into stunning canvases of art through vibrant, themed face painting designs.',
        color: 'pink',
        registrationUrl: 'https://forms.gle/dYGUhsu858EH7UV3A',
        organizerContacts: [
            { name: 'Ms.Fazeena', phone: '+91-85904 72387' },
            { name: 'Ms.Nandhini S.B', phone: '+91-93800 05040' },
            { name: 'Ms.Riddhi M', phone: '+91-63741 93993' }
        ]
    },
    'brand-to-boardroom': {
        category: 'Technical Events',
        title: 'Brand to Boardroom (Quiz & Digitalise it)',
        description: 'Brand Management & Corporate Strategy Competition - Transform your brand vision into boardroom success through strategic planning and brand positioning challenges.',
        color: 'blue',
        registrationUrl: 'https://forms.gle/MqcnoBEDNsKHrjFNA',
        organizerContacts: [
            { name: 'Mr. Jashwa', phone: '+91-8608774454' },
            { name: 'Mr. Pown Kumar ', phone: '+91-87548 86957' },
        ]
    },
    'strategix': {
        category: 'Technical Events',
        title: 'STRATEGIX (Business Simulation)',
        description: 'Strategic Management Competition - Test your strategic thinking and decision-making skills in complex business scenarios and competitive strategy challenges.',
        color: 'purple',
        registrationUrl: 'https://forms.gle/sHm7hBZnEGfV8MtBA',
        organizerContacts: [
            { name: 'Mr. Pravin V', phone: '+91-88500 36868' },
            { name: 'Mr.Kavin Siddharth B', phone: '+91-97912 82410' },
        ]
    },
    'vibrant-ventures': {
        category: 'Technical Events',
        title: 'Vibrant Ventures (Idea / Business Plan Pitching)',
        description: 'Entrepreneurship & Innovation Showcase - Present your innovative startup ideas, business models, and entrepreneurial ventures to a panel of judges and potential investors.',
        color: 'cyan',
        registrationUrl: 'https://forms.gle/bRcbECBuymh7aijS7',
        organizerContacts: [
            { name: 'Ms. Josephin Rasula I', phone: '+91-86107 63539' },
            { name: 'Mr. Jefrin', phone: '+91-93454 14653' },
        ]
    },
    'treasure-hunt': {
        category: 'Non-Technical Events',
        title: 'Treasure Hunt',
        description: 'A thrilling adventure where participants solve clues and puzzles to find hidden treasures.',
        color: 'gold',
        registrationUrl: 'https://forms.gle/MihxTH8CP3HuD7Yh9',
        organizerContacts: [
            { name: 'Mr.Prabhu S', phone: '+91-95244 20445' },
            { name: 'Mr.Kathirvelavan G', phone: '+91-82481 05167' },
        ]
    }
};

// Event-specific guidance (shown when clicking event card image)
const eventGuidance = {
    'bi-battle': {
        title: 'BI Battle – Guidelines',
        points: [
            '4 members per team.', 
            'Teams must use the provided dataset only.',
            'Visualizations must be original and clearly labeled.',
            'Any form of plagiarism or malpractice will lead to disqualification.',
            'Students must bring thier own Laptops',
            'Submissions must be made within the given time limit.',
            'Judges’ decisions will be final and binding.'
        ]
    },
    'stock-war': {
        title: 'Stock War – Guidelines',
        points: [
            '3 members per team.',
           'Trading allowed only during event hours.',
           'Smart Phones & Laptops are allowed.',
           'No unfair practices; violations lead to disqualification.',
           'Judges’ decisions are final.'
        ]
    },
    'mime': {
        title: 'Mime – Guidelines',
        points: [
            '1-7 members per team.',
            'Time limit: 5-7 mins/ team',
            'Use of physical props is strictly prohibited.',
            'Instrumental background music is highly recommended.',
            'Act must not contain any vulgarity, obscenity, or offensive gestures.',
            'Creativity and expression will be judged.',
            'Judges’ decision will be final and binding.'
        ]
    },
    'best-manager': {
        title: 'Best Manager – Guidelines',
        points: [
            'Individual event.',
            'Formal attire recommended.',
            'Digital devices are restricted.',
            'All rounds are elimination-based.',
            'Expect crisis challenges, simulations, escape/problem-solving tasks.'
        ]
    },
    'brand-to-boardroom': {
        title: 'Brand to Boardroom – Guidelines',
        points: [
            '4 members per team.',
            'Teams must report on time.',
            'Use of electronic devices is not allowed.',
            'No discussion or external help during the quiz.',
            'Any malpractice will lead to disqualification.',
            'Judges’ decision will be final.'
        ]
    },
    'strategix': {
        title: 'Strategix – Guidelines',
        points: [
            '4 members per team.',
            'Use the provided platform only.',
            'Submit decisions on time.',
            'No unfair practices.',
            'Results determine winners.',
            'Judges’ decisions are final.'
        ]
    },
    'vibrant-ventures': {
        title: 'Vibrant Ventures – Guidelines',
        points: [
            '1-4 members per team.',
            'Teams must present original ideas / business plan.',
            'Time limits must be strictly followed (Maximum : 10 minutes).',
            'Plagiarism or unfair practices lead to disqualification.',
            'Evaluation is based on innovation and feasibility.',
            'Judges’ decisions are final.'
        ]
    },
    'face-painting': {
        title: 'Face Painting – Guidelines',
        points: [
            '2 members per team.',
            'Theme will be given on 4 Mar 2026',
            'Time Limit : 3 hours',
            'Teams must use safe, non-toxic colors.',
            'Creativity and neatness will be judged.',
            'No copying others’ designs.',
            'Time limits must be followed.',
            'Judges’ decisions are final.'
        ]
    },
    'talent-show': {
        title: 'Talent Show – Guidelines',
        points: [
            '1-5 members per team.',
            'Performances must be original.',
            'Time limit (Maximum: 5 minutes).',
            'No offensive content allowed.',
            'Use of props or equipment must be preapproved.',
            'Judges’ decisions are final.'
        ]
    },
    'Hpl-auction': {
        title: 'HPL Auction – Guidelines',
        points: [
            '4 members per team.',
            'Each team has a fixed budget to buy players.',
            'Bidding is open only during the auction session.',
            'Player will be alloted to highest bidder.',
            'No unfair practices or collusion allowed.',
            'Decisions by the auctioneer are final.'
        ]
    },
    'Project-expo': {
        title: 'Project Expo – Guidelines',
        points: [
            '1-6 members per team.',
            'Project / Prototype must be original, Plagiarism leads to disqualification.',
            'All required materials must be set up in advance.',
            'Evaluation criteria : creativity, clarity, and functionality.',
            'Judges’ decisions are final.'
        ]
    },
    'treasure-hunt': {
        title: 'Treasure Hunt – Guidelines',
        points: [
            '5 members per team.',
            'Teams must follow the given clues in order.',
            'No external help or shortcuts allowed.',
            'Time limits must be strictly followed.',
            'Any unfair means will lead to disqualification.',
            'Judges’ decisions are final.'
        ]
    }
};

// Modal elements
const guidanceModal = document.getElementById('guidanceModal');
const eventModal = document.getElementById('eventModal');
const aboutModal = document.getElementById('aboutModal');
const contactModal = document.getElementById('contactModal');
const sponsorModal = document.getElementById('sponsorModal');
const shoppingModal = document.getElementById('shoppingModal');
const mapModal = document.getElementById('mapModal');
const modalBody = document.getElementById('modalBody');
const closeGuidanceModal = document.getElementById('closeGuidanceModal');
const closeModal = document.getElementById('closeModal');
const closeAboutModal = document.getElementById('closeAboutModal');
const closeContactModal = document.getElementById('closeContactModal');
const closeSponsorModal = document.getElementById('closeSponsorModal');
const closeShoppingModal = document.getElementById('closeShoppingModal');
const closeMapModal = document.getElementById('closeMapModal');
const eventGuidanceModal = document.getElementById('eventGuidanceModal');
const eventGuidanceTitle = document.getElementById('eventGuidanceTitle');
const eventGuidanceBody = document.getElementById('eventGuidanceBody');
const closeEventGuidanceModal = document.getElementById('closeEventGuidanceModal');
const aboutLink = document.getElementById('aboutLink');
const eventsLink = document.getElementById('eventsLink');
const contactsLink = document.getElementById('contactsLink');
const sponsorLink = document.getElementById('sponsorLink');
const shoppingLink = document.getElementById('shoppingLink');
const mapLink = document.querySelector('a[href="#map"]');
const instagramLink = document.getElementById('instagramLink');

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
                    <div class="event-organizer">${(event.organizerContacts||[]).map(function(c){return '<div class="org-line"><strong>'+ (c.name||'TBD') +'</strong> &mdash; <a href="tel:'+ (c.phone||'') +'">'+ (c.phone||'N/A') +'</a></div>';}).join('')}</div>
                </div>
            `;
        });
    });

    html += `
        <div class="event-info-footer">
            <p><strong>All events will be held on 06 March 2026</strong></p>
            <p>at Hindusthan College of Engineering and Technology, Valley Campus, Coimbatore</p>
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

// Open shopping modal
function openShoppingModal() {
    shoppingModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close shopping modal
function closeShoppingModalFunc() {
    shoppingModal.classList.remove('show');
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
    if (closeShoppingModal) closeShoppingModal.addEventListener('click', closeShoppingModalFunc);

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

    // Instagram link - open contact modal and scroll to Instagram section
    if (instagramLink) {
        instagramLink.addEventListener('click', function(e) {
            e.preventDefault();
            openContactModal();
            setTimeout(function() {
                const section = document.getElementById('instagramSection');
                if (section) section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 120);
        });
    }

    // Sponsor link
    sponsorLink.addEventListener('click', function(e) {
        e.preventDefault();
        openSponsorModal();
    });

    // Shopping & Entertainment link
    if (shoppingLink) {
        shoppingLink.addEventListener('click', function(e) {
            e.preventDefault();
            openShoppingModal();
        });
    }

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

    if (shoppingModal) {
        shoppingModal.addEventListener('click', function(e) {
            if (e.target === shoppingModal) {
                closeShoppingModalFunc();
            }
        });
    }

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

// Toggle Read More Content Function
function toggleContent(contentId, button) {
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.toggle('active');
        button.textContent = content.classList.contains('active') ? 'Read Less' : 'Read More';
        button.classList.toggle('active');
    }
}
