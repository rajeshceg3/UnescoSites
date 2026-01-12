document.addEventListener('DOMContentLoaded', () => {
    // Data
    const heritageSitesData = [
        {
            id: 1,
            name: "Great Living Chola Temples",
            short_description: "Magnificent 11th/12th-century Hindu temples representing the pinnacle of Chola architecture.",
            long_description: "Step into a realm where stone sings and history breathes. The Great Living Chola Temples are not mere monuments; they are epic poems carved in granite, a testament to an empire that defined a golden age. Imagine standing before the Brihadeeswara Temple at Thanjavur, its colossal 216-foot vimana piercing the heavens, a marvel of engineering that seems to defy gravity. Picture the sunlight catching the intricate carvings, each telling a story of gods and mortals, of celestial dancers frozen in time. Then, journey to Gangaikondacholapuram, where the temple rises like a feminine counterpart to Thanjavur's grandeur, its sculptures exuding a unique grace. Finally, lose yourself in the miniature-like details of the Airavatesvara Temple at Darasuram, where the steps leading to the sanctum produce musical notes, a symphony in stone. To photograph these temples is to capture the soul of a civilization, a living heritage where ancient rituals still echo in the sacred halls.",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Le_temple_de_Brihadishwara_%28Tanjore%2C_Inde%29_%2814354574611%29.jpg/800px-Le_temple_de_Brihadishwara_%28Tanjore%2C_Inde%29_%2814354574611%29.jpg",
            coordinates: "N10 46 59 E79 7 57",
            site_type: 'temple',
            year_built: "1003-1173 CE",
            dynasty: "Chola Empire"
        },
        {
            id: 2,
            name: "Group of Monuments at Mahabalipuram",
            short_description: "7th/8th-century Pallava rock-cut sanctuaries and the famous Shore Temple by the sea.",
            long_description: "Feel the salt-laced wind on your face as you witness the symphony of rock and sea at Mahabalipuram. This is where the Pallava kings dreamt in stone, carving their faith into the very bedrock of the Coromandel Coast. Stand in awe before the 'Descent of the Ganges,' a colossal open-air relief where an entire universe of gods, elephants, and ascetics comes to life. Frame your lens on the iconic Shore Temple, its silhouette a timeless sentinel against the breaking waves of the Bay of Bengal, a sight that has captivated sailors for centuries. Wander among the Pancha Rathas, five monolithic chariots, each a unique architectural masterpiece, standing as if paused in a divine procession. Capturing Mahabalipuram is a dance between the raw power of the ocean and the sublime artistry of a dynasty that dared to sculpt mountains.",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/01MahabalipuramShoreTemple.jpg/800px-01MahabalipuramShoreTemple.jpg",
            coordinates: "N12 37 0.012 E80 11 30.012",
            site_type: 'temple',
            year_built: "630-728 CE",
            dynasty: "Pallava Dynasty"
        },
        {
            id: 3,
            name: "Nilgiri Mountain Railway",
            short_description: "Historic metre-gauge railway scaling the Nilgiri hills using unique rack and pinion system.",
            long_description: "All aboard a time machine on wheels! The Nilgiri Mountain Railway is not just a train ride; it's a journey into the heart of the 'Blue Mountains.' As the charming, blue steam locomotive chugs to life, you're transported to an era of colonial charm and formidable engineering. Feel the gentle sway of the carriage as it click-clacks its way up one of the steepest railway tracks in the world, a testament to human ingenuity against the odds. The air grows cooler, scented with the fragrance of eucalyptus and tea plantations. Every curve reveals a new vista, a breathtaking panorama of emerald valleys and mist-shrouded peaks. To photograph this railway is to capture the romance of slow travel, the joy of a journey that is as spectacular as the destination itself.",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Nilgiri_Mountain_Railway_train.jpg/800px-Nilgiri_Mountain_Railway_train.jpg",
            coordinates: "N11 30 37.008 E76 56 8.988",
            site_type: 'railway',
            year_built: "1908",
            dynasty: "British Colonial Government"
        },
        {
            id: 4,
            name: "Western Ghats (Kalakad-Mundanthurai)",
            short_description: "Biodiversity hotspot: Kalakad-Mundanthurai Tiger Reserve in the Agasthyamalai sub-cluster.",
            long_description: "Venture into a world that time forgot, a realm of staggering biodiversity older than the Himalayas themselves. The Western Ghats are not just mountains; they are a vibrant, living tapestry of evolution. In the Kalakad-Mundanthurai Tiger Reserve, every rustle in the undergrowth, every bird call from the canopy, tells a story of survival. Here, the air is thick with the scent of damp earth and wild blossoms. Your lens can capture the raw, untamed beauty of montane forests, the silent tread of a leopard, or the majestic stride of an elephant. This is a place to feel humbled by the sheer force of nature, to witness a world where tigers still roam free and countless species thrive in a delicate, ancient balance. Photographing the Western Ghats is to document a precious, irreplaceable jewel of our planet's natural heritage.",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Kalakkad_Mundanthurai_Tiger_Reserve.jpg/800px-Kalakkad_Mundanthurai_Tiger_Reserve.jpg",
            coordinates: "N8 31 47 E77 14 59",
            site_type: 'nature',
            year_built: "Established 1988",
            dynasty: "Natural Formation"
        },
        {
            id: 5,
            name: "Western Ghats (Mukurti National Park)",
            short_description: "High-altitude grasslands and sholas in the Nilgiris, home to the endangered Nilgiri Tahr.",
            long_description: "Ascend to the 'roof of the Nilgiris,' where the sky feels within arm's reach and the landscape unfolds like a painter's canvas. Mukurti National Park is a realm of rolling grasslands and mystical shola forests, a high-altitude sanctuary that is both serene and wild. Here, you can witness the rare and endangered Nilgiri Tahr, a mountain goat that defies gravity on the sheer cliffs, its silhouette a symbol of the park's fragile beauty. Feel the crisp mountain air and the silence, broken only by the whisper of the wind through the grasslands. To photograph Mukurti is to capture the subtle interplay of light and shadow on the rolling hills, the vibrant hues of endemic wildflowers, and the enduring spirit of a unique ecosystem that thrives at the edge of the world.",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Nilgiri_Tahr_in_Mukurthi_National_Park.jpg/800px-Nilgiri_Tahr_in_Mukurthi_National_Park.jpg",
            coordinates: "N11 19 50 E76 18 34",
            site_type: 'nature',
            year_built: "Established 1982",
            dynasty: "Natural Formation"
        },
        {
            id: 6,
            name: "Brihadeeswara Temple, Thanjavur",
            short_description: "The crown jewel of Chola architecture, built by Raja Raja Chola I with the world's first granite dome.",
            long_description: "Prepare to be humbled by the sheer ambition of the Brihadeeswara Temple, the 'Big Temple' of Thanjavur. This is more than a temple; it is a declaration of faith, power, and artistic vision. As you step into its vast courtyard, your eyes are drawn irresistibly upward to the 216-foot vimana, a pyramid of granite that has dominated the skyline for over a thousand years. How did they lift the 80-ton monolithic dome to its summit? The question lingers in the air, a testament to the Cholas' engineering genius. Every surface of this temple is alive with detail, from the massive Shiva linga in the sanctum to the exquisite carvings of dancers that seem to move in the flickering light. To photograph Brihadeeswara is to attempt to capture infinity, to frame a monument that is both a testament to human achievement and a gateway to the divine.",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Brihadishvara_Temple_Thanjavur.jpg/800px-Brihadishvara_Temple_Thanjavur.jpg",
            coordinates: "N10 46 59 E79 7 57",
            site_type: 'temple',
            year_built: "1003-1010 CE",
            dynasty: "Chola Empire"
        }
    ];

    // DOM Elements
    const elements = {
        sitesContainer: document.getElementById('sites-container'),
        siteDetailModal: document.getElementById('site-detail-modal'),
        modalHeaderContainer: document.getElementById('modal-header-container'),
        modalBody: document.getElementById('modal-body'),
        searchInput: document.getElementById('search-input'),
        clearSearchButton: document.getElementById('clear-search-btn'),
        navLinks: document.querySelectorAll('.nav-link'),
        navToggle: document.querySelector('.nav-toggle'),
        mainNav: document.getElementById('main-nav'),
        header: document.querySelector('header'),
        contentSections: document.querySelectorAll('.content-section'),
        featuredSiteContainer: document.getElementById('featured-site'),
        featuredSiteContent: document.getElementById('featured-site-content'),
        timelineContainer: document.getElementById('interactive-timeline'),
        galleryFilters: document.querySelectorAll('.filter-btn'),
        galleryItems: document.querySelectorAll('.gallery-item')
    };

    let state = {
        mapInstance: null,
        markers: {},
        isNavOpen: false
    };

    // --- Navigation & Scroll Interaction ---
    function toggleMobileNav() {
        state.isNavOpen = !state.isNavOpen;
        elements.mainNav.classList.toggle('open', state.isNavOpen);
        const icon = elements.navToggle.querySelector('i');
        icon.className = state.isNavOpen ? 'fas fa-times' : 'fas fa-bars';
    }

    elements.navToggle.addEventListener('click', toggleMobileNav);

    // Close nav when clicking outside
    document.addEventListener('click', (e) => {
        if (state.isNavOpen && !elements.mainNav.contains(e.target) && !elements.navToggle.contains(e.target)) {
            toggleMobileNav();
        }
    });

    // Sticky Header Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            elements.header.classList.add('scrolled');
        } else {
            elements.header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling & Section Activation
    elements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.dataset.section;

            // Close mobile nav if open
            if (state.isNavOpen) toggleMobileNav();

            // Handle section visibility (mostly for single-page feel if sections were hidden)
            // But with the new design, we might just scroll to them.
            // However, the original logic hid sections. Let's keep the scroll-to logic primarily
            // but also ensure the section is "active" for any specific logic.

            const targetSection = document.getElementById(targetId);
            if(targetSection) {
                 // For map section specifically, we might need to trigger map resize
                if (targetId === 'map-view-section') {
                   setTimeout(() => {
                       if(state.mapInstance) state.mapInstance.invalidateSize();
                       else initializeMap();
                   }, 300);
                }

                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- Content Rendering ---

    function displaySites(sites) {
        elements.sitesContainer.innerHTML = '';
        if (sites.length === 0) {
            elements.sitesContainer.innerHTML = '<p class="no-results">No matching sites found.</p>';
            return;
        }

        sites.forEach(site => {
            const siteCard = document.createElement('article');
            siteCard.className = 'site-card';
            siteCard.dataset.siteId = site.id;
            siteCard.innerHTML = `
                <div class="card-img-container">
                    <img src="${site.image_url}" alt="${site.name}" loading="lazy">
                </div>
                <div class="card-content">
                    <h2>${site.name}</h2>
                    <p class="short-desc">${site.short_description}</p>
                    <a href="#" class="learn-more" data-id="${site.id}">Explore Details</a>
                </div>
            `;
            elements.sitesContainer.appendChild(siteCard);
        });

        // Trigger animations for new elements
        setupScrollAnimations();
    }

    function displayFeaturedSite() {
        const featuredSite = heritageSitesData[Math.floor(Math.random() * heritageSitesData.length)];
        elements.featuredSiteContent.innerHTML = `
            <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
                <img src="${featuredSite.image_url}" alt="${featuredSite.name}" style="max-width: 150px; border-radius: 8px;">
                <div>
                    <h3>${featuredSite.name}</h3>
                    <p>${featuredSite.short_description}</p>
                    <a href="#" class="learn-more" data-id="${featuredSite.id}">Discover More</a>
                </div>
            </div>
        `;
        elements.featuredSiteContainer.classList.remove('hidden');
    }

    function renderTimeline() {
        const timelineData = [
            { year: 'c. 600-900 CE', event: 'Pallava Dynasty', description: 'Pioneered rock-cut architecture at Mahabalipuram.' },
            { year: 'c. 850-1279 CE', event: 'Chola Dynasty', description: 'Perfected Dravidian temple architecture, building the Great Living Chola Temples.' },
            { year: '1908', event: 'Nilgiri Mountain Railway', description: 'Completed by the British, a marvel of engineering.' },
            { year: '1984', event: 'UNESCO Recognition', description: 'Mahabalipuram monuments recognized as a World Heritage Site.' },
            { year: '1987, 2004', event: 'UNESCO Recognition', description: 'Great Living Chola Temples inscribed.' },
        ];

        let timelineHTML = '';
        timelineData.forEach((item, index) => {
            // Alternating sides logic is handled by CSS nth-child
            timelineHTML += `
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <span class="timeline-year" style="color: var(--color-accent-primary); font-weight: 600;">${item.year}</span>
                        <h4>${item.event}</h4>
                        <p>${item.description}</p>
                    </div>
                </div>
            `;
        });
        elements.timelineContainer.innerHTML = timelineHTML;
    }

    // --- Search Functionality ---
    elements.searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        elements.clearSearchButton.classList.toggle('hidden', searchTerm === '');

        const filteredSites = heritageSitesData.filter(site =>
            site.name.toLowerCase().includes(searchTerm) ||
            site.short_description.toLowerCase().includes(searchTerm)
        );
        displaySites(filteredSites);
    });

    elements.clearSearchButton.addEventListener('click', () => {
        elements.searchInput.value = '';
        elements.clearSearchButton.classList.add('hidden');
        displaySites(heritageSitesData);
    });

    // --- Modal Logic ---
    function openModal(siteId) {
        const site = heritageSitesData.find(s => s.id === parseInt(siteId));
        if (!site) return;

        // Set Header Image
        elements.modalHeaderContainer.innerHTML = `
            <img src="${site.image_url}" alt="${site.name}" class="modal-header-img">
        `;

        // Set Body Content
        elements.modalBody.innerHTML = `
            <h2>${site.name}</h2>
            <div class="site-meta" style="display: flex; gap: 16px; margin-bottom: 24px; color: var(--color-text-secondary); font-size: 0.9rem;">
                 <span><i class="fas fa-calendar-alt"></i> ${site.year_built || 'Unknown'}</span>
                 <span><i class="fas fa-crown"></i> ${site.dynasty || 'Various'}</span>
                 <span><i class="fas fa-map-marker-alt"></i> ${site.coordinates}</span>
            </div>
            <p style="font-size: 1.1rem; line-height: 1.8;">${site.long_description}</p>
        `;

        elements.siteDetailModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        elements.siteDetailModal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
        setTimeout(() => {
            elements.modalHeaderContainer.innerHTML = '';
            elements.modalBody.innerHTML = '';
        }, 300);
    }

    document.body.addEventListener('click', (event) => {
        // Use closest to handle clicks on child elements of the button
        const learnMoreBtn = event.target.closest('.learn-more');
        const closeModalBtn = event.target.closest('[data-close-modal]');

        if (learnMoreBtn) {
            event.preventDefault();
            openModal(learnMoreBtn.dataset.id);
        } else if (closeModalBtn) {
            closeModal();
        }
    });

    // --- Gallery Filtering ---
    elements.galleryFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            elements.galleryFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.dataset.filter;

            elements.galleryItems.forEach(item => {
                if (filterValue === 'all' || item.dataset.site === filterValue) {
                    item.style.display = 'block';
                    // Trigger reflow for animation if we add it later
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // --- Map Logic ---
    function initializeMap() {
        if (state.mapInstance) return;

        const mapContainer = document.getElementById('map-container');
        if (!mapContainer) return;

        const tamilNaduCenter = [10.7905, 78.7047];
        const initialZoom = 7;

        state.mapInstance = L.map('map-container', {
            scrollWheelZoom: false // Better UX for scrolling pages
        }).setView(tamilNaduCenter, initialZoom);

        // Layers
        const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(state.mapInstance);

        const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri'
        });

        // Layer Switcher
        document.getElementById('map-layer-switcher').addEventListener('change', (e) => {
            if (e.target.value === 'satellite') {
                state.mapInstance.addLayer(satelliteLayer);
                state.mapInstance.removeLayer(osmLayer);
            } else {
                state.mapInstance.addLayer(osmLayer);
                state.mapInstance.removeLayer(satelliteLayer);
            }
        });

        // Icons
        const createIcon = (iconClass, color) => L.divIcon({
            html: `<i class="${iconClass}" style="color: ${color}; font-size: 24px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));"></i>`,
            className: 'map-marker-custom',
            iconSize: [30, 30],
            iconAnchor: [15, 30],
            popupAnchor: [0, -30]
        });

        const icons = {
            temple: createIcon('fa-solid fa-gopuram', '#C70039'),
            railway: createIcon('fa-solid fa-train', '#005A4B'),
            nature: createIcon('fa-solid fa-tree', '#2E8B57')
        };

        // Add Markers
        heritageSitesData.forEach(site => {
            if (site.coordinates) {
                const { lat, lon } = parseCoordinates(site.coordinates);
                if (lat && lon) {
                    const icon = icons[site.site_type] || icons.temple;
                    const marker = L.marker([lat, lon], { icon }).addTo(state.mapInstance);

                    const popupContent = `
                        <div class="map-popup-content" style="text-align:center;">
                            <h3 style="margin: 0 0 8px 0; font-size: 1rem;">${site.name}</h3>
                            <button class="learn-more" data-id="${site.id}" style="font-size: 0.8rem; border: none; background: none; cursor: pointer; padding: 0; color: var(--color-accent-primary);">View Details</button>
                        </div>
                    `;

                    marker.bindPopup(popupContent);
                    state.markers[site.id] = marker;
                }
            }
        });
    }

    function setupMapObserver() {
        const mapSection = document.getElementById('map-view-section');
        if (!mapSection) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    initializeMap();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(mapSection);
    }

    function parseCoordinates(coordString) {
        // Simple parser for N10 46 59 E79 7 57 format
        // This regex is specific to the data format provided
        const regex = /N(\d+)\s(\d+)\s(\d+(\.\d+)?)\sE(\d+)\s(\d+)\s(\d+(\.\d+)?)/;
        const match = coordString.match(regex);

        if (match) {
            const lat = parseFloat(match[1]) + parseFloat(match[2])/60 + parseFloat(match[3])/3600;
            const lon = parseFloat(match[5]) + parseFloat(match[6])/60 + parseFloat(match[7])/3600;
            return { lat, lon };
        }
        return { lat: null, lon: null };
    }

    // --- Animations ---
    function setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        // Apply to cards that might not have the class yet (if re-rendered)
        // Note: CSS handles the initial state (.site-card has opacity 0 logic if added properly)
        // We need to ensure inline styles don't conflict or we rely on class additions.
        // Let's manually fade them in via JS for consistent control if CSS isn't enough.

        const cards = document.querySelectorAll('.site-card');
        cards.forEach(card => {
             // Check if already visible
             if(getComputedStyle(card).opacity !== '1') {
                 // Initial state set in CSS:
                 // .site-card { opacity: 0; transform: translateY(20px); }
                 observer.observe(card);
             }
        });
    }

    // Initialize
    displaySites(heritageSitesData);
    displayFeaturedSite();
    renderTimeline();
    setupMapObserver();

    // Map is initialized when section is scrolled to or if user navigates there directly
    if(window.location.hash === '#map-view-section') {
        initializeMap();
    }
});
