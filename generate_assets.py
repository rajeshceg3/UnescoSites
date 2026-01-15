import os
import random

# Color Palettes (Stripe/Modern Heritage)
PALETTES = {
    'temple': ['#4C1D1D', '#B91C1C', '#F59E0B'], # Deep Red to Gold
    'nature': ['#064E3B', '#10B981', '#34D399'], # Deep Green to Emerald
    'railway': ['#1E3A8A', '#3B82F6', '#93C5FD'], # Deep Blue to Sky
    'stone':   ['#78350F', '#D97706', '#FCD34D'], # Brown to Amber
    'default': ['#111827', '#4B5563', '#9CA3AF']  # Gray/Slate
}

IMAGES = {
    # Temples
    'great_chola_temples.svg': {'type': 'temple', 'title': 'Great Living Chola Temples'},
    'brihadeeswara_temple.svg': {'type': 'temple', 'title': 'Brihadeeswara Temple'},
    'thanjavur_periya_kovil.svg': {'type': 'temple', 'title': 'Thanjavur Periya Kovil'},

    # Mahabalipuram (Stone)
    'mahabalipuram_monuments.svg': {'type': 'stone', 'title': 'Mahabalipuram Monuments'},
    'descent_of_the_ganges.svg': {'type': 'stone', 'title': 'Descent of the Ganges'},
    'pancha_rathas.svg': {'type': 'stone', 'title': 'Pancha Rathas'},

    # Nature
    'western_ghats_kalakad.svg': {'type': 'nature', 'title': 'Kalakad-Mundanthurai'},
    'western_ghats_mukurti.svg': {'type': 'nature', 'title': 'Mukurti National Park'},
    'western_ghats_landscape.svg': {'type': 'nature', 'title': 'Western Ghats'},

    # Railway
    'nilgiri_mountain_railway.svg': {'type': 'railway', 'title': 'Nilgiri Mountain Railway'},
    'nilgiri_steam.svg': {'type': 'railway', 'title': 'Nilgiri Steam'},

    # Art
    'chola_bronzes.svg': {'type': 'stone', 'title': 'Chola Bronzes'}
}

TEMPLATE = """<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:{color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:{color2};stop-opacity:1" />
    </linearGradient>
    <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="20" height="40" fill="{color3}" fill-opacity="0.1" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#grad)" />
  <rect width="100%" height="100%" fill="url(#pattern)" />

  <!-- Abstract Shapes -->
  <circle cx="800" cy="0" r="300" fill="{color3}" fill-opacity="0.15" />
  <circle cx="0" cy="600" r="250" fill="{color3}" fill-opacity="0.1" />

  <!-- Text -->
  <text x="50%" y="45%" font-family="'Playfair Display', Georgia, serif" font-weight="bold" font-size="48" fill="#ffffff" text-anchor="middle" dominant-baseline="middle" style="text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
    {line1}
  </text>
  <text x="50%" y="55%" font-family="'Playfair Display', Georgia, serif" font-weight="bold" font-size="48" fill="#ffffff" text-anchor="middle" dominant-baseline="middle" style="text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
    {line2}
  </text>

  <!-- Decorative Line -->
  <rect x="300" y="360" width="200" height="4" fill="{color3}" rx="2" opacity="0.8" />
</svg>"""

def generate_svgs():
    output_dir = "images"
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    for filename, info in IMAGES.items():
        colors = PALETTES.get(info['type'], PALETTES['default'])
        title = info['title']

        # Split title for 2 lines if too long
        words = title.split()
        mid = len(words) // 2
        if len(words) > 2:
             line1 = " ".join(words[:mid])
             line2 = " ".join(words[mid:])
        else:
             line1 = title
             line2 = ""

        # Center single line if no second line
        if not line2:
            template_used = TEMPLATE.replace('y="45%"', 'y="50%"').replace('y="55%"', 'y="50%"').replace('<text x="50%" y="55%"', '<!--')
        else:
            template_used = TEMPLATE

        svg_content = template_used.format(
            color1=colors[0],
            color2=colors[1],
            color3=colors[2],
            line1=line1,
            line2=line2
        )

        with open(os.path.join(output_dir, filename), 'w') as f:
            f.write(svg_content)

        print(f"Generated {filename}")

if __name__ == "__main__":
    generate_svgs()
