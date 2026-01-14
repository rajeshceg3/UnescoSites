document.addEventListener('DOMContentLoaded', () => {
    // Data
    const heritageSitesData = [
        {
            id: 1,
            name: "Great Living Chola Temples",
            short_description: "Magnificent 11th/12th-century Hindu temples representing the pinnacle of Chola architecture.",
            long_description: "Step into a realm where stone sings and history breathes. The Great Living Chola Temples are not mere monuments; they are epic poems carved in granite, a testament to an empire that defined a golden age. Imagine standing before the Brihadeeswara Temple at Thanjavur, its colossal 216-foot vimana piercing the heavens, a marvel of engineering that seems to defy gravity. Picture the sunlight catching the intricate carvings, each telling a story of gods and mortals, of celestial dancers frozen in time. Then, journey to Gangaikondacholapuram, where the temple rises like a feminine counterpart to Thanjavur's grandeur, its sculptures exuding a unique grace. Finally, lose yourself in the miniature-like details of the Airavatesvara Temple at Darasuram, where the steps leading to the sanctum produce musical notes, a symphony in stone. To photograph these temples is to capture the soul of a civilization, a living heritage where ancient rituals still echo in the sacred halls.",
            image_url: "images/great_chola_temples.svg",
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
            image_url: "images/mahabalipuram_monuments.svg",
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
            image_url: "images/nilgiri_mountain_railway.svg",
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
            image_url: "images/western_ghats_kalakad.svg",
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
            image_url: "images/western_ghats_mukurti.svg",
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
            image_url: "images/brihadeeswara_temple.svg",
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
        featuredSiteContainer: document.getElementById('featured-site'),
        featuredSiteContent: document.getElementById('featured-site-content'),
        timelineContainer: document.getElementById('interactive-timeline'),
        galleryFilters: document.querySelectorAll('.filter-btn'),
        galleryItems: document.querySelectorAll('.gallery-item'),
        heroBackground: document.querySelector('.hero-background'),
        mouseScroll: document.querySelector('.scroll-indicator')
    };

    let state = {
        mapInstance: null,
        markers: {},
        isNavOpen: false
    };

    // --- Navigation & Header Effects ---

    // Parallax Effect for Hero
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Sticky Header
        if (scrollY > 20) {
            elements.header.classList.add('scrolled');
            // Hide scroll indicator on scroll
            if (elements.mouseScroll) elements.mouseScroll.style.opacity = '0';
        } else {
            elements.header.classList.remove('scrolled');
            if (elements.mouseScroll) elements.mouseScroll.style.opacity = '0.8';
        }

        // Parallax
        if (elements.heroBackground && scrollY < window.innerHeight) {
            elements.heroBackground.style.transform = `scale(1.1) translateY(${scrollY * 0.4}px)`;
        }
    });

    // Mobile Nav Toggle
    function toggleMobileNav() {
        state.isNavOpen = !state.isNavOpen;
        elements.mainNav.classList.toggle('open', state.isNavOpen);
        const icon = elements.navToggle.querySelector('i');
        if(icon) icon.className = state.isNavOpen ? 'fas fa-times' : 'fas fa-bars';

        // Prevent body scroll when nav is open
        document.body.style.overflow = state.isNavOpen ? 'hidden' : '';
    }

    if (elements.navToggle) {
        elements.navToggle.addEventListener('click', toggleMobileNav);
    }

    // Close nav when clicking outside or on a link
    document.addEventListener('click', (e) => {
        if (state.isNavOpen && !elements.mainNav.contains(e.target) && !elements.navToggle.contains(e.target)) {
            toggleMobileNav();
        }
    });

    elements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Use href hash instead of dataset for reliability

            if (state.isNavOpen) toggleMobileNav();

            // Simple update of active state
            elements.navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const targetSection = document.getElementById(targetId + '-section') || document.getElementById(targetId);

            if(targetSection) {
                 // Trigger map resize if needed
                if (targetId === 'map' || targetId === 'map-view-section') {
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
            elements.sitesContainer.innerHTML = '<p class="no-results" style="grid-column: 1/-1; text-align: center; color: var(--color-text-secondary);">No matching sites found.</p>';
            return;
        }

        sites.forEach((site, index) => {
            const siteCard = document.createElement('article');
            siteCard.className = 'site-card animate-on-scroll';
            siteCard.dataset.siteId = site.id;
            // Stagger delay for entrance
            siteCard.style.transitionDelay = `${index * 50}ms`;

            siteCard.innerHTML = `
                <div class="card-img-container">
                    <img src="${site.image_url}" alt="${site.name}" loading="lazy">
                </div>
                <div class="card-content">
                    <h2>${site.name}</h2>
                    <p class="short-desc">${site.short_description}</p>
                    <a href="#" class="learn-more" data-id="${site.id}">
                        Explore Details <i class="fas fa-arrow-right" style="font-size: 0.8em;"></i>
                    </a>
                </div>
            `;
            elements.sitesContainer.appendChild(siteCard);
        });

        // Trigger animations
        setTimeout(setupScrollAnimations, 100);
    }

    function displayFeaturedSite() {
        if (!elements.featuredSiteContent) return;

        const featuredSite = heritageSitesData[Math.floor(Math.random() * heritageSitesData.length)];
        elements.featuredSiteContent.innerHTML = `
            <div style="display: flex; gap: var(--space-lg); align-items: flex-start; flex-wrap: wrap;">
                <div style="flex: 0 0 120px; height: 120px; border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
                    <img src="${featuredSite.image_url}" alt="${featuredSite.name}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="flex: 1; min-width: 250px;">
                    <h3 style="margin-top: 0;">${featuredSite.name}</h3>
                    <p style="margin-bottom: var(--space-sm); font-size: 0.95rem;">${featuredSite.short_description}</p>
                    <a href="#" class="learn-more" data-id="${featuredSite.id}">Discover More <i class="fas fa-arrow-right" style="font-size: 0.8em;"></i></a>
                </div>
            </div>
        `;
        elements.featuredSiteContainer.classList.remove('hidden');
    }

    function renderTimeline() {
        if (!elements.timelineContainer) return;

        const timelineData = [
            { year: 'c. 600-900 CE', event: 'Pallava Dynasty', description: 'Pioneered rock-cut architecture at Mahabalipuram, creating a legacy carved in stone.' },
            { year: 'c. 850-1279 CE', event: 'Chola Dynasty', description: 'Perfected Dravidian temple architecture, building the Great Living Chola Temples with massive granite vimanas.' },
            { year: '1908', event: 'Nilgiri Mountain Railway', description: 'Completed by the British, this engineering marvel scales the Blue Mountains using a unique rack and pinion system.' },
            { year: '1984', event: 'UNESCO Inscription', description: 'The Group of Monuments at Mahabalipuram was inscribed as a UNESCO World Heritage Site.' },
            { year: '1987', event: 'Great Living Chola Temples', description: 'Brihadeeswara Temple was inscribed, later extended to include Gangaikondacholapuram and Darasuram in 2004.' },
            { year: '2012', event: 'Western Ghats', description: 'The Western Ghats were recognized as a UNESCO World Heritage Site for their immense biodiversity.' }
        ];

        let timelineHTML = '';
        timelineData.forEach((item, index) => {
            timelineHTML += `
                <div class="timeline-item animate-on-scroll">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <span class="timeline-year" style="color: var(--color-accent-primary); font-weight: 700; font-size: 0.9rem; letter-spacing: 0.05em;">${item.year}</span>
                        <h4 style="margin: 4px 0 8px;">${item.event}</h4>
                        <p style="margin-bottom: 0; font-size: 0.95rem;">${item.description}</p>
                    </div>
                </div>
            `;
        });
        elements.timelineContainer.innerHTML = timelineHTML;
    }

    // --- Search Functionality ---
    if (elements.searchInput) {
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
            elements.searchInput.focus();
        });
    }

    // --- Modal Logic ---
    function openModal(siteId) {
        const site = heritageSitesData.find(s => s.id === parseInt(siteId));
        if (!site) return;

        elements.modalHeaderContainer.innerHTML = `
            <img src="${site.image_url}" alt="${site.name}" class="modal-header-img">
        `;

        elements.modalBody.innerHTML = `
            <h2 style="margin-bottom: var(--space-sm);">${site.name}</h2>
            <div class="site-meta" style="display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--color-border); color: var(--color-text-secondary); font-size: 0.9rem;">
                 <span title="Year Built"><i class="fas fa-calendar-alt" style="margin-right: 6px; color: var(--color-accent-primary);"></i> ${site.year_built || 'Unknown'}</span>
                 <span title="Dynasty/Era"><i class="fas fa-crown" style="margin-right: 6px; color: var(--color-accent-primary);"></i> ${site.dynasty || 'Various'}</span>
                 <span title="Coordinates"><i class="fas fa-map-marker-alt" style="margin-right: 6px; color: var(--color-accent-primary);"></i> ${site.coordinates}</span>
            </div>
            <div style="font-size: 1.05rem; line-height: 1.8; color: var(--color-text-secondary);">
                ${site.long_description.split('. ').map(sentence => `<p>${sentence}.</p>`).join('')}
            </div>
        `;

        elements.siteDetailModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        elements.siteDetailModal.classList.add('hidden');
        document.body.style.overflow = '';
        setTimeout(() => {
            elements.modalHeaderContainer.innerHTML = '';
            elements.modalBody.innerHTML = '';
        }, 300);
    }

    document.body.addEventListener('click', (event) => {
        const learnMoreBtn = event.target.closest('.learn-more');
        const closeModalBtn = event.target.closest('[data-close-modal]');
        const modalOverlay = event.target.closest('.modal-overlay');

        if (learnMoreBtn) {
            event.preventDefault();
            openModal(learnMoreBtn.dataset.id);
        } else if (closeModalBtn || modalOverlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !elements.siteDetailModal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // --- Gallery Filtering ---
    if (elements.galleryFilters.length > 0) {
        elements.galleryFilters.forEach(btn => {
            btn.addEventListener('click', () => {
                elements.galleryFilters.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.dataset.filter;
                let count = 0;

                elements.galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.dataset.site === filterValue) {
                        item.style.display = 'block';
                        // Simple animation for reflow
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(10px)';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 50 + (count * 50));
                        count++;
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // --- Map Logic ---
    function initializeMap() {
        if (state.mapInstance) return;

        const mapContainer = document.getElementById('map-container');
        if (!mapContainer) return;

        // Custom Map Style (CartoDB Voyager - very clean, Stripe-like)
        const mapStyle = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
        const mapAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

        const tamilNaduCenter = [10.8, 78.7];
        const initialZoom = 7;

        state.mapInstance = L.map('map-container', {
            scrollWheelZoom: false,
            zoomControl: false // We can add it elsewhere or customize it
        }).setView(tamilNaduCenter, initialZoom);

        L.control.zoom({
            position: 'bottomright'
        }).addTo(state.mapInstance);

        // Layers
        const defaultLayer = L.tileLayer(mapStyle, { attribution: mapAttribution }).addTo(state.mapInstance);
        const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri'
        });

        // Layer Switcher logic
        const layerSwitcher = document.getElementById('map-layer-switcher');
        if (layerSwitcher) {
            layerSwitcher.addEventListener('change', (e) => {
                if (e.target.value === 'satellite') {
                    state.mapInstance.addLayer(satelliteLayer);
                    state.mapInstance.removeLayer(defaultLayer);
                } else {
                    state.mapInstance.addLayer(defaultLayer);
                    state.mapInstance.removeLayer(satelliteLayer);
                }
            });
        }

        // Custom Icons
        const createIcon = (iconClass, color) => L.divIcon({
            html: `<div style="background-color: white; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px rgba(0,0,0,0.2); border: 2px solid ${color};">
                     <i class="${iconClass}" style="color: ${color}; font-size: 16px;"></i>
                   </div>`,
            className: 'map-marker-custom',
            iconSize: [32, 32],
            iconAnchor: [16, 32], // Bottom center
            popupAnchor: [0, -36]
        });

        const icons = {
            temple: createIcon('fa-solid fa-gopuram', '#d97706'),
            railway: createIcon('fa-solid fa-train', '#0a2540'),
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
                        <div class="map-popup-content" style="text-align:center; min-width: 150px;">
                            <h3 style="margin: 0 0 8px 0; font-size: 1rem; font-family: var(--font-serif);">${site.name}</h3>
                            <button class="learn-more" data-id="${site.id}" style="font-size: 0.8rem; border: none; background: none; cursor: pointer; padding: 0; color: var(--color-accent-primary); font-weight: 600;">
                                View Details
                            </button>
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
        const regex = /N(\d+)\s(\d+)\s(\d+(\.\d+)?)\sE(\d+)\s(\d+)\s(\d+(\.\d+)?)/;
        const match = coordString.match(regex);

        if (match) {
            const lat = parseFloat(match[1]) + parseFloat(match[2])/60 + parseFloat(match[3])/3600;
            const lon = parseFloat(match[5]) + parseFloat(match[6])/60 + parseFloat(match[7])/3600;
            return { lat, lon };
        }
        return { lat: null, lon: null };
    }

    // --- Universal Animations ---
    function setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.is-visible)');
        animatedElements.forEach(el => observer.observe(el));
    }

    // Initialization
    displaySites(heritageSitesData);
    displayFeaturedSite();
    renderTimeline();
    setupMapObserver();

    // Check deep link
    if(window.location.hash === '#map' || window.location.hash === '#map-view-section') {
        initializeMap();
    }
});
