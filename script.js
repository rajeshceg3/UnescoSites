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
            significance: "Represents the zenith of Chola architectural achievement and living temple traditions"
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
            significance: "Represents the birth of Dravidian architecture and contains the world's largest bas-relief"
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
            significance: "Outstanding example of hill railway engineering and colonial transportation heritage"
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
            significance: "Critical biodiversity conservation area and endemic species habitat"
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
            significance: "Critical habitat for endangered Nilgiri Tahr and montane ecosystem conservation"
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
            significance: "Engineering marvel and pinnacle of Chola architectural achievement"
        }
    ];

    const sitesContainer = document.getElementById('sites-container');
    const siteDetailModal = document.getElementById('site-detail-modal');
    const modalContent = siteDetailModal.querySelector('.modal-content'); // For event delegation on modal
    const modalSiteName = modalContent.querySelector('h2');
    const modalSiteImage = modalContent.querySelector('img');
    const modalLongDesc = modalContent.querySelector('.long-desc');
    const modalLocation = modalContent.querySelector('.location');
    const closeModalButton = modalContent.querySelector('.close-modal');
    const searchInput = document.getElementById('search-input');
    const clearSearchButton = document.getElementById('clear-search-btn');
    const navLinks = document.querySelectorAll('nav ul li a');
    const introductionSection = document.getElementById('introduction');
    const searchSection = document.getElementById('search-section');
    // const sitesContainer = document.getElementById('sites-container'); // Should be already defined
    const mapViewSection = document.getElementById('map-view-section'); // Defined in a previous step
    const aboutSection = document.getElementById('about-section');
    const gallerySection = document.getElementById('gallery-section');

    let navHomeLink = null;
    let navAboutLink = null;
    let navMapViewLink = null;
    let navGalleryLink = null;

    if (navLinks.length > 0) navHomeLink = navLinks[0]; // Assuming Home is the first link
    if (navLinks.length > 1) navAboutLink = navLinks[1]; // Assuming About is the second link
    if (navLinks.length > 2) navMapViewLink = navLinks[2]; // Assuming Map View is the third link (index 2)
    if (navLinks.length > 3) navGalleryLink = navLinks[3]; // Assuming Gallery is the fourth link (index 3)


    // Array of modal elements to animate
    const animatedModalElements = [modalSiteName, modalSiteImage, modalLongDesc, modalLocation];

    let mapInstance = null;
    let lastFocusedElement; // To store the element that opened the modal
    let modalKeydownListener; // To store the focus trap event listener
    let documentKeydownListener; // To store the escape key event listener

    function displaySites(sites) {
        // Example: at the beginning of displaySites(sites)
        const mapViewSection = document.getElementById('map-view-section');
        if (mapViewSection && !mapViewSection.classList.contains('hidden')) {
            mapViewSection.classList.add('hidden');
            // Potentially show the sites-container again if it was hidden
            if (sitesContainer && sitesContainer.classList.contains('hidden')) {
                 sitesContainer.classList.remove('hidden');
            }
        }
        if (!sitesContainer) return; // Guard clause for robustness
        // Clear placeholder content but keep the comment if it exists
        const commentNodes = [];
        sitesContainer.childNodes.forEach(node => {
            if (node.nodeType === Node.COMMENT_NODE) {
                commentNodes.push(node.cloneNode());
            }
        });
        sitesContainer.innerHTML = ''; // Clear all content
        commentNodes.forEach(comment => sitesContainer.appendChild(comment)); // Add comments back

        if (sites.length === 0) {
            sitesContainer.innerHTML = '<p id="no-results-message">No matching sites found.</p>';
            return;
        }

        sites.forEach((site, index) => { // Added index parameter
            const siteCard = document.createElement('article');
            siteCard.classList.add('site-card');
            // Note: Initial opacity:0 and transform:translateY(20px) are set in CSS
            siteCard.innerHTML = `
                <img data-src="${site.image_url}" alt="${site.name}" class="lazy-load">
                <h2>${site.name}</h2>
                <p class="short-desc">${site.short_description}</p>
                <button class="learn-more" data-id="${site.id}">Learn More</button>
            `;
            sitesContainer.appendChild(siteCard);

            // Staggered appearance
            setTimeout(() => {
                siteCard.classList.add('card-visible');
            }, index * 100); // 100ms delay per card
        });
        initializeLazyLoading(); // Call lazy loading initialization
    }

    function initializeLazyLoading() {
        const lazyImages = sitesContainer.querySelectorAll('img.lazy-load');

        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.onload = function() {
                            this.classList.add('image-loaded');
                        };
                        img.onerror = function() {
                            this.classList.add('image-error');
                            // 'this.alt' initially holds site.name
                            this.alt = 'Failed to load image for ' + this.alt + '.';
                            if (this.dataset.src) this.removeAttribute('data-src'); // Clean up data-src
                        };
                        img.src = img.dataset.src;
                        img.classList.remove('lazy-load'); // Removed once processing starts
                        observer.unobserve(img); // Unobserve after setting src
                    }
                });
            }, { rootMargin: '0px 0px 50px 0px' }); // Start loading 50px before they enter viewport

            lazyImages.forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for older browsers: load all images immediately
            lazyImages.forEach(img => {
                img.onload = function() {
                    this.classList.add('image-loaded');
                };
                img.onerror = function() {
                    this.classList.add('image-error');
                    // 'this.alt' initially holds site.name
                    this.alt = 'Failed to load image for ' + this.alt + '.';
                    if (this.dataset.src) this.removeAttribute('data-src'); // Clean up data-src
                };
                img.src = img.dataset.src;
                img.classList.remove('lazy-load');
            });
        }
    }

    // Function to handle focus trapping within the modal
    function trapFocus(event) {
        if (event.key !== 'Tab') return;

        const focusableModalElements = Array.from(modalContent.querySelectorAll(
            'button.close-modal' // Only inherently interactive elements like buttons
        )).filter(el => el.offsetParent !== null); // Filter for visible elements

        if (focusableModalElements.length === 0) return;

        const firstFocusableElement = focusableModalElements[0];
        const lastFocusableElement = focusableModalElements[focusableModalElements.length - 1];
        const currentElement = document.activeElement;

        if (event.shiftKey) { // Shift + Tab
            if (currentElement === firstFocusableElement) {
                event.preventDefault();
                lastFocusableElement.focus();
            }
        } else { // Tab
            if (currentElement === lastFocusableElement) {
                event.preventDefault();
                firstFocusableElement.focus();
            }
        }
        // If the focus is not on the first or last, or if there's only one, default tab behavior is fine within the modal elements
    }

    // Function to handle Escape key press for closing the modal
    function escapeKeyClose(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }

    function openModal(siteId) {
        lastFocusedElement = document.activeElement; // Store the element that triggered the modal

        const site = heritageSitesData.find(s => s.id === parseInt(siteId));
        if (!site) {
            return;
        }

        modalSiteName.textContent = site.name;

        // Clear previous error states
        modalSiteImage.classList.remove('image-error');
        modalSiteImage.alt = site.name; // Set base alt text

        // Remove previous named error handler if any
        if (modalSiteImage.currentErrorHandler) {
            modalSiteImage.removeEventListener('error', modalSiteImage.currentErrorHandler);
        }

        // Define the new error handler for the current site
        // 'site' variable is accessible here due to closure
        const handleModalImageError = function() {
            this.classList.add('image-error');
            this.alt = 'Image for ' + site.name + ' is not available. Please check the URL or try again later.';
            // Ensure this function is not called repeatedly for the same error by removing itself
            this.removeEventListener('error', handleModalImageError);
        };

        modalSiteImage.currentErrorHandler = handleModalImageError; // Store the handler
        modalSiteImage.addEventListener('error', modalSiteImage.currentErrorHandler);

        // Then, set the src:
        modalSiteImage.src = site.image_url;

        let fullDescription = site.long_description;
        
        // Add specific sites/locations
        if (site.specific_sites && site.specific_sites.length > 0) {
            fullDescription += `<br><br><strong>Key Locations:</strong><ul>${site.specific_sites.map(ss => `<li>${ss}</li>`).join('')}</ul>`;
        }
        
        // Add key structures
        if (site.key_structures && site.key_structures.length > 0) {
            fullDescription += `<br><br><strong>Key Structures:</strong><ul>${site.key_structures.map(ks => `<li>${ks}</li>`).join('')}</ul>`;
        }
        
        // Add key features (for railway)
        if (site.key_features && site.key_features.length > 0) {
            fullDescription += `<br><br><strong>Key Features:</strong><ul>${site.key_features.map(kf => `<li>${kf}</li>`).join('')}</ul>`;
        }
        
        // Add biodiversity info (for Western Ghats)
        if (site.biodiversity && site.biodiversity.length > 0) {
            fullDescription += `<br><br><strong>Biodiversity Highlights:</strong><ul>${site.biodiversity.map(bio => `<li>${bio}</li>`).join('')}</ul>`;
        }
        
        // Add key species (for national parks)
        if (site.key_species && site.key_species.length > 0) {
            fullDescription += `<br><br><strong>Key Species:</strong><ul>${site.key_species.map(species => `<li>${species}</li>`).join('')}</ul>`;
        }
        
        // Add architectural features
        if (site.architectural_features && site.architectural_features.length > 0) {
            fullDescription += `<br><br><strong>Architectural Features:</strong><ul>${site.architectural_features.map(feature => `<li>${feature}</li>`).join('')}</ul>`;
        }
        
        // Add historical information
        let historicalInfo = '';
        if (site.year_built) historicalInfo += `<strong>Built:</strong> ${site.year_built}<br>`;
        if (site.year_established) historicalInfo += `<strong>Established:</strong> ${site.year_established}<br>`;
        if (site.dynasty) historicalInfo += `<strong>Dynasty:</strong> ${site.dynasty}<br>`;
        if (site.patron) historicalInfo += `<strong>Patron:</strong> ${site.patron}<br>`;
        if (site.engineer) historicalInfo += `<strong>Engineer:</strong> ${site.engineer}<br>`;
        if (site.architectural_style) historicalInfo += `<strong>Style:</strong> ${site.architectural_style}<br>`;
        if (site.area) historicalInfo += `<strong>Area:</strong> ${site.area}<br>`;
        if (site.elevation_range) historicalInfo += `<strong>Elevation:</strong> ${site.elevation_range}<br>`;
        if (site.gauge) historicalInfo += `<strong>Gauge:</strong> ${site.gauge}<br>`;
        if (site.materials) historicalInfo += `<strong>Materials:</strong> ${site.materials}<br>`;
        
        if (historicalInfo) {
            fullDescription += `<br><br><strong>Historical Details:</strong><br>${historicalInfo}`;
        }
        
        // Add significance
        if (site.significance) {
            fullDescription += `<br><strong>Significance:</strong> ${site.significance}`;
        }
        
        modalLongDesc.innerHTML = fullDescription; // Use innerHTML for lists

        modalLocation.textContent = `Coordinates: ${site.coordinates}`;

        // Prepare elements for animation
        animatedModalElements.forEach(el => {
            el.classList.add('modal-element-animate');
            el.classList.remove('modal-element-visible'); // Ensure it's hidden before animation
        });

        siteDetailModal.classList.remove('hidden'); // This triggers modal container transition (opacity for overlay)

        // After a short delay for the modal container to become visible, trigger element animations
        animatedModalElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('modal-element-visible');
            }, 100 + index * 50); // Start after 100ms, then stagger by 50ms
        });

        // Focus on the close button first or the modal title
        closeModalButton.focus(); // Or modalSiteName if preferred

        // Add event listeners for focus trapping and escape key
        modalKeydownListener = trapFocus; // Assign function directly
        documentKeydownListener = escapeKeyClose; // Assign function directly

        modalContent.addEventListener('keydown', modalKeydownListener);
        document.addEventListener('keydown', documentKeydownListener);
    }

    function closeModal() {
        siteDetailModal.classList.add('hidden');

        // Remove event listeners
        if (modalKeydownListener) {
            modalContent.removeEventListener('keydown', modalKeydownListener);
            modalKeydownListener = null; // Clear stored listener
        }
        if (documentKeydownListener) {
            document.removeEventListener('keydown', documentKeydownListener);
            documentKeydownListener = null; // Clear stored listener
        }

        // Reset elements for next time modal opens
        animatedModalElements.forEach(el => {
            el.classList.remove('modal-element-animate', 'modal-element-visible');
        });

        // Remove tabindex from elements that were made focusable

        // Restore focus to the element that opened the modal
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
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
            // Optional: Pan to default view if map is already initialized
            // mapInstance.setView([10.7905, 78.7047], 7);
            return;
        }

        // Coordinates for Tamil Nadu center and an appropriate zoom level
        const tamilNaduCenter = [10.7905, 78.7047]; // Approximate center of Tamil Nadu
        const initialZoom = 7;

        mapInstance = L.map('map-container').setView(tamilNaduCenter, initialZoom);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapInstance);

        // Add markers for each heritage site
        heritageSitesData.forEach(site => {
            if (site.coordinates) {
                // Assuming coordinates are in "Ndd mm ss Edd mm ss" or similar format.
                // Need to parse these into [latitude, longitude]
                const coordsString = site.coordinates;
                let lat = null;
                let lon = null;

                // Basic parsing for "NXX XX XX EXX XX XX" or "NXX.XXXX EXX.XXXX"
                // This is a simplified parser and might need adjustment based on exact format variability.
                const parts = coordsString.match(/[+-]?([0-9]*[.])?[0-9]+/g);

                if (coordsString.includes('N') && coordsString.includes('E')) {
                    // Example: "N10 46 59 E79 7 57" or "N10.78305 E79.1325"
                    // This will attempt to convert DMS to DD if multiple parts are found for lat/lon,
                    // or use decimal if single part is found.
                    const latParts = [];
                    const lonParts = [];
                    let foundE = false;
                    for(let i=0; i < parts.length; i++) {
                        if(coordsString.substring(coordsString.indexOf(parts[i])-1, coordsString.indexOf(parts[i])).match(/[NE]/i) && i > 0) {
                             if(coordsString.substring(coordsString.indexOf(parts[i])-1, coordsString.indexOf(parts[i])).match(/[E]/i)) foundE = true;
                        }
                        if(!foundE) latParts.push(parseFloat(parts[i]));
                        else lonParts.push(parseFloat(parts[i]));
                    }

                    if (latParts.length === 3) { // Assuming Degrees, Minutes, Seconds
                        lat = latParts[0] + latParts[1]/60 + latParts[2]/3600;
                    } else if (latParts.length === 1) { // Assuming Decimal Degrees
                        lat = latParts[0];
                    }

                    if (lonParts.length === 3) { // Assuming Degrees, Minutes, Seconds
                        lon = lonParts[0] + lonParts[1]/60 + lonParts[2]/3600;
                    } else if (lonParts.length === 1) { // Assuming Decimal Degrees
                        lon = lonParts[0];
                    }

                     // Sign correction based on N/S/E/W if not already handled by parts matching negation
                    if (coordsString.includes('S') && lat > 0) lat *= -1;
                    if (coordsString.includes('W') && lon > 0) lon *= -1;


                } else {
                    // Fallback for simpler "lat, lon" string or if N/E parsing is tricky.
                    // This part might need robust error handling or clearer data format.
                    console.warn(`Coordinates for ${site.name} are in an unrecognized format: ${coordsString}`);
                    // Attempt a simple split if it's comma separated decimal
                     if(parts && parts.length === 2){
                        lat = parseFloat(parts[0]);
                        lon = parseFloat(parts[1]);
                    } else {
                        return; // Skip this site if coordinates can't be parsed
                    }
                }

                if (lat !== null && lon !== null && !isNaN(lat) && !isNaN(lon)) {
                    const marker = L.marker([lat, lon]).addTo(mapInstance);
                    marker.bindPopup(`<b>${site.name}</b><br><button class="map-learn-more" data-id="${site.id}">Learn More</button>`);
                } else {
                    console.warn(`Could not parse coordinates for ${site.name}: ${coordsString}`);
                }
            }
        });

        // Optional: Add a resize listener to invalidate map size if it was hidden when initialized
        // This can be important if the map is initialized in a hidden div
        mapInstance.whenReady(() => {
            setTimeout(() => { // Use a timeout to ensure the container is visible and has dimensions
                mapInstance.invalidateSize();
            }, 0);
        });
    }

    // Event Listeners

    function setActiveLink(activeLink) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    if (navHomeLink) {
        navHomeLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (introductionSection) introductionSection.classList.remove('hidden');
            if (searchSection) searchSection.classList.remove('hidden');
            if (sitesContainer) sitesContainer.classList.remove('hidden');
            if (mapViewSection) mapViewSection.classList.add('hidden');
            if (aboutSection) aboutSection.classList.add('hidden');
            if (gallerySection) gallerySection.classList.add('hidden');
            setActiveLink(navHomeLink);
        });
    }

    if (navAboutLink) {
        navAboutLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (introductionSection) introductionSection.classList.add('hidden');
            if (searchSection) searchSection.classList.add('hidden');
            if (sitesContainer) sitesContainer.classList.add('hidden');
            if (mapViewSection) mapViewSection.classList.add('hidden');
            if (aboutSection) aboutSection.classList.remove('hidden');
            if (gallerySection) gallerySection.classList.add('hidden');
            setActiveLink(navAboutLink);
        });
    }

    if (navMapViewLink) {
        navMapViewLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (introductionSection) introductionSection.classList.add('hidden');
            if (searchSection) searchSection.classList.add('hidden');
            if (sitesContainer) sitesContainer.classList.add('hidden');
            if (aboutSection) aboutSection.classList.add('hidden');
            if (gallerySection) gallerySection.classList.add('hidden');

            if (mapViewSection) mapViewSection.classList.remove('hidden');

            initializeMap(); // Initialize map if not already done
            if (mapInstance) { // mapInstance is from a previous step
                setTimeout(() => { // Use a timeout to ensure the container is visible and has dimensions
                    mapInstance.invalidateSize();
                }, 10);
            }
            setActiveLink(navMapViewLink);
        });
    }

    if (navGalleryLink) {
        navGalleryLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (introductionSection) introductionSection.classList.add('hidden');
            if (searchSection) searchSection.classList.add('hidden');
            if (sitesContainer) sitesContainer.classList.add('hidden');
            if (aboutSection) aboutSection.classList.add('hidden');
            if (mapViewSection) mapViewSection.classList.add('hidden');

            if (gallerySection) gallerySection.classList.remove('hidden');
            
            setActiveLink(navGalleryLink);
        });
    }

    if (mapViewSection) {
        mapViewSection.addEventListener('click', function(event) {
            if (event.target.classList.contains('map-learn-more')) {
                const siteId = event.target.dataset.id;
                if (siteId) {
                    openModal(parseInt(siteId, 10)); // openModal is an existing function
                }
            }
        });
    }

    if (sitesContainer) {
        sitesContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('learn-more')) {
                const siteId = event.target.dataset.id;
                openModal(siteId);
            }
        });
    }

    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    }

    if (siteDetailModal) {
        siteDetailModal.addEventListener('click', (event) => {
            // If the click is directly on the modal overlay (not its content), close it.
            if (event.target === siteDetailModal) {
                closeModal();
            }
        });
    }

    // Event Listener for search input
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.trim();
            // const clearSearchButton = document.getElementById('clear-search-btn'); // Should be defined
            if (clearSearchButton) {
                if (searchTerm !== '') {
                    clearSearchButton.classList.remove('hidden');
                } else {
                    clearSearchButton.classList.add('hidden');
                }
            }

            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            // heritageSitesData is global
            const filteredSites = heritageSitesData.filter(site => {
                return site.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                       site.short_description.toLowerCase().includes(lowerCaseSearchTerm);
            });
            displaySites(filteredSites); // displaySites is global and hides map
            if (navHomeLink) setActiveLink(navHomeLink); // Set Home link active
        });

        // Initial check for search input value on page load (e.g., if pre-filled)
        if (clearSearchButton && searchInput.value.trim() !== '') {
            clearSearchButton.classList.remove('hidden');
        } else if (clearSearchButton) {
            clearSearchButton.classList.add('hidden');
        }

    }

    // Event Listener for clear search button
    if (clearSearchButton) {
        clearSearchButton.addEventListener('click', () => {
            searchInput.value = '';
            displaySites(heritageSitesData); // displaySites is global and hides map
            clearSearchButton.classList.add('hidden');
            searchInput.focus();
            if (navHomeLink) setActiveLink(navHomeLink); // Set Home link active
        });
    }

    // Initial display of sites
    if (heritageSitesData.length > 0 && sitesContainer) {
        displaySites(heritageSitesData);
    } else if (!sitesContainer) {
        // If sitesContainer itself is missing, there's nowhere to put the message.
        // This case implies a fundamental HTML structure issue.
    } else {
        sitesContainer.innerHTML = "<p>No heritage site data to display.</p>"; // Fallback message
    }

    // Page load animations for sections
    const sectionsToAnimate = [
        document.getElementById('introduction'),
        document.getElementById('sites-container'),
        document.querySelector('footer')
    ];

    sectionsToAnimate.forEach((section, index) => {
        if (section) {
            section.classList.add('fade-in-section');
            setTimeout(() => {
                section.classList.add('is-visible');
            }, index * 150); // 150ms stagger
        }
    });

    // Gallery filter functionality
    function initializeGalleryFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const filterValue = button.dataset.filter;

                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.dataset.site === filterValue) {
                        item.classList.remove('filtered-out');
                        // Add animation for showing items
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        item.classList.add('filtered-out');
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                    }
                });
            });
        });
    }

    // Initialize gallery filters when the page loads
    initializeGalleryFilters();

    if (navHomeLink) {
        setActiveLink(navHomeLink);
    } else if (navLinks.length > 0) {
        setActiveLink(navLinks[0]);
    }
});
