import { KelasTampilanDepan, LevelMateri, DaftarMateriN5 } from '../types/home';

export const kelasTampilanDepan: KelasTampilanDepan[] = [
  {
    alt: 'Image Kelas Particle',
    title: 'Kelas Particle',
    description: `Pelajari partikel dalam bahasa Jepang seperti 「は」、「が」、「を」 yang berperan penting dalam menyusun kalimat. Kelas ini cocok untuk pemula yang ingin memahami struktur dasar kalimat bahasa Jepang.`,
    handling: '/home/particle',
  },
  {
    alt: 'Image Kelas Katakana',
    title: 'Kelas Katakana',
    description: `Fokus pada huruf Katakana, salah satu dari tiga sistem penulisan Jepang. Katakana digunakan untuk kata serapan asing, nama ilmiah, dan efek suara. Cocok untuk kamu yang ingin bisa membaca menu, merek, atau kata-kata asing dalam bahasa Jepang.`,
    handling: '/home/katakana',
  },
  {
    alt: 'Image Kelas Hiragana',
    title: 'Kelas Hiragana',
    description: `Pelajari Hiragana, sistem aksara fonetik dasar dalam bahasa Jepang. Hiragana adalah fondasi dari membaca dan menulis, dan wajib dikuasai sebelum melangkah ke tingkat lanjut.`,
    handling: '/home/hiragana',
  },
  {
    alt: 'Image Kelas Percakapan Dasar',
    title: 'Kelas Percakapan Dasar',
    description: `Pelajari percakapan dasar yang sering digunakan dalam kehidupan sehari-hari di Jepang. Materi mencakup salam, perkenalan, belanja, dan interaksi sosial lainnya. Sangat cocok untuk persiapan traveling atau tinggal di Jepang.`,
    handling: '/home/bc',
  },
];

export const levelMateri: LevelMateri[] = [
  {
    title: 'N5',
    description:
      'Pemula – kosakata dan tata bahasa dasar, seperti perkenalan diri dan percakapan sehari-hari.',
    handling: '/home/n5',
    estimatedTime: '1–2 bulan',
    topics: ['Hiragana', 'Katakana', 'Partikel dasar', 'Kata kerja dasar'],
    order: 1,
    isAvailable: true,
  },
  {
    title: 'N4',
    description:
      'Dasar menengah – memahami percakapan umum dan membaca kalimat sederhana.',
    handling: '/home/n4',
    estimatedTime: '2–3 bulan',
    topics: ['Keigo dasar', 'Bentuk lampau', 'Bentuk sopan', 'Kata sifat'],
    order: 2,
    isAvailable: false,
  },
  {
    title: 'N3',
    description:
      'Menengah – memahami artikel pendek, percakapan kompleks, dan penggunaan tata bahasa yang lebih luas.',
    handling: '/home/n3',
    estimatedTime: '3–4 bulan',
    topics: ['Sinonim/antonim', 'Partikel kompleks', 'Tata Bahasa Lanjutan'],
    order: 3,
    isAvailable: false,
  },
  {
    title: 'N2',
    description:
      'Menengah atas – membaca teks panjang dan memahami berita atau percakapan cepat.',
    handling: '/home/n2',
    estimatedTime: '4–6 bulan',
    topics: [
      'Teks opini',
      'Ekspresi idiomatik',
      'Kata sambung',
      'Nuansa makna',
    ],
    order: 4,
    isAvailable: false, // bisa diubah ke true saat sudah selesai
  },
  {
    title: 'N1',
    description:
      'Lanjutan – memahami bacaan akademik dan profesional, serta percakapan abstrak dengan nuansa halus.',
    handling: '/home/n1',
    estimatedTime: '6–9 bulan',
    topics: [
      'Artikel ilmiah',
      'Ekspresi abstrak',
      'Nuansa sopan santun tingkat tinggi',
    ],
    order: 5,
    isAvailable: false,
  },
];

export const daftarMateriN5: DaftarMateriN5[] = [
  {
    id: 1,
    kategori: 'Kanji',
    list: [
      {
        id: 1,
        name: 'Kanji - N5',
        handling: '/home/n5/kanji-n5',
      },
    ],
  },
  {
    id: 2,
    kategori: 'Kata Sifat',
    list: [
      {
        id: 1,
        name: 'Kata Sifat - N5',
        handling: '/home/n5/katasifat',
      },
    ],
  },
  {
    id: 3,
    kategori: 'Kata Keterangan',
    list: [
      {
        id: 1,
        name: 'Kata Keterangan - N5',
        handling: '/home/n5/kataketerangan',
      },
    ],
  },
  {
    id: 4,
    kategori: 'Kata Kerja',
    list: [
      {
        id: 1,
        name: 'Kata Kerja - N5',
        handling: '/home/n5/katakerja',
      },
    ],
  },
  {
    id: 5,
    kategori: 'Kata Hubung',
    list: [
      {
        id: 1,
        name: 'Kata Hubung - N5',
        handling: '/home/n5/katahubung',
      },
    ],
  },
  {
    id: 6,
    kategori: 'Kata Tanya',
    list: [
      {
        id: 1,
        name: 'Kata Tanya - N5',
        handling: '/home/n5/katatanya',
      },
    ],
  },
];

export const dataKataBenda: DaftarMateriN5[] = [
  {
    id: 5,
    kategori: 'Kata Benda',
    list: [
      {
        id: 1,
        name: 'Kata Benda - Aktifitas',
        handling: '/home/n5/katabendaaktifitas',
      },
      {
        id: 2,
        name: 'Kata Benda - Hewan & Tumbuhan',
        handling: '/home/n5/katabendahewandantumbuhan',
      },
      {
        id: 3,
        // Aux number indonya apa?
        name: 'Kata Benda - Angka (Bantu)',
        handling: '/home/n5/katabendaangkabantu',
      },
      {
        id: 4,
        name: 'Kata Benda - Tubuh',
        handling: '/home/n5/katabendatubuh',
      },
      {
        id: 5,
        name: 'Kata Benda - Kota',
        handling: '/home/n5/katabendakota',
      },
      {
        id: 6,
        name: 'Kata Benda - Warna',
        handling: '/home/n5/katabendawarna',
      },
      {
        id: 7,
        name: 'Kata Benda - Makanan & Minuman',
        handling: '/home/n5/katabendamakanandanminuman',
      },
      {
        id: 8,
        name: 'Kata Benda - Peralatan Rumah Tangga',
        handling: '/home/n5/katabendaperalatanrumahtangga',
      },
      {
        id: 9,
        name: 'Kata Benda - Kosoado',
        handling: '/home/n5/katabendakosoado',
      },
      {
        id: 10,
        name: 'Kata Benda - Media',
        handling: '/home/n5/katabendamedia',
      },
      {
        id: 11,
        name: 'Kata Benda - Alam',
        handling: '/home/n5/katabendaalam',
      },
      {
        id: 12,
        name: 'Kata Benda - Angka',
        handling: '/home/n5/katabendaangka',
      },
      {
        id: 13,
        name: 'Kata Benda - Outfit',
        handling: '/home/n5/katabendaoutfit',
      },
      {
        id: 14,
        name: 'Kata Benda - Orang',
        handling: '/home/n5/katabendaorang',
      },
      {
        id: 15,
        name: 'Kata Benda - Posisi',
        handling: '/home/n5/katabendaposisi',
      },
      {
        id: 16,
        name: 'Kata Benda - Wilayah',
        handling: '/home/n5/katabendawilayah',
      },
      {
        id: 17,
        name: 'Kata Benda - Sekolah',
        handling: '/home/n5/katabendasekolah',
      },
      {
        id: 18,
        name: 'Kata Benda - Waktu',
        handling: '/home/n5/katabendatraffic',
      },
      {
        id: 19,
        name: 'Kata Benda - Traffic',
        handling: '/home/n5/katabendatraffic',
      },
      {
        id: 20,
        name: 'Kata Benda - Kerja',
        handling: '/home/n5/katabendakerja',
      },
    ],
  },
];
