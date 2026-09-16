import fs from 'fs';
import path from 'path';

const imagesDir = path.resolve('public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const designProjects = [
  { id: '01', title: 'NEO-MONOLITH IDENTITY', tag: 'IDENTITY / VISUAL SYSTEM', meta: '1600 × 1200 // VECTOR' },
  { id: '03', title: 'DISCIPLINE & DISSENT', tag: 'POSTER / TYPOGRAPHY', meta: '70×100CM // SILKSCREEN' },
  { id: '05', title: 'SYNCHRONIX CAMPAIGN', tag: 'DIGITAL CAMPAIGN', meta: '4K SOCIAL // MODULAR GRID' },
  { id: '07', title: 'KINETIX GUIDELINES', tag: 'EDITORIAL / BOOK DESIGN', meta: '160PP // HARDCOVER' },
  { id: '09', title: 'SUB-TERRANEAN SOUND', tag: 'VISUAL IDENTITY & POSTER', meta: 'SCREENPRINT // BRAND SYSTEM' },
  { id: '10', title: 'VEKTOR JOURNAL 04', tag: 'PRINT PUBLICATION', meta: 'A4 // EDITORIAL GRID' },
  { id: '11', title: 'MONO-FORM ARCHITECTURE', tag: 'SIGNAGE & SPATIAL', meta: 'CNC ETCHED // CONCRETE' },
  { id: '12', title: 'FORM & FRICTION MONOGRAPH', tag: 'EDITORIAL & BINDING', meta: '128PP // SWISS BOUND' }
];

const videoProjects = [
  { id: '02', title: 'MÉAN HAUTE COUTURE', tag: 'FASHION FILM / MOTION', time: '01:44', spec: '4K CINEMA // 16:9 // 60FPS' },
  { id: '04', title: 'JAKARTA DESIGN WEEK', tag: 'DOCUMENTARY & EXHIBITION', time: '02:18', spec: '4K DCI // 2.39:1 // 24FPS' },
  { id: '06', title: 'CONCRETE GRID MOTION', tag: 'EXPERIMENTAL 3D / AUDIO', time: '00:58', spec: 'ULTRA-WIDE // 21:9 // 60FPS' },
  { id: '08', title: 'AURA SPATIAL MOTION', tag: 'TITLE SEQUENCE / MOTION', time: '01:12', spec: '4K UHD // 16:9 // 60FPS' }
];

for (const p of designProjects) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <pattern id="grid-${p.id}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#DDD9D2" stroke-width="1" opacity="0.6"/>
    </pattern>
  </defs>
  <rect width="800" height="600" fill="#ECEAE5"/>
  <rect width="800" height="600" fill="url(#grid-${p.id})"/>
  
  <!-- Technical Swiss crop marks -->
  <line x1="24" y1="24" x2="54" y2="24" stroke="#111111" stroke-width="1.5"/>
  <line x1="24" y1="24" x2="24" y2="54" stroke="#111111" stroke-width="1.5"/>
  <line x1="776" y1="24" x2="746" y2="24" stroke="#111111" stroke-width="1.5"/>
  <line x1="776" y1="24" x2="776" y2="54" stroke="#111111" stroke-width="1.5"/>
  <line x1="24" y1="576" x2="54" y2="576" stroke="#111111" stroke-width="1.5"/>
  <line x1="24" y1="576" x2="24" y2="546" stroke="#111111" stroke-width="1.5"/>
  <line x1="776" y1="576" x2="746" y2="576" stroke="#111111" stroke-width="1.5"/>
  <line x1="776" y1="576" x2="776" y2="546" stroke="#111111" stroke-width="1.5"/>

  <!-- Red Accent Dot & Archive Indicator -->
  <circle cx="44" cy="44" r="5" fill="#D20F1B"/>
  <text x="58" y="48" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" fill="#555555" letter-spacing="1.5">ARCHIVE // REF ${p.id}</text>
  <text x="756" y="48" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600" fill="#777777" text-anchor="end" letter-spacing="1">DESIGN SYSTEM</text>

  <!-- Central Graphic Frame -->
  <rect x="220" y="180" width="360" height="240" fill="#F7F6F4" stroke="#111111" stroke-width="1.5"/>
  <rect x="240" y="200" width="36" height="36" fill="none" stroke="#D20F1B" stroke-width="1.5"/>
  <path d="M240 218 L276 218 M258 200 L258 236" stroke="#D20F1B" stroke-width="1"/>
  
  <text x="400" y="285" font-family="'Inter', sans-serif" font-size="16" font-weight="800" fill="#111111" text-anchor="middle" letter-spacing="1.5">${p.title}</text>
  <text x="400" y="315" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500" fill="#666666" text-anchor="middle" letter-spacing="1.2">${p.meta}</text>
  <text x="400" y="345" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600" fill="#D20F1B" text-anchor="middle" letter-spacing="2">[ R DIMAS ARN ARCHIVE ]</text>

  <!-- Subtle corner crosshairs -->
  <path d="M 400 160 L 400 174 M 400 426 L 400 440" stroke="#999999" stroke-width="1"/>
  <path d="M 206 300 L 216 300 M 584 300 L 594 300" stroke="#999999" stroke-width="1"/>

  <text x="44" y="560" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600" fill="#777777" letter-spacing="1">DIMAS ARN • SWISS DISCIPLINE</text>
  <rect x="748" y="548" width="12" height="12" fill="#D20F1B"/>
</svg>`;
  fs.writeFileSync(path.join(imagesDir, `project-${p.id}.svg`), svg);
}

for (const p of videoProjects) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#18181A"/>
  
  <!-- Subtle scanline / film frame -->
  <line x1="40" y1="64" x2="760" y2="64" stroke="#2B2B30" stroke-width="1"/>
  <line x1="40" y1="536" x2="760" y2="536" stroke="#2B2B30" stroke-width="1"/>

  <!-- Header metadata -->
  <circle cx="44" cy="44" r="4.5" fill="#D20F1B"/>
  <text x="58" y="48" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" fill="#8E8E98" letter-spacing="1.5">${p.spec}</text>
  <text x="756" y="48" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" fill="#D20F1B" text-anchor="end" letter-spacing="1.5">REC ● 24FPS</text>

  <!-- Large Center Play Icon Pill -->
  <circle cx="400" cy="290" r="46" fill="#24242A" stroke="#3E3E48" stroke-width="2"/>
  <polygon points="392,274 416,290 392,306" fill="#FFFFFF"/>

  <!-- Title overlay -->
  <text x="400" y="375" font-family="'Inter', sans-serif" font-size="16" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="1.5">${p.title}</text>
  <text x="400" y="402" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500" fill="#888892" text-anchor="middle" letter-spacing="1.2">${p.tag}</text>

  <!-- Bottom timecode badge -->
  <text x="44" y="558" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" fill="#77777E" letter-spacing="1">TIMECODE // 00:00:00:00</text>
  <rect x="696" y="542" width="60" height="22" rx="3" fill="#2E2E36"/>
  <text x="726" y="557" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">${p.time}</text>
</svg>`;
  fs.writeFileSync(path.join(imagesDir, `project-${p.id}.svg`), svg);
}

console.log('All 12 project SVG assets generated successfully!');
