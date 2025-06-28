document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript file loaded and DOM fully parsed.");

    const heritageSitesData = [
        {
            id: 1,
            name: "Great Living Chola Temples",
            short_description: "Magnificent 11th/12th-century Hindu temples.",
            long_description: "The Great Living Chola Temples were built by kings of the Chola Empire. The site includes three great 11th- and 12th-century Temples: the Brihadisvara Temple at Thanjavur, the Brihadisvara Temple at Gangaikondacholisvaram and the Airavatesvara Temple at Darasuram. They testify to the brilliant achievements of the Chola in architecture, sculpture, painting and bronze casting.",
            image_url: "images/great_chola_temples.jpg", // Placeholder
            coordinates: "N10 46 59 E79 7 57",
            specific_sites: ["Brihadeeswarar Temple, Thanjavur", "Brihadisvara Temple, Gangaikondacholapuram", "Airavatesvara Temple, Darasuram"]
        },
        {
            id: 2,
            name: "Group of Monuments at Mahabalipuram",
            short_description: "7th/8th-century Pallava rock-cut sanctuaries.",
            long_description: "This group of sanctuaries, founded by the Pallava kings, was carved out of rock along the Coromandel coast in the 7th and 8th centuries. It is known especially for its rathas (temples in the form of chariots), mandapas (cave sanctuaries), giant open-air reliefs such as the famous 'Descent of the Ganges', and the Shore Temple.",
            image_url: "images/mahabalipuram_monuments.jpg", // Placeholder
            coordinates: "N12 37 0.012 E80 11 30.012",
            key_structures: ["Rathas", "Mandapas", "Descent of the Ganges", "Shore Temple"]
        },
        {
            id: 3,
            name: "Nilgiri Mountain Railway",
            short_description: "Historic metre-gauge railway scaling the Nilgiri hills.",
            long_description: "The Nilgiri Mountain Railway, a 46-km long metre-gauge single-track railway in Tamil Nadu, was completed in 1908. It scales an elevation from 326m to 2,203m, representing advanced technology of its time and uses a unique rack and pinion system. It's part of the Mountain Railways of India UNESCO site.",
            image_url: "images/nilgiri_mountain_railway.jpg", // Placeholder
            coordinates: "N11 30 37.008 E76 56 8.988"
        },
        {
            id: 4,
            name: "Western Ghats (Kalakad-Mundanthurai)",
            short_description: "Biodiversity hotspot: Kalakad-Mundanthurai Tiger Reserve.",
            long_description: "The Western Ghats are recognized as one of the world’s eight ‘hottest hotspots’ of biological diversity. Kalakad-Mundanthurai Tiger Reserve, part of the Agasthyamalai sub-cluster, is known for its rich flora and fauna, including tigers and many endemic species. It represents the unique montane forest ecosystems of the southern Western Ghats.",
            image_url: "images/western_ghats_kalakad.jpg", // Placeholder
            coordinates: "N8 31 47 E77 14 59 (Agasthyamalai sub-cluster)"
        },
        {
            id: 5,
            name: "Western Ghats (Mukurti National Park)",
            short_description: "High-altitude grasslands and sholas in the Nilgiris.",
            long_description: "Mukurti National Park, located in the Nilgiris sub-cluster of the Western Ghats, is characterized by its montane grasslands and shola forests. It's home to the endangered Nilgiri Tahr and a variety of endemic flora and fauna, showcasing the unique ecosystem of the higher altitudes of the Western Ghats.",
            image_url: "images/western_ghats_mukurti.jpg", // Placeholder
            coordinates: "N11 19 50 E76 18 34 (Nilgiris sub-cluster)"
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

    // Array of modal elements to animate
    const animatedModalElements = [modalSiteName, modalSiteImage, modalLongDesc, modalLocation];

    let lastFocusedElement; // To store the element that opened the modal
    let modalKeydownListener; // To store the focus trap event listener
    let documentKeydownListener; // To store the escape key event listener

    function displaySites(sites) {
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
                        img.src = img.dataset.src;
                        img.classList.remove('lazy-load');
                        img.classList.add('image-loaded');
                        observer.unobserve(img);
                    }
                });
            }, { rootMargin: '0px 0px 50px 0px' }); // Start loading 50px before they enter viewport

            lazyImages.forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for older browsers: load all images immediately
            console.log("IntersectionObserver not supported, loading images directly.");
            lazyImages.forEach(img => {
                img.src = img.dataset.src;
                img.classList.remove('lazy-load');
                img.classList.add('image-loaded');
            });
        }
    }

    // Function to handle focus trapping within the modal
    function trapFocus(event) {
        if (event.key !== 'Tab') return;

        const focusableModalElements = Array.from(modalContent.querySelectorAll(
            'h2, img[tabindex="0"], p[tabindex="0"], button.close-modal'
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
            console.error("Site not found for ID:", siteId);
            return;
        }

        modalSiteName.textContent = site.name;
        modalSiteImage.src = site.image_url;
        modalSiteImage.alt = site.name;
        modalSiteImage.setAttribute('tabindex', '0'); // Make image focusable

        let fullDescription = site.long_description;
        if (site.specific_sites && site.specific_sites.length > 0) {
            fullDescription += `<br><br><strong>Key Locations:</strong><ul>${site.specific_sites.map(ss => `<li>${ss}</li>`).join('')}</ul>`;
        }
        if (site.key_structures && site.key_structures.length > 0) {
            fullDescription += `<br><br><strong>Key Structures:</strong><ul>${site.key_structures.map(ks => `<li>${ks}</li>`).join('')}</ul>`;
        }
        modalLongDesc.innerHTML = fullDescription; // Use innerHTML for lists
        modalLongDesc.setAttribute('tabindex', '0'); // Make long description focusable

        modalLocation.textContent = `Coordinates: ${site.coordinates}`;
        modalLocation.setAttribute('tabindex', '0'); // Make location focusable

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
        modalSiteImage.removeAttribute('tabindex');
        modalLongDesc.removeAttribute('tabindex');
        modalLocation.removeAttribute('tabindex');

        // Restore focus to the element that opened the modal
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    // Event Listeners
    if (sitesContainer) {
        sitesContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('learn-more')) {
                const siteId = event.target.dataset.id;
                openModal(siteId);
            }
        });
    } else {
        console.error("#sites-container not found.");
    }

    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    } else {
        console.error(".close-modal button not found.");
    }

    if (siteDetailModal) {
        siteDetailModal.addEventListener('click', (event) => {
            // If the click is directly on the modal overlay (not its content), close it.
            if (event.target === siteDetailModal) {
                closeModal();
            }
        });
    } else {
        console.error("#site-detail-modal not found.");
    }

    // Event Listener for search input
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.trim(); // Use trim for logic, but keep original for display
            if (clearSearchButton) { // Check if button exists
                if (searchTerm !== '') {
                    clearSearchButton.classList.remove('hidden');
                } else {
                    clearSearchButton.classList.add('hidden');
                }
            }

            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            if (lowerCaseSearchTerm === '') {
                displaySites(heritageSitesData);
            } else {
                const filteredSites = heritageSitesData.filter(site => {
                    return site.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                           site.short_description.toLowerCase().includes(lowerCaseSearchTerm);
                });
                displaySites(filteredSites);
            }
        });

        // Initial check for search input value on page load (e.g., if pre-filled)
        if (clearSearchButton && searchInput.value.trim() !== '') {
            clearSearchButton.classList.remove('hidden');
        } else if (clearSearchButton) {
            clearSearchButton.classList.add('hidden');
        }

    } else {
        console.error("#search-input not found.");
    }

    // Event Listener for clear search button
    if (clearSearchButton) {
        clearSearchButton.addEventListener('click', () => {
            searchInput.value = '';
            displaySites(heritageSitesData); // Display all sites
            clearSearchButton.classList.add('hidden'); // Hide the button
            searchInput.focus(); // Set focus back to the search input
        });
    } else {
        console.error("#clear-search-btn not found.");
    }

    // Initial display of sites
    if (heritageSitesData.length > 0 && sitesContainer) {
        displaySites(heritageSitesData);
    } else if (!sitesContainer) {
        console.error("Cannot display sites because #sites-container is missing.")
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
});
