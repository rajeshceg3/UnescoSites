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
            numberOfRatings: 0
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
            numberOfRatings: 0
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
            numberOfRatings: 0
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
            numberOfRatings: 0
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
            numberOfRatings: 0
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
            numberOfRatings: 0
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
    // sitesContainer is already defined in the outer scope
    // mapViewSection is already defined in the outer scope
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
    let currentAnimatedElements = []; // Declare here for wider access by openModal and closeModal

    // Load ratings from localStorage into heritageSitesData
    heritageSitesData.forEach(site => {
        const storedRating = getRatingFromStorage(site.id);
        site.averageRating = storedRating.averageRating;
        site.numberOfRatings = storedRating.numberOfRatings;
        // We are not pre-loading site.reviews here to save memory;
        // reviews are loaded on demand when the modal opens.
    });

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
                <div class="star-rating" id="rating-${site.id}"></div>
                <button class="learn-more" data-id="${site.id}">Learn More</button>
            `;
            sitesContainer.appendChild(siteCard);

            // Display the average rating for the card
            displayAverageRating(site.id, site.averageRating, site.numberOfRatings);

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

        // More comprehensive selector for focusable elements
        const focusableElementsString = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
        let focusableModalElements = Array.from(
            modalContent.querySelectorAll(focusableElementsString)
        ).filter(el => el.offsetParent !== null); // Filter for visible elements

        // If the review form elements are dynamically added, ensure they are included.
        // The current implementation dynamically adds review form, so querySelectorAll on modalContent should find them.

        if (focusableModalElements.length === 0) {
            // If no focusable elements (e.g. modal content is just text),
            // prevent tabbing out of the modal content area by focusing the modal itself or its first child.
            // This might be too aggressive if there are truly no interactive elements.
            // For now, if this case is hit, it means the modal is not properly interactive.
            // A simple return might be fine, or focusing the modalContent itself if it has tabindex="0"
            return;
        }

        // If focusableModalElements includes elements outside the desired trap area (e.g. if modalContent is not the top container)
        // one might need to verify parentage. But here modalContent is the direct container.

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

        // Remove existing review sections if they exist to prevent duplication
        const existingAvgRating = modalContent.querySelector('.average-rating-modal');
        if (existingAvgRating) existingAvgRating.remove();
        const existingReviewsList = modalContent.querySelector('.reviews-list');
        if (existingReviewsList) existingReviewsList.remove();
        const existingReviewForm = modalContent.querySelector('.review-form-container');
        if (existingReviewForm) existingReviewForm.remove();

        // Average Rating Display
        const avgRatingDiv = document.createElement('div');
        avgRatingDiv.className = 'average-rating-modal';
        avgRatingDiv.id = `modal-avg-rating-${site.id}`;
        avgRatingDiv.textContent = 'No ratings yet'; // This will be updated later
        modalContent.appendChild(avgRatingDiv);

        // Reviews List
        const reviewsListDiv = document.createElement('div');
        reviewsListDiv.className = 'reviews-list';
        reviewsListDiv.id = `modal-reviews-list-${site.id}`;
        reviewsListDiv.innerHTML = '<h3>User Reviews</h3><ul></ul>'; // List items will be added here
        modalContent.appendChild(reviewsListDiv);

        // Review Submission Form
        const reviewFormContainer = document.createElement('div');
        reviewFormContainer.className = 'review-form-container';
        reviewFormContainer.innerHTML = `
            <h3>Leave a Review</h3>
            <form id="review-form-${site.id}">
                <div class="rating-input">
                    <label for="rating-stars-${site.id}">Rating:</label>
                    <select id="rating-stars-${site.id}" name="rating">
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                    </select>
                </div>
                <div>
                    <label for="review-text-${site.id}">Review:</label>
                    <textarea id="review-text-${site.id}" name="reviewText" rows="4" required></textarea>
                </div>
                <button type="submit">Submit Review</button>
            </form>
        `;
        modalContent.appendChild(reviewFormContainer);

        // Prepare elements for animation
        // Add new elements to animatedModalElements if they should also be animated
        const newAnimatedElements = [avgRatingDiv, reviewsListDiv, reviewFormContainer];
        // Assign to the higher-scoped variable:
        currentAnimatedElements = [modalSiteName, modalSiteImage, modalLongDesc, modalLocation, ...newAnimatedElements];


        currentAnimatedElements.forEach(el => { // Use the higher-scoped variable
            el.classList.add('modal-element-animate');
            el.classList.remove('modal-element-visible'); // Ensure it's hidden before animation
        });

        siteDetailModal.classList.remove('hidden'); // This triggers modal container transition (opacity for overlay)

        // After a short delay for the modal container to become visible, trigger element animations
        currentAnimatedElements.forEach((el, index) => { // Use the higher-scoped variable
            setTimeout(() => {
                el.classList.add('modal-element-visible');
            }, 100 + index * 50); // Start after 100ms, then stagger by 50ms
        });

        // Attach event listener to the new review form
        const reviewForm = document.getElementById(`review-form-${site.id}`);
        if (reviewForm) {
            reviewForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const ratingSelect = document.getElementById(`rating-stars-${site.id}`);
                const reviewTextarea = document.getElementById(`review-text-${site.id}`);

                const ratingValue = parseInt(ratingSelect.value, 10);
                const reviewTextValue = reviewTextarea.value.trim();

                if (reviewTextValue) { // Basic validation: review text should not be empty
                    handleReviewSubmission(site.id, ratingValue, reviewTextValue);
                    // Optionally clear form
                    ratingSelect.value = "5"; // Reset to default
                    reviewTextarea.value = '';
                } else {
                    // Handle empty review text case, e.g., show an error message
                    alert("Please write a review before submitting.");
                }
            });
        }

        // Load and display existing ratings and reviews
        const storedRatingData = getRatingFromStorage(site.id);
        displayAverageRating(site.id, storedRatingData.averageRating, storedRatingData.numberOfRatings);
        displayReviewsInModal(site.id);

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
        // currentAnimatedElements is now accessible from the higher scope
        if (currentAnimatedElements && currentAnimatedElements.length > 0) { // Check if it has been populated
            currentAnimatedElements.forEach(el => {
                if (el) { // Add a check for el in case the array was modified unexpectedly
                    el.classList.remove('modal-element-animate', 'modal-element-visible');
                }
            });
        }

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
                const { lat, lon } = parseCoordinates(site.coordinates); // Use the new parser

                if (lat !== null && lon !== null && !isNaN(lat) && !isNaN(lon)) {
                    const marker = L.marker([lat, lon]).addTo(mapInstance);
                    marker.bindPopup(`<b>${site.name}</b><br><button class="map-learn-more" data-id="${site.id}">Learn More</button>`);
                } else {
                    // Warning already logged by parseCoordinates if parsing failed.
                    // If site.coordinates was valid but parseCoordinates returned nulls for some other reason,
                    // an additional log here could be useful, but parseCoordinates should be comprehensive.
                    // console.warn(`Could not use coordinates for ${site.name}: ${site.coordinates}`); // Example
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

    // --- Review and Rating Functions ---

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
            // clearSearchButton is already defined in the outer scope
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
