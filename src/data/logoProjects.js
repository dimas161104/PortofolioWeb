/**
 * Scalable Logo Design Database
 * =============================================================================
 * PANDUAN PENGGUNAAN & SKALABILITAS:
 * 1. Menambahkan Project Baru:
 *    - Cukup tambahkan objek baru ke dalam array `logoProjects` di bawah ini.
 *    - Layout, kartu, penomoran, dan tata letak akan menyesuaikan secara otomatis.
 *
 * 2. Menambahkan / Mengubah Mockup pada Setiap Project:
 *    - Setiap project memiliki array `mockups: [...]`.
 *    - Anda dapat memasukkan 1, 2, 3, 5, atau lebih mockup (kartu nama, stationery,
 *      kemasan/packaging, signage, merchandise/kaos, dsb).
 *    - Thumbnail selector pada kartu akan otomatis bertambah dan dapat di-scroll
 *      secara mulus tanpa merusak tata letak.
 *
 * 3. Gambar:
 *    - Simpan file gambar atau SVG logo di folder `public/images/`.
 *    - Tulis path relatifnya seperti: `/images/nama-file.png` atau `/images/nama-file.svg`.
 * =============================================================================
 */

export const logoProjects = [
  // ─────────────────────────────────────────────────────────────────────────
  // 01. WARGA LOKAL
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'logo-WARGA LOKAL',
    number: '01',
    title: 'WARGA LOKAL',
    client: 'WARGA LOKAL Studio',
    year: '2025',
    category: 'FOOTBALL DESIGN',
    tagline: 'Geometric Monolith & Architectural Symmetry',
    concept: {
      overview:
        'Konsep identitas visual dirancang dengan prinsip modular brutalist yang merefleksikan presisi struktur ruang, massa beton, dan interaksi cahaya alami dalam arsitektur modern kontemporer.',
      philosophy:
        'Eksplorasi gabungan inisial "A" dengan rasio emas (Golden Ratio 1:1.618) dan bukaan void spasial di tengah, melambangkan pintu masuk menuju dimensi arsitektural yang abadi.',
      typography: 'Custom Geometric Grotesk with Optical Kerning',
      colors: [
        { name: 'Monolith Black', hex: '#111111' },
        { name: 'Swiss Red Accent', hex: '#D20F1B' },
        { name: 'Raw Concrete Light', hex: '#F4F2ED' },
        { name: 'Architectural Stone', hex: '#A8A49C' }
      ]
    },
    primaryLogo: {
      image: '/images/Logo_WargaLokal.png',
      label: 'PRIMARY LOGOMARK // VECTOR GRID',
      alt: 'Aetheria Architectural Logo Construction Grid'
    },
    mockups: [
      {
        id: 'aeth-m1',
        type: 'STATIONERY',
        title: 'Executive Stationery & Foil Business Card',
        image: '/images/Mockup_WARLOK_01.png',
        caption:
          'Aplikasi hot-foil stamping merah dan blind-emboss pada kertas katun G.F Smith 450gsm untuk identitas eksekutif studio.'
      },
      {
        id: 'aeth-m2',
        type: 'SIGNAGE',
        title: 'Exterior Matte Black Steel Signage',
        image: '/images/Mockup_WARLOK_02.png',
        caption:
          'Plat baja hitam matte dengan laser cutting presisi tinggi terpasang pada dinding fasad beton arsitektural studio fisik.'
      },
      {
        id: 'aeth-m3',
        type: 'PACKAGING',
        title: 'Architectural Blueprint Folio & Project Box',
        image: '/images/Mockup_WARLOK_05.png',
        caption:
          'Boks arsip portofolio proyek klien berukuran A3 dengan sablon monokrom dan pengunci magnetik kustom.'
      }
    ],
    tags: ['MINIMALIST', 'GEOMETRIC', 'ARCHITECTURE', 'SWISS GRID', 'IDENTITY'],
    deliverables: 'Vector Logomark, Wordmark Lockups, Brand Guidelines (80-Page), Physical Stationery & Signage'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 02. VORTEX — Dynamic Audio & Motion Labs
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'logo-RuangSinggah',
    number: '02',
    title: 'Ruang Singgah',
    client: 'Self Project',
    year: '2025',
    category: 'Coffeeshop',
    tagline: 'Modern and calm',
    concept: {
      overview:
        'Visualisasi kinetik dari frekuensi gelombang suara (harmonic audio frequency) yang dipadukan dengan akselerasi gerakan visual dinamis untuk label musik dan studio kreasi audio digital.',
      philosophy:
        'Pola spiral vortex multi-lapis merepresentasikan resonansi audio yang terus berputar, berosilasi, dan menembus batasan medium suara analog dan synthesizer digital.',
      typography: 'Kinetic Display Grotesk & Technical Monospace',
      colors: [
        { name: 'Deep Obsidian', hex: '#121215' },
        { name: 'Signal Neon Red', hex: '#D20F1B' },
        { name: 'Pure Signal White', hex: '#FFFFFF' },
        { name: 'Frequency Slate', hex: '#777785' }
      ]
    },
    primaryLogo: {
      image: '/images/Logo_RuangSinggah.png',
      label: 'DYNAMIC SONIC LOGOMARK // OSCILLATION',
      alt: 'Vortex Kinetic Audio Waveform Logomark'
    },
    mockups: [
      {
        id: 'vort-m1',
        type: 'MERCHANDISE',
        title: 'Heavyweight Studio Apparel & Tote Bag',
        image: '/images/Mockup_RS_01.png',
        caption:
          'Penerapan sablon plastisol discharge pada kaos oversized katun 280gsm dan tas kanvas resmi studio kolektif.'
      },
      {
        id: 'vort-m2',
        type: 'PACKAGING',
        title: 'Limited 12-inch Vinyl Record Sleeve',
        image: '/images/Mockup_RS_03.png',
        caption:
          'Jaket piringan hitam vinil 12-inch dengan finishing spot-UV gloss di atas karton tebal doff hitam pekat.'
      },
      {
        id: 'vort-m3',
        type: 'STATIONERY',
        title: 'Cassette Tape Shell & Audio Identity Kit',
        image: '/images/Mockup_RS_02.png',
        caption:
          'Edisi pita kaset audio analog dengan sablon pad transparan dan booklet panduan teknis frekuensi.'
      }
    ],
    tags: ['KINETIC', 'AUDIO FREQUENCY', 'ENTERTAINMENT', 'DARK MODE', 'MOTION'],
    deliverables: 'Responsive Logomark, Audio Reactive Glyphs, Merch System, Physical Vinyl Packaging'
  }
];
