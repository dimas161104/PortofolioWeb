/**
 * Client Projects — Internship Section
 *
 * 4 Cards:
 * 1. Patuna — 9:16 / STORY
 * 2. Patuna — 4:5 / CAROUSEL
 * 3. SAPUHI — 9:16 / STORY
 * 4. SAPUHI — 4:5 / CAROUSEL
 *
 * FITUR SLIDE:
 * - Setiap card mendukung 1 hingga 10+ konten (slide).
 * - Tidak ada batasan jumlah slide. Layout, indikator dot, dan counter otomatis menyesuaikan (misal 01/10).
 * - Jika hanya ada 1 slide, tombol panah dan dot disembunyikan otomatis tanpa merusak tata letak.
 */

export const clientCards = [
  // ──────────────────────────────────────────────
  // 01. PATUNA — 9:16 / STORY
  // ──────────────────────────────────────────────
  {
    id: 'patuna-story-9-16',
    client: 'Patuna',
    clientFull: 'Patuna Umrah & Haji',
    clientColor: '#6B3FA0',
    format: '9:16',
    formatLabel: '9:16 / STORY',
    aspectRatio: '9 / 16',
    projectTitle: 'Patuna — Story & Reels Editorial',
    type: 'INSTAGRAM STORY & REELS COVERS',
    year: '2026',
    description:
      'Koleksi visual vertikal format 9:16 untuk Instagram Story & Reels Cover Patuna Umrah & Haji. Dirancang dengan hierarki tipografi tegas, color grading hangat, dan penyesuaian tata letak mobile-first.',
    tools: ['PHOTOSHOP', 'ILLUSTRATOR', 'COLOR GRADING'],
    roleLabel: 'Visual Content & Social Media Designer',
    slides: [
      {
        id: 'patuna-story-01',
        image: '/images/patuna_story_01.png',
        title: "Kategori Istita'ah Jamaah Haji",
        type: 'STORY 01 / INFORMATIONAL',
        description: "Visual edukasi panduan kesiapan kesehatan istita'ah jamaah haji reguler dan khusus."
      },
      {
        id: 'patuna-story-02',
        image: '/images/patuna_story_02.png',
        title: 'Rezeki dari Secangkir Kopi',
        type: 'STORY 02 / REELS COVER',
        description: 'Storytelling human-interest visual kisah jamaah menuju Tanah Suci dari usaha kopi.'
      },
      {
        id: 'patuna-story-03',
        image: '/images/patuna_story_03.png',
        title: 'Ulurkan Tangan Untuk NTT',
        type: 'STORY 03 / HUMANITARIAN',
        description: 'Kampanye donasi tanggap darurat bencana gempa bumi Flores NTT bersama SAPUHI Peduli.'
      },
      {
        id: 'patuna-story-04',
        image: '/images/patuna_story_04.png',
        title: 'Ulurkan Tangan Untuk NTT',
        type: 'STORY 03 / HUMANITARIAN',
        description: 'Kampanye donasi tanggap darurat bencana gempa bumi Flores NTT bersama SAPUHI Peduli.'
      },
      {
        id: 'patuna-story-05',
        image: '/images/patuna_story_05.png',
        title: 'Ulurkan Tangan Untuk NTT',
        type: 'STORY 03 / HUMANITARIAN',
        description: 'Kampanye donasi tanggap darurat bencana gempa bumi Flores NTT bersama SAPUHI Peduli.'
      },
      {
        id: 'patuna-story-06',
        image: '/images/patuna_story_06.png',
        title: 'Ulurkan Tangan Untuk NTT',
        type: 'STORY 03 / HUMANITARIAN',
        description: 'Kampanye donasi tanggap darurat bencana gempa bumi Flores NTT bersama SAPUHI Peduli.'
      },
      {
        id: 'patuna-story-07',
        image: '/images/patuna_story_07.png',
        title: 'Ulurkan Tangan Untuk NTT',
        type: 'STORY 03 / HUMANITARIAN',
        description: 'Kampanye donasi tanggap darurat bencana gempa bumi Flores NTT bersama SAPUHI Peduli.'
      },
      {
        id: 'patuna-story-08',
        image: '/images/patuna_story_08.png',
        title: 'Ulurkan Tangan Untuk NTT',
        type: 'STORY 03 / HUMANITARIAN',
        description: 'Kampanye donasi tanggap darurat bencana gempa bumi Flores NTT bersama SAPUHI Peduli.'
      },
      {
        id: 'patuna-story-09',
        image: '/images/patuna_story_09.png',
        title: 'Ulurkan Tangan Untuk NTT',
        type: 'STORY 03 / HUMANITARIAN',
        description: 'Kampanye donasi tanggap darurat bencana gempa bumi Flores NTT bersama SAPUHI Peduli.'
      }
      /*
        CONTOH MENAMBAH SLIDE 04 - 10:
        {
          id: 'patuna-story-04',
          image: '/images/nama-poster-anda.png',
          title: 'Judul Slide 4',
          type: 'STORY 04 / LABEL',
          description: 'Deskripsi singkat slide 4.'
        },
      */
    ]
  },

  // ──────────────────────────────────────────────
  // 02. PATUNA — 4:5 / CAROUSEL
  // ──────────────────────────────────────────────
  {
    id: 'patuna-carousel-4-5',
    client: 'Patuna',
    clientFull: 'Patuna Umrah & Haji',
    clientColor: '#6B3FA0',
    format: '4:5',
    formatLabel: '4:5 / CAROUSEL',
    aspectRatio: '4 / 5',
    projectTitle: 'Patuna — Feed Carousel Multi-Slide',
    type: 'MULTI-SLIDE FEED CAROUSEL',
    year: '2026',
    description:
      'Rangkaian multi-slide feed carousel Instagram dengan rasio 4:5. Mengulas edukasi medis MCU, prosedur kesiapan dokumen, dan materi kajian dakwah dengan alur slide yang berkesinambungan.',
    tools: ['PHOTOSHOP', 'LAYOUT DESIGN', 'TYPOGRAPHY'],
    roleLabel: 'Editorial Layout & Information Designer',
    slides: [
      {
        id: 'patuna-feed-01',
        image: '/images/patuna_feed_01.png',
        title: 'Pemeriksaan MCU Calon Jamaah Haji',
        type: 'SLIDE 01 / HEALTHCARE GUIDE',
        description: 'Panduan visual pemeriksaan Medical Check-Up (MCU) calon jamaah haji Patuna.'
      },
      {
        id: 'patuna-feed-02',
        image: '/images/poster-04.png',
        title: 'Semuanya Mudah Karena Allah',
        type: 'SLIDE 02 / SPIRITUAL TALK',
        description: 'Visual keynote dakwah inspiratif dengan sentuhan tipografi serif elegan dan studio portraiture.'
      },
      {
        id: 'patuna-feed-03',
        image: '/images/poster-01.png',
        title: "Kategori Istita'ah Kesehatan",
        type: 'SLIDE 03 / PARAMETER MEDIS',
        description: 'Parameter kesiapan fisik jamaah haji sebelum keberangkatan sesuai regulasi Kemenkes.'
      },
      {
        id: 'patuna-feed-04',
        image: '/images/poster-02.png',
        title: 'Kisah Inspiratif Jamaah Patuna',
        type: 'SLIDE 04 / TESTIMONIAL',
        description: 'Dokumentasi narasi human-interest perjalanan spiritual jamaah haji khusus Patuna.'
      },
      {
        id: 'patuna-feed-05',
        image: '/images/poster-13.png',
        title: 'Kolaborasi Kemanusiaan NTT',
        type: 'SLIDE 05 / CSR & CHARITY',
        description: 'Dokumentasi penyaluran bantuan kemanusiaan tanggap darurat bencana Flores NTT.'
      }
      /*
        Bisa ditambah hingga 10 slide:
        {
          id: 'patuna-feed-06',
          image: '/images/poster-06.png',
          title: 'Judul Slide 6',
          type: 'SLIDE 06 / LABEL',
          description: 'Deskripsi konten.'
        },
      */
    ]
  },

  // ──────────────────────────────────────────────
  // 03. SAPUHI — 9:16 / STORY
  // ──────────────────────────────────────────────
  {
    id: 'sapuhi-story-9-16',
    client: 'SAPUHI',
    clientFull: 'Syarikat Penyelenggara Umrah Haji Indonesia',
    clientColor: '#C9A227',
    format: '9:16',
    formatLabel: '9:16 / STORY',
    aspectRatio: '9 / 16',
    projectTitle: 'SAPUHI — Story & Mobile Announcements',
    type: 'MOBILE STORY & BROADCAST',
    year: '2026',
    description:
      'Format vertikal 9:16 untuk pengumuman resmi asosiasi, WhatsApp status broadcast, dan update dinamis kegiatan organisasi SAPUHI di seluruh wilayah Indonesia.',
    tools: ['PHOTOSHOP', 'ILLUSTRATOR', 'BRANDING'],
    roleLabel: 'Visual Identity & Event Designer',
    slides: [
      {
        id: 'sapuhi-story-01',
        image: '/images/poster-06.png',
        title: 'Uji Kekompakan Anggota SAPUHI',
        type: 'STORY 01 / COMMUNITY CAMPAIGN',
        description: 'Kampanye sosial media interaktif untuk membangun kekompakan antar agen travel anggota.'
      },
      {
        id: 'sapuhi-story-02',
        image: '/images/poster-05.png',
        title: 'Mukernas III 2026 Announcement',
        type: 'STORY 02 / EVENT TEASER',
        description: 'Teaser visual vertikal pelaksanaan Musyawarah Kerja Nasional ke-3 SAPUHI.'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 04. SAPUHI — 4:5 / CAROUSEL
  // ──────────────────────────────────────────────
  {
    id: 'sapuhi-carousel-4-5',
    client: 'SAPUHI',
    clientFull: 'Syarikat Penyelenggara Umrah Haji Indonesia',
    clientColor: '#C9A227',
    format: '4:5',
    formatLabel: '4:5 / CAROUSEL',
    aspectRatio: '4 / 5',
    projectTitle: 'SAPUHI — Mukernas III Feed Carousel',
    type: 'EVENT CAROUSEL & PHOTO CAMPAIGN',
    year: '2026',
    description:
      'Feed carousel rasio 4:5 untuk dokumentasi dan publikasi akbar Mukernas III SAPUHI. Memadukan ornamen batik tradisional, aksen warna emas kehormatan, dan dokumentasi kepemimpinan.',
    tools: ['PHOTOSHOP', 'EVENT BRANDING', 'TYPOGRAPHY'],
    roleLabel: 'Lead Event Graphic Designer',
    slides: [
      {
        id: 'sapuhi-feed-01',
        image: '/images/poster-05.png',
        title: 'Kebersamaan SAPUHI — Mukernas III 2026',
        type: 'SLIDE 01 / MAIN KEY VISUAL',
        description: 'Key visual utama Mukernas III SAPUHI 2026 merayakan soliditas dan persaudaraan anggota.'
      },
      {
        id: 'sapuhi-feed-02',
        image: '/images/poster-06.png',
        title: 'Aktivitas Outdoor & Team Building',
        type: 'SLIDE 02 / OUTDOOR ACTIVITY',
        description: 'Dokumentasi rangkaian kebersamaan dan kegiatan luar ruangan para pengurus asosiasi.'
      },
      {
        id: 'sapuhi-feed-03',
        image: '/images/poster-05.png',
        title: 'Sidang Pleno & Arahan Kebijakan',
        type: 'SLIDE 03 / PLENARY SESSION',
        description: 'Dokumentasi pemaparan program kerja dan evaluasi tahunan pengurus pusat SAPUHI.'
      }
    ]
  }
];
