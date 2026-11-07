# Tamil Nadu story-map sources
Checked 7 November 2026.

## Official heritage records and map tables
- https://whc.unesco.org/en/list/249/ and https://whc.unesco.org/en/list/249/maps/ : Mahabalipuram, Pallava rock-cut and structural monuments, inscription 1984 and reference coordinate.
- https://whc.unesco.org/en/list/250/ and https://whc.unesco.org/en/list/250/maps/ : Great Living Chola Temples, Thanjavur 1987, Gangaikondacholapuram and Darasuram extension 2004, component coordinates and architecture comparisons.
- https://whc.unesco.org/en/list/944/ and https://whc.unesco.org/en/list/944/maps/ : Mountain Railways of India, Nilgiri extension 2005, rack-and-pinion mechanism, component reference coordinate. Reference point is not a station or alignment.
- https://whc.unesco.org/en/list/1342/ and https://whc.unesco.org/en/list/1342/maps/ : Western Ghats, 39 selected components, inscription 2012. Forest map tables repeat a sub-cluster reference across components. These points are not park centres, entrances or legal boundaries.

Seven tour stops cover four properties, not seven separate UNESCO inscriptions. The two Western Ghats stops are selected original-project subjects, not an exhaustive inventory of Tamil Nadu components.

## Map and software
- https://leafletjs.com/download.html : Leaflet 1.9.4, vendored ESM and CSS. BSD-2-Clause license retained at vendor/LEAFLET-LICENSE.
- https://www.naturalearthdata.com/about/terms-of-use/ : Natural Earth is public domain. Local generalized geography is not navigation, survey or boundary evidence.
- https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-1-states-provinces/
- https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_10m_admin_1_states_provinces.geojson
  Source download https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_1_states_provinces.geojson . Filtered to Tamil Nadu and adjacent states plus Sri Lankan provinces; only name and geometry retained. No invented roads, rail alignments or site boundary polygons.
- https://operations.osmfoundation.org/policies/tiles/ : reviewed before choosing no remote tiles. No OSM tile scraping, offline bundling or public endpoint dependency is shipped.

## Photography and diagrams
- photos/thanj.jpg: Matthew T Rader, MatthewTRader.com, CC BY-SA 4.0, resized thumbnail, no authored crop. Author attribution and license shown beside the image.
- Source https://commons.wikimedia.org/wiki/File:Brihadisvara_Temple%2C_Thanjavur%2C_Tamil_Nadu%2C_India.jpg
- License https://creativecommons.org/licenses/by-sa/4.0/
- Other story visuals are authored concept diagrams, explicitly not measured reconstructions or photographs. They explain the corresponding source-grounded idea, not a literal monument silhouette.
- Original twelve SVG illustrations remain project material, clearly labeled as schematic. The first attempt to obtain other documentary photos encountered Wikimedia rate limiting; stopped, with no repeated download retry. This preview deliberately does not claim photographic coverage of all stops.

## Preservation
Original index.html, script.js and style.css are retained byte-for-byte in original/. All six original records are retained in data/original-content.js and exposed in the live original gallery/narratives disclosure, including their original text. The duplicate Thanjavur record remains in this archive rather than becoming a duplicate UNESCO stop. All twelve original SVGs remain accessible. The earlier six-event chronology remains in source archive; live timeline separates construction eras from UNESCO inscription/extension years and adds the omitted Chola/Nilgiri inscription milestones. Unverified superlatives, dimensions and wildlife suggestions are not promoted to new verified claims.

## Runtime boundaries
No account, booking, payment, geolocation request, tracking, storage, remote scripts or remote map images. No implied driving route, travel time, station or access permission. Leaflet pan/zoom, grouped Chola overview marker, seven-stop selection, next/previous/restart, overview and return to story are local interactions. Choice is temporary by design; no meaningful created data needs persistence.
