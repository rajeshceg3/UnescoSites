document.addEventListener('DOMContentLoaded', () => {
    const heritageSitesData = [
        {
            id: 1,
            name: "Great Living Chola Temples",
            short_description: "Magnificent 11th/12th-century Hindu temples representing the pinnacle of Chola architecture.",
            long_description: "The Great Living Chola Temples were built by kings of the Chola Empire, which stretched over all of south India and the neighbouring islands. The site includes three great 11th- and 12th-century Temples: the Brihadisvara Temple at Thanjavur (built by Raja Raja Chola I between 1003-1010 CE), the Brihadisvara Temple at Gangaikondacholisvaram (completed in 1035 CE by Rajendra I), and the Airavatesvara Temple at Darasuram (built by Rajaraja II). The Thanjavur temple features a 216-foot tall vimana made of solid granite with 13 receding tiers. These temples testify to the brilliant achievements of the Chola in architecture, sculpture, painting and bronze casting, with 81 of the 108 karanas (dance poses) of Bharatanatyam carved on the walls.",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Le_temple_de_Brihadishwara_%28Tanjore%2C_Inde%29_%2814354574611%29.jpg/800px-Le_temple_de_Brihadishwara_%28Tanjore%2C_Inde%29_%2814354574611%29.jpg",
            coordinates: "N10 46 59 E79 7 57",
            specific_sites: ["Brihadeeswarar Temple, Thanjavur (216 ft vimana)", "Brihadisvara Temple, Gangaikondacholapuram (53m vimana)", "Airavatesvara Temple, Darasuram (24m vimana with chariot design)"],
            year_built: "1003-1173 CE",
            dynasty: "Chola Empire",
            architectural_style: "Dravidian",
            significance: "Represents the zenith of Chola architectural achievement and living temple traditions",
            reviews: [],
            averageRating: 0,
            numberOfRatings: 0,
            site_type: 'temple'
        },
        {
            id: 2,
            name: "Group of Monuments at Mahabalipuram",
            short_description: "7th/8th-century Pallava rock-cut sanctuaries and the famous Shore Temple by the sea.",
            long_description: "This group of sanctuaries, founded by the Pallava kings, was carved out of rock along the Coromandel coast in the 7th and 8th centuries. Created during the reign of Narasimhavarman I and II, it represents one of the earliest experiments in Dravidian architecture. The site is known especially for its rathas (temples in the form of chariots), mandapas (cave sanctuaries), the giant open-air relief 'Descent of the Ganges' (the world's largest bas-relief measuring 96 x 43 feet), and the iconic Shore Temple. The Shore Temple, built around 725 AD by Narasimhavarman II, is one of the oldest structural stone temples in Southern India, standing majestically by the Bay of Bengal. The monuments showcase the transition from rock-cut architecture to free-standing temples.",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/01MahabalipuramShoreTemple.jpg/800px-01MahabalipuramShoreTemple.jpg",
            coordinates: "N12 37 0.012 E80 11 30.012",
            key_structures: ["Shore Temple (8th century)", "Pancha Rathas (Five Chariots)", "Descent of the Ganges relief", "Varaha Cave Temple", "Mahishasuramardini Cave"],
            year_built: "630-728 CE",
            dynasty: "Pallava Dynasty",
            architectural_style: "Early Dravidian",
            significance: "Represents the birth of Dravidian architecture and contains the world's largest bas-relief",
            reviews: [],
            averageRating: 0,
            numberOfRatings: 0,
            site_type: 'temple'
        },
        {
            id: 3,
            name: "Nilgiri Mountain Railway",
            short_description: "Historic metre-gauge railway scaling the Nilgiri hills using unique rack and pinion system.",
            long_description: "The Nilgiri Mountain Railway, a 46-km long metre-gauge single-track railway in Tamil Nadu, was completed in 1908 and represents a remarkable engineering achievement. Built by the British, it scales an elevation from 326m at Mettupalayam to 2,203m at Udagamandalam (Ooty), using a unique rack and pinion system on the steeper gradients. The railway uses Swiss-designed locomotives and features 16 tunnels, 250 bridges, and navigates through 208 curves. This hill railway was part of the larger Mountain Railways of India UNESCO inscription and serves as a vital link to the hill stations of the Nilgiris. The journey offers breathtaking views of tea plantations, dense forests, and valleys, making it both a transportation marvel and tourist attraction.",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Nilgiri_Mountain_Railway_train.jpg/800px-Nilgiri_Mountain_Railway_train.jpg",
            coordinates: "N11 30 37.008 E76 56 8.988",
            key_features: ["46 km track length", "Rack and pinion system", "16 tunnels and 250 bridges", "208 curves", "1,877m elevation gain"],
            year_built: "1908",
            engineer: "British Colonial Government",
            gauge: "Metre gauge (1000mm)",
            significance: "Outstanding example of hill railway engineering and colonial transportation heritage",
            reviews: [],
            averageRating: 0,
            numberOfRatings: 0,
            site_type: 'railway'
        },
        {
            id: 4,
            name: "Western Ghats (Kalakad-Mundanthurai)",
            short_description: "Biodiversity hotspot: Kalakad-Mundanthurai Tiger Reserve in the Agasthyamalai sub-cluster.",
            long_description: "The Western Ghats are recognized as one of the world's eight 'hottest hotspots' of biological diversity, older than the Himalayas and containing exceptional levels of plant and animal endemism. The Kalakad-Mundanthurai Tiger Reserve, covering 895 sq km, is part of the Agasthyamalai sub-cluster and represents the unique montane forest ecosystems of the southern Western Ghats. This reserve is home to several endangered species including tigers, elephants, leopards, and the Nilgiri Tahr. It contains over 2000 species of flowering plants, 294 species of birds, and numerous endemic species. The landscape ranges from tropical forests to montane grasslands, with elevations varying from 100m to 1868m at Agasthyarkoodam peak.",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Kalakkad_Mundanthurai_Tiger_Reserve.jpg/800px-Kalakkad_Mundanthurai_Tiger_Reserve.jpg",
            coordinates: "N8 31 47 E77 14 59",
            biodiversity: ["2000+ flowering plants", "294 bird species", "Tigers and elephants", "Endemic species", "Montane forests"],
            year_established: "1988",
            area: "895 sq km",
            elevation_range: "100m - 1,868m",
            significance: "Critical biodiversity conservation area and endemic species habitat",
            reviews: [],
            averageRating: 0,
            numberOfRatings: 0,
            site_type: 'nature'
        },
        {
            id: 5,
            name: "Western Ghats (Mukurti National Park)",
            short_description: "High-altitude grasslands and sholas in the Nilgiris, home to the endangered Nilgiri Tahr.",
            long_description: "Mukurti National Park, located in the Nilgiris sub-cluster of the Western Ghats, covers 78.46 sq km and is characterized by its unique montane grasslands and shola forests. Established in 1982, it serves as a crucial habitat for the endangered Nilgiri Tahr (Nilgiritragus hylocrius), with one of the largest populations of this endemic mountain goat. The park's landscape consists of rolling grasslands interspersed with shola forests (tropical montane forests) in valleys and depressions. The elevation ranges from 1,200m to 2,554m, creating diverse microclimates. The park also protects important watersheds and is home to other wildlife including elephants, sambar deer, wild boar, and over 100 bird species including several endemics.",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Nilgiri_Tahr_in_Mukurthi_National_Park.jpg/800px-Nilgiri_Tahr_in_Mukurthi_National_Park.jpg",
            coordinates: "N11 19 50 E76 18 34",
            key_species: ["Nilgiri Tahr (endangered)", "Asian Elephants", "Sambar Deer", "100+ bird species", "Endemic flora"],
            year_established: "1982",
            area: "78.46 sq km",
            elevation_range: "1,200m - 2,554m",
            significance: "Critical habitat for endangered Nilgiri Tahr and montane ecosystem conservation",
            reviews: [],
            averageRating: 0,
            numberOfRatings: 0,
            site_type: 'nature'
        },
        {
            id: 6,
            name: "Brihadeeswara Temple, Thanjavur",
            short_description: "The crown jewel of Chola architecture, built by Raja Raja Chola I with the world's first granite dome.",
            long_description: "The Brihadeeswara Temple, also known as Peruvudaiyar Kovil, stands as the masterpiece of Chola architecture and one of India's most remarkable temples. Built between 1003-1010 CE by Raja Raja Chola I, this temple showcases unprecedented architectural innovation. The main tower (vimana) rises to 216 feet, crowned by a monolithic granite dome weighing 80 tons - an engineering marvel of its time. The temple is constructed entirely of granite, transported from quarries 60 km away. The inner sanctum houses one of India's largest Shiva lingas, and the walls feature extensive Tamil inscriptions detailing the temple's administration and gifts. The temple complex includes numerous sculptures, with 81 of the 108 Bharatanatyam dance poses carved on the walls, making it a treasury of classical Indian art.",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Brihadishvara_Temple_Thanjavur.jpg/800px-Brihadishvara_Temple_Thanjavur.jpg",
            coordinates: "N10 46 59 E79 7 57",
            architectural_features: ["216-foot granite vimana", "80-ton monolithic dome", "Massive Shiva linga", "Tamil inscriptions", "Bharatanatyam sculptures"],
            year_built: "1003-1010 CE",
            patron: "Raja Raja Chola I",
            materials: "Granite (60km transport)",
            significance: "Engineering marvel and pinnacle of Chola architectural achievement",
            reviews: [],
            averageRating: 0,
            numberOfRatings: 0,
            site_type: 'temple'
        }
    ];

    const sitesContainer = document.getElementById('sites-container');
    const siteDetailModal = document.getElementById('site-detail-modal');
    const modalBody = document.getElementById('modal-body');
    const searchInput = document.getElementById('search-input');
    const clearSearchButton = document.getElementById('clear-search-btn');
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    const featuredSiteContainer = document.getElementById('featured-site');
    const featuredSiteContent = document.getElementById('featured-site-content');
    const timelineContainer = document.getElementById('interactive-timeline');

    let mapInstance = null;
    let markers = {};

    function displaySites(sites) {
        sitesContainer.innerHTML = '';
        if (sites.length === 0) {
            sitesContainer.innerHTML = '<p>No matching sites found.</p>';
            return;
        }

        sites.forEach(site => {
            const siteCard = document.createElement('article');
            siteCard.className = 'site-card';
            siteCard.dataset.siteId = site.id;
            siteCard.innerHTML = `
                <img src="${site.image_url}" alt="${site.name}" loading="lazy">
                <div class="card-content">
                    <h2>${site.name}</h2>
                    <p class="short-desc">${site.short_description}</p>
                    <div class="star-rating" id="rating-${site.id}"></div>
                    <a href="#" class="learn-more" data-id="${site.id}">Learn More</a>
                </div>
            `;
            sitesContainer.appendChild(siteCard);
            displayAverageRating(site.id, site.averageRating, site.numberOfRatings);
        });
    }

    function displayFeaturedSite() {
        const featuredSite = heritageSitesData[Math.floor(Math.random() * heritageSitesData.length)];
        featuredSiteContent.innerHTML = `
            <img src="${featuredSite.image_url}" alt="${featuredSite.name}">
            <h3>${featuredSite.name}</h3>
            <p>${featuredSite.short_description}</p>
            <a href="#" class="learn-more" data-id="${featuredSite.id}">Discover More</a>
        `;
        featuredSiteContainer.classList.remove('hidden');
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
        timelineData.forEach(item => {
            timelineHTML += `
                <div class="timeline-item">
                    <div class="timeline-year">${item.year}</div>
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h4>${item.event}</h4>
                        <p>${item.description}</p>
                    </div>
                </div>
            `;
        });
        timelineContainer.innerHTML = timelineHTML;
    }

    function openModal(siteId) {
        const site = heritageSitesData.find(s => s.id === parseInt(siteId));
        if (!site) return;

        let detailsHtml = `
            <h2 id="modal-site-name">${site.name}</h2>
            <img src="${site.image_url}" alt="${site.name}">
            <p>${site.long_description}</p>
            <p><strong>Coordinates:</strong> ${site.coordinates}</p>
        `;

        if (site.year_built) detailsHtml += `<p><strong>Year Built:</strong> ${site.year_built}</p>`;
        if (site.dynasty) detailsHtml += `<p><strong>Dynasty:</strong> ${site.dynasty}</p>`;

        modalBody.innerHTML = detailsHtml;
        siteDetailModal.classList.remove('hidden');
    }

    function closeModal() {
        siteDetailModal.classList.add('hidden');
        modalBody.innerHTML = '';
    }

    function initializeMap() {
        // Check if the map container exists
        const mapContainer = document.getElementById('map-container');
        if (!mapContainer) {
            console.error('Map container not found!');
            return;
        }

        // Prevent re-initialization if mapInstance already exists
        if (mapInstance) {
            return;
        }

        // Coordinates for Tamil Nadu center and an appropriate zoom level
        const tamilNaduCenter = [10.7905, 78.7047]; // Approximate center of Tamil Nadu
        const initialZoom = 7;

        const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });

        const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        });

        const topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        });

        mapInstance = L.map('map-container', {
            layers: [osmLayer] // Default layer
        }).setView(tamilNaduCenter, initialZoom);

        const layerSwitcher = document.getElementById('map-layer-switcher');
        layerSwitcher.addEventListener('change', (e) => {
            const selectedLayer = e.target.value;

            // Remove all existing tile layers
            mapInstance.eachLayer((layer) => {
                if (layer instanceof L.TileLayer) {
                    mapInstance.removeLayer(layer);
                }
            });

            // Add the selected layer
            switch (selectedLayer) {
                case 'satellite':
                    mapInstance.addLayer(satelliteLayer);
                    break;
                case 'topo':
                    mapInstance.addLayer(topoLayer);
                    break;
                case 'osm':
                default:
                    mapInstance.addLayer(osmLayer);
                    break;
            }
        });

        const templeIcon = L.divIcon({
            html: '<i class="fa-solid fa-gopuram" style="color: #C70039;"></i>',
            className: 'map-marker-icon',
            iconSize: [30, 30],
            iconAnchor: [15, 30],
            popupAnchor: [0, -30]
        });

        const railwayIcon = L.divIcon({
            html: '<i class="fa-solid fa-train" style="color: #005A4B;"></i>',
            className: 'map-marker-icon',
            iconSize: [30, 30],
            iconAnchor: [15, 30],
            popupAnchor: [0, -30]
        });

        const natureIcon = L.divIcon({
            html: '<i class="fa-solid fa-tree" style="color: #2E8B57;"></i>',
            className: 'map-marker-icon',
            iconSize: [30, 30],
            iconAnchor: [15, 30],
            popupAnchor: [0, -30]
        });

        const iconMap = {
            temple: templeIcon,
            railway: railwayIcon,
            nature: natureIcon
        };

        // Add markers for each heritage site
        heritageSitesData.forEach(site => {
            if (site.coordinates) {
                const { lat, lon } = parseCoordinates(site.coordinates); // Use the new parser

                if (lat !== null && lon !== null && !isNaN(lat) && !isNaN(lon)) {
                    const customIcon = iconMap[site.site_type] || L.divIcon({ html: '<i class="fa-solid fa-landmark"></i>' }); // Default icon
                    const marker = L.marker([lat, lon], { icon: customIcon }).addTo(mapInstance);
                    markers[site.id] = marker;
                    const popupContent = `
                        <div class="map-popup">
                            <img src="${site.image_url}" alt="${site.name}">
                            <h3>${site.name}</h3>
                            <p>${site.short_description}</p>
                            <a href="#" class="learn-more" data-id="${site.id}">Learn More</a>
                        </div>
                    `;
                    marker.bindPopup(popupContent);
                    marker.on('click', () => {
                        const siteCards = document.querySelectorAll('.site-card');
                        siteCards.forEach(card => {
                            card.classList.remove('highlight');
                        });
                        const correspondingCard = document.querySelector(`.site-card[data-site-id='${site.id}']`);
                        if (correspondingCard) {
                            correspondingCard.classList.add('highlight');
                            correspondingCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                    });
                }
            }
        });

        // Optional: Add a resize listener to invalidate map size if it was hidden when initialized
        mapInstance.whenReady(() => {
            setTimeout(() => { // Use a timeout to ensure the container is visible and has dimensions
                mapInstance.invalidateSize();
            }, 0);
        });

        const legend = L.control({ position: 'bottomright' });

        legend.onAdd = function (map) {
            const div = L.DomUtil.create('div', 'info legend');
            const grades = [
                { type: 'temple', label: 'Temple', icon: '<i class="fa-solid fa-gopuram" style="color: #C70039;"></i>' },
                { type: 'railway', label: 'Railway', icon: '<i class="fa-solid fa-train" style="color: #005A4B;"></i>' },
                { type: 'nature', label: 'Nature', icon: '<i class="fa-solid fa-tree" style="color: #2E8B57;"></i>' }
            ];
            let labels = ['<h3>Legend</h3>'];

            grades.forEach(grade => {
                labels.push(
                    `<div class="legend-item">${grade.icon}<span>${grade.label}</span></div>`
                );
            });

            div.innerHTML = labels.join('');
            return div;
        };

        legend.addTo(mapInstance);
    }

    function parseCoordinates(coordString) {
        let lat = null, lon = null;

        // Try to parse DMS format: Ndd mm ss.sss Edd mm ss.sss
        // Regex captures: Hemisphere (N/S), Deg, Min, Sec, Hemisphere (E/W), Deg, Min, Sec
        const dmsRegex = /([NS])\s*(\d{1,3})\s*(\d{1,2})\s*([\d.]+)\s*([EW])\s*(\d{1,3})\s*(\d{1,2})\s*([\d.]+)/i;
        const dmsMatch = coordString.match(dmsRegex);

        if (dmsMatch) {
            const latHemi = dmsMatch[1].toUpperCase();
            const latDeg = parseFloat(dmsMatch[2]);
            const latMin = parseFloat(dmsMatch[3]);
            const latSec = parseFloat(dmsMatch[4]);

            const lonHemi = dmsMatch[5].toUpperCase();
            const lonDeg = parseFloat(dmsMatch[6]);
            const lonMin = parseFloat(dmsMatch[7]);
            const lonSec = parseFloat(dmsMatch[8]);

            lat = latDeg + (latMin / 60) + (latSec / 3600);
            if (latHemi === 'S') lat *= -1;

            lon = lonDeg + (lonMin / 60) + (lonSec / 3600);
            if (lonHemi === 'W') lon *= -1;

            return { lat, lon };
        }

        // Try to parse Decimal Degrees format: Ndd.dddd Edd.dddd (or similar with S/W)
        // Regex captures: Hemisphere (N/S), DecimalDegrees, Hemisphere (E/W), DecimalDegrees
        const ddRegex = /([NS])\s*([\d.]+)\s*([EW])\s*([\d.]+)/i;
        const ddMatch = coordString.match(ddRegex);

        if (ddMatch) {
            const latHemi = ddMatch[1].toUpperCase();
            lat = parseFloat(ddMatch[2]);
            if (latHemi === 'S') lat *= -1;

            const lonHemi = ddMatch[3].toUpperCase();
            lon = parseFloat(ddMatch[4]);
            if (lonHemi === 'W') lon *= -1;

            return { lat, lon };
        }

        // Fallback for simple "lat, lon" or "lat lon" (numbers possibly signed)
        const simpleParts = coordString.match(/[+-]?[\d.]+/g);
        if (simpleParts && simpleParts.length === 2) {
            lat = parseFloat(simpleParts[0]);
            lon = parseFloat(simpleParts[1]);
            if (!isNaN(lat) && !isNaN(lon)) {
                 // Heuristic: if values are typical for India, assume positive N/E
                // This is a weak fallback.
                return { lat, lon };
            }
        }

        console.warn(`Could not parse coordinates: ${coordString}`);
        return { lat: null, lon: null }; // Explicitly return nulls
    }

    function handleNavigation(targetId) {
        contentSections.forEach(section => {
            section.classList.toggle('hidden', section.id !== targetId);
            section.classList.toggle('active', section.id === targetId);
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === targetId);
        });

        if (targetId === 'map-view-section' && !mapInstance) {
            initializeMap();
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            handleNavigation(link.dataset.section);
        });
    });

    function getReviewsFromStorage(siteId) {
        const reviewsJSON = localStorage.getItem(`reviews-${siteId}`);
        try {
            return reviewsJSON ? JSON.parse(reviewsJSON) : [];
        } catch (e) {
            console.error("Error parsing reviews from localStorage:", e);
            return [];
        }
    }

    function saveReviewToStorage(siteId, reviewData) {
        let reviews = getReviewsFromStorage(siteId);
        reviews.push(reviewData);
        try {
            localStorage.setItem(`reviews-${siteId}`, JSON.stringify(reviews));
        } catch (e) {
            console.error("Error saving review to localStorage:", e);
            // Optionally, inform the user here that their review could not be saved.
            // For example: alert("Could not save your review. Local storage might be full or disabled.");
        }
    }

    function getRatingFromStorage(siteId) {
        const ratingJSON = localStorage.getItem(`rating-${siteId}`);
        try {
            return ratingJSON ? JSON.parse(ratingJSON) : { averageRating: 0, numberOfRatings: 0 };
        } catch (e) {
            console.error("Error parsing rating from localStorage:", e);
            return { averageRating: 0, numberOfRatings: 0 };
        }
    }

    function saveRatingToStorage(siteId, ratingData) {
        try {
            localStorage.setItem(`rating-${siteId}`, JSON.stringify(ratingData));
        } catch (e) {
            console.error("Error saving rating to localStorage:", e);
            // Optionally, inform the user here that the rating could not be saved.
        }
    }

    function handleReviewSubmission(siteId, rating, reviewText) {
        const reviewData = {
            rating: rating,
            text: reviewText,
            timestamp: new Date().toISOString()
        };
        saveReviewToStorage(siteId, reviewData);

        const allReviews = getReviewsFromStorage(siteId);
        const numberOfRatings = allReviews.length;
        let sumOfRatings = 0;
        allReviews.forEach(review => {
            sumOfRatings += review.rating;
        });

        const averageRating = numberOfRatings > 0 ? (sumOfRatings / numberOfRatings) : 0;

        saveRatingToStorage(siteId, { averageRating: parseFloat(averageRating.toFixed(1)), numberOfRatings });

        // The second call was redundant and has been removed.

        // Update the display
        displayAverageRating(siteId, parseFloat(averageRating.toFixed(1)), numberOfRatings);
        displayReviewsInModal(siteId);

        // For now, let's log to console to verify
        console.log(`Review submitted for site ${siteId}: Rating: ${rating}, Text: ${reviewText}`);
        console.log(`Updated rating for site ${siteId}: Avg: ${averageRating.toFixed(1)}, Total: ${numberOfRatings}`);
    }


    function displayAverageRating(siteId, averageRating, numberOfRatings) {
        let starsHTML = '';
        const roundedRating = Math.round(averageRating * 2) / 2; // Round to nearest 0.5

        for (let i = 1; i <= 5; i++) {
            if (i <= roundedRating) {
                starsHTML += '★'; // Filled star
            } else if (i - 0.5 === roundedRating) {
                starsHTML += '½'; // Half star - you might need a specific character or SVG for this
                                 // For simplicity, some might prefer to round to full stars or use CSS for half stars
                                 // Using text '½' might not align well with '★' and '☆'.
                                 // Alternative: use two '★' and color one half with CSS, or use SVG icons.
                                 // Sticking to text characters as per example for now.
            } else {
                starsHTML += '☆'; // Empty star
            }
        }

        const ratingText = numberOfRatings > 0
            ? `${starsHTML} (${averageRating.toFixed(1)} from ${numberOfRatings} rating${numberOfRatings === 1 ? '' : 's'})`
            : 'No ratings yet';

        // Update Card Display
        const cardRatingDiv = document.getElementById(`rating-${siteId}`);
        if (cardRatingDiv) {
            cardRatingDiv.innerHTML = ratingText;
        }

        // Update Modal Display
        const modalAvgRatingDiv = document.getElementById(`modal-avg-rating-${siteId}`);
        if (modalAvgRatingDiv) {
            modalAvgRatingDiv.innerHTML = ratingText;
        }
    }

    function displayReviewsInModal(siteId) {
        const reviews = getReviewsFromStorage(siteId);
        const ulElement = document.querySelector(`#modal-reviews-list-${siteId} ul`);

        if (!ulElement) return;
        ulElement.innerHTML = ''; // Clear existing reviews

        if (reviews.length > 0) {
            reviews.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)); // Sort by newest first
            reviews.forEach(review => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <div class="review-item">
                        <div class="review-rating"><strong>${review.rating}/5 Stars</strong></div>
                        <p class="review-text">${review.text}</p>
                        <small class="review-timestamp">Reviewed on: ${new Date(review.timestamp).toLocaleDateString()} at ${new Date(review.timestamp).toLocaleTimeString()}</small>
                    </div>`;
                ulElement.appendChild(li);
            });
        } else {
            ulElement.innerHTML = '<li>No reviews yet. Be the first to review!</li>';
        }
    }

    document.body.addEventListener('click', (event) => {
        if (event.target.matches('.learn-more')) {
            event.preventDefault();
            openModal(event.target.dataset.id);
        }
        if (event.target.matches('[data-close-modal]')) {
            closeModal();
        }
    });

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredSites = heritageSitesData.filter(site =>
            site.name.toLowerCase().includes(searchTerm) ||
            site.short_description.toLowerCase().includes(searchTerm)
        );
        displaySites(filteredSites);
    });

    // Initial load
    displaySites(heritageSitesData);
    displayFeaturedSite();
    renderTimeline();
    handleNavigation('home-section');

    sitesContainer.addEventListener('mouseover', (e) => {
        const card = e.target.closest('.site-card');
        if (card) {
            const siteId = card.dataset.siteId;
            const marker = markers[siteId];
            if (marker) {
                marker.openPopup();
            }
        }
    });

    sitesContainer.addEventListener('mouseout', (e) => {
        const card = e.target.closest('.site-card');
        if (card) {
            const siteId = card.dataset.siteId;
            const marker = markers[siteId];
            if (marker) {
                marker.closePopup();
            }
        }
    });
});
