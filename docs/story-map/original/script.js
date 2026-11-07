document.addEventListener('DOMContentLoaded', () => {
    // --- Data Configuration ---
    const heritageSitesData = [
        {
            id: 1,
            name: "Great Living Chola Temples",
            short_description: "Magnificent 11th/12th-century Hindu temples representing the pinnacle of Chola architecture.",
            long_description: "Step into a realm where stone sings and history breathes. The Great Living Chola Temples are not mere monuments; they are epic poems carved in granite, a testament to an empire that defined a golden age. Imagine standing before the Brihadeeswara Temple at Thanjavur, its colossal 216-foot vimana piercing the heavens. Picture the sunlight catching the intricate carvings, each telling a story of gods and mortals. Then, journey to Gangaikondacholapuram and the Airavatesvara Temple at Darasuram, where sculptures exude a unique grace. To photograph these temples is to capture the soul of a civilization.",
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
            long_description: "Feel the salt-laced wind on your face as you witness the symphony of rock and sea at Mahabalipuram. This is where the Pallava kings dreamt in stone. Stand in awe before the 'Descent of the Ganges,' a colossal open-air relief where an entire universe comes to life. Frame your lens on the iconic Shore Temple, its silhouette a timeless sentinel against the breaking waves of the Bay of Bengal. Wander among the Pancha Rathas, five monolithic chariots, each a unique architectural masterpiece.",
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
            long_description: "All aboard a time machine on wheels! The Nilgiri Mountain Railway is a journey into the heart of the 'Blue Mountains.' As the charming, blue steam locomotive chugs to life, you're transported to an era of colonial charm. Feel the gentle sway as it click-clacks up one of the steepest tracks in the world. The air grows cooler, scented with eucalyptus. Every curve reveals a new vista of emerald valleys and mist-shrouded peaks.",
            image_url: "images/nilgiri_mountain_railway.svg",
            coordinates: "N11 30 37.008 E76 56 8.988",
            site_type: 'railway',
            year_built: "1908",
            dynasty: "British Colonial"
        },
        {
            id: 4,
            name: "Western Ghats (Kalakad-Mundanthurai)",
            short_description: "Biodiversity hotspot: Kalakad-Mundanthurai Tiger Reserve in the Agasthyamalai sub-cluster.",
            long_description: "Venture into a world older than the Himalayas. The Western Ghats are a vibrant, living tapestry of evolution. In the Kalakad-Mundanthurai Tiger Reserve, every rustle in the undergrowth tells a story of survival. Here, the air is thick with the scent of damp earth. Capture the raw, untamed beauty of montane forests, the silent tread of a leopard, or the majestic stride of an elephant. This is a place to feel humbled by nature.",
            image_url: "images/western_ghats_kalakad.svg",
            coordinates: "N8 31 47 E77 14 59",
            site_type: 'nature',
            year_built: "Est. 1988",
            dynasty: "Natural Formation"
        },
        {
            id: 5,
            name: "Western Ghats (Mukurti National Park)",
            short_description: "High-altitude grasslands and sholas in the Nilgiris, home to the endangered Nilgiri Tahr.",
            long_description: "Ascend to the 'roof of the Nilgiris,' where the sky feels within arm's reach. Mukurti National Park is a realm of rolling grasslands and mystical shola forests. Here, you can witness the rare Nilgiri Tahr defying gravity on sheer cliffs. Feel the crisp mountain air and the silence, broken only by the wind. Photographing Mukurti is capturing the subtle interplay of light and shadow on the rolling hills.",
            image_url: "images/western_ghats_mukurti.svg",
            coordinates: "N11 19 50 E76 18 34",
            site_type: 'nature',
            year_built: "Est. 1982",
            dynasty: "Natural Formation"
        },
        {
            id: 6,
            name: "Brihadeeswara Temple, Thanjavur",
            short_description: "The crown jewel of Chola architecture, built by Raja Raja Chola I with the world's first granite dome.",
            long_description: "Prepare to be humbled by the sheer ambition of the 'Big Temple' of Thanjavur. This is more than a temple; it is a declaration of power and artistic vision. As you step into its vast courtyard, your eyes are drawn irresistibly upward to the 216-foot vimana. How did they lift the 80-ton monolithic dome to its summit? Every surface is alive with detail, from the massive Shiva linga to the exquisite carvings of dancers.",
            image_url: "images/brihadeeswara_temple.svg",
            coordinates: "N10 46 59 E79 7 57",
            site_type: 'temple',
            year_built: "1003-1010 CE",
            dynasty: "Chola Empire"
        }
    ];

    // --- State & DOM ---
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
        header: document.getElementById('site-header'),
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
        isNavOpen: false
    };

    // --- Core UI Functions ---

    function displaySites(sites) {
        elements.sitesContainer.innerHTML = '';
        if (sites.length === 0) {
            elements.sitesContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 2rem;">No matching sites found.</p>';
            return;
        }

        const fragment = document.createDocumentFragment();
        sites.forEach((site, index) => {
            const article = document.createElement('article');
            article.className = 'site-card animate-on-scroll';
            article.style.transitionDelay = `${index * 50}ms`;
            article.innerHTML = `
                <div class="card-img-container">
                    <img src="${site.image_url}" alt="${site.name}" loading="lazy">
                </div>
                <div class="card-content">
                    <h2>${site.name}</h2>
                    <p class="short-desc">${site.short_description}</p>
                    <a href="#" class="learn-more" data-id="${site.id}">
                        Explore Details <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            `;
            fragment.appendChild(article);
        });
        elements.sitesContainer.appendChild(fragment);

        // Refresh intersection observer for new elements
        setTimeout(setupScrollAnimations, 100);
    }

    function renderTimeline() {
        if (!elements.timelineContainer) return;

        const timelineData = [
            { year: '600-900 CE', event: 'Pallava Dynasty', desc: 'Pioneered rock-cut architecture at Mahabalipuram.' },
            { year: '1003-1010 CE', event: 'Brihadeeswara Temple', desc: 'Completion of the "Big Temple" by Raja Raja Chola I.' },
            { year: '11th-12th C.', event: 'Chola Golden Age', desc: 'Construction of Gangaikondacholapuram and Darasuram temples.' },
            { year: '1908', event: 'Nilgiri Railway', desc: 'British completion of the mountain railway system.' },
            { year: '1984', event: 'UNESCO Inscription', desc: 'Mahabalipuram declared a World Heritage Site.' },
            { year: '2012', event: 'Western Ghats', desc: 'Recognized for immense biodiversity and natural beauty.' }
        ];

        elements.timelineContainer.innerHTML = timelineData.map(item => `
            <div class="timeline-item animate-on-scroll">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span style="color: var(--accent-primary); font-weight: 700; font-size: 0.9rem;">${item.year}</span>
                    <h4 style="margin: 4px 0 8px; font-size: 1.1rem;">${item.event}</h4>
                    <p style="margin-bottom: 0; font-size: 0.95rem;">${item.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // --- Interaction Logic ---

    // Mobile Navigation
    function toggleMobileNav() {
        state.isNavOpen = !state.isNavOpen;
        elements.mainNav.classList.toggle('open', state.isNavOpen);

        const icon = elements.navToggle.querySelector('i');
        if (icon) icon.className = state.isNavOpen ? 'fas fa-times' : 'fas fa-bars';

        document.body.style.overflow = state.isNavOpen ? 'hidden' : '';
    }

    if (elements.navToggle) {
        elements.navToggle.addEventListener('click', toggleMobileNav);
    }

    // Scroll Effects
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Header
        if (scrollY > 50) {
            elements.header.classList.add('scrolled');
            if (elements.mouseScroll) elements.mouseScroll.style.opacity = '0';
        } else {
            elements.header.classList.remove('scrolled');
            if (elements.mouseScroll) elements.mouseScroll.style.opacity = '0.7';
        }

        // Parallax
        if (elements.heroBackground && scrollY < window.innerHeight) {
            elements.heroBackground.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
    }, { passive: true });

    // Smooth Scrolling for Nav Links
    elements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (state.isNavOpen) toggleMobileNav();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId + '-section') || document.getElementById(targetId);

            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Modal System ---

    function openModal(siteId) {
        const site = heritageSitesData.find(s => s.id === parseInt(siteId));
        if (!site) return;

        elements.modalHeaderContainer.innerHTML = `
            <img src="${site.image_url}" alt="${site.name}" class="modal-header-img">
        `;

        elements.modalBody.innerHTML = `
            <span style="color: var(--accent-primary); font-weight: 600; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 8px;">${site.site_type}</span>
            <h2 style="margin-bottom: 16px;">${site.name}</h2>

            <div style="display: flex; gap: 24px; margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid var(--border-light); font-size: 0.9rem; color: var(--text-secondary);">
                 <span><i class="fas fa-calendar-alt" style="color: var(--accent-primary); margin-right: 6px;"></i> ${site.year_built}</span>
                 <span><i class="fas fa-map-marker-alt" style="color: var(--accent-primary); margin-right: 6px;"></i> ${site.coordinates}</span>
            </div>

            <div style="font-size: 1.05rem; line-height: 1.8; color: var(--text-secondary);">
                ${site.long_description}
            </div>
        `;

        // Animation Sequence
        elements.siteDetailModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Lock scroll

        // Force reflow
        void elements.siteDetailModal.offsetWidth;
    }

    function closeModal() {
        elements.siteDetailModal.classList.add('hidden');
        document.body.style.overflow = ''; // Unlock scroll
    }

    document.addEventListener('click', (e) => {
        const learnMoreBtn = e.target.closest('.learn-more');
        const closeModalBtn = e.target.closest('.close-modal') || e.target.closest('.modal-overlay');

        if (learnMoreBtn) {
            e.preventDefault();
            openModal(learnMoreBtn.dataset.id);
        } else if (closeModalBtn) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // --- Search ---
    if (elements.searchInput) {
        elements.searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = heritageSitesData.filter(s =>
                s.name.toLowerCase().includes(term) ||
                s.short_description.toLowerCase().includes(term)
            );
            displaySites(filtered);
            elements.clearSearchButton.classList.toggle('hidden', !term);
        });

        elements.clearSearchButton.addEventListener('click', () => {
            elements.searchInput.value = '';
            displaySites(heritageSitesData);
            elements.clearSearchButton.classList.add('hidden');
        });
    }

    // --- Gallery Filter ---
    elements.galleryFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.galleryFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            elements.galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.site === filter) {
                    item.style.display = 'block';
                    setTimeout(() => item.style.opacity = '1', 50);
                } else {
                    item.style.display = 'none';
                    item.style.opacity = '0';
                }
            });
        });
    });

    // --- Map (Leaflet) ---
    function initializeMap() {
        if (state.mapInstance || !document.getElementById('map-container')) return;

        state.mapInstance = L.map('map-container', {
            scrollWheelZoom: false
        }).setView([10.8, 78.7], 7);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }).addTo(state.mapInstance);

        // Custom Icons
        const createIcon = (color) => L.divIcon({
            html: `<div style="background:${color}; width:12px; height:12px; border-radius:50%; box-shadow:0 0 0 4px white, 0 4px 8px rgba(0,0,0,0.3);"></div>`,
            className: 'custom-map-marker',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });

        heritageSitesData.forEach(site => {
            const coords = parseCoordinates(site.coordinates);
            if (coords.lat) {
                const marker = L.marker([coords.lat, coords.lon], {
                    icon: createIcon(site.site_type === 'temple' ? '#d97706' : '#635bff')
                }).addTo(state.mapInstance);

                marker.bindPopup(`
                    <div style="text-align:center; font-family: var(--font-sans);">
                        <h3 style="margin:0 0 4px; font-size:0.9rem;">${site.name}</h3>
                        <button class="learn-more" data-id="${site.id}" style="border:none; background:none; color:var(--accent-primary); cursor:pointer; font-weight:600; font-size:0.8rem; padding:0;">View Details</button>
                    </div>
                `);
            }
        });
    }

    function parseCoordinates(str) {
        // Simple parser for "N10 46 59 E79 7 57" format
        const parts = str.match(/N(\d+)\s(\d+)\s(\d+(\.\d+)?)\sE(\d+)\s(\d+)\s(\d+(\.\d+)?)/);
        if (parts) {
            return {
                lat: parseFloat(parts[1]) + parseFloat(parts[2])/60 + parseFloat(parts[3])/3600,
                lon: parseFloat(parts[5]) + parseFloat(parts[6])/60 + parseFloat(parts[7])/3600
            };
        }
        return { lat: null, lon: null };
    }

    // Lazy load map when visible
    const mapObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initializeMap();
                mapObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    if (document.getElementById('map-view-section')) {
        mapObserver.observe(document.getElementById('map-view-section'));
    }

    // --- Animations ---
    function setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.animate-on-scroll:not(.is-visible)').forEach(el => observer.observe(el));
    }

    // Initialize
    displaySites(heritageSitesData);
    renderTimeline();
    setupScrollAnimations();
});
