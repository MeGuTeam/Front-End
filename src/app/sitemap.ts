import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rifqicodes.icu';

  const staticRoutes = [
    '',
    '/home',
    '/home/bc',
    '/home/hiragana',
    '/home/katakana',
    '/home/n5',
    '/home/kanji-n5',
    '/home/katabendaaktifitas',
    '/home/katabendaalam',
    '/home/katabendaangka',
    '/home/katabendaangkabantu',
    '/home/katabendahewandantumbuhan',
    '/home/katabendakerja',
    '/home/katabendakosoado',
    '/home/katabendakota',
    '/home/katabendamakanandanminuman',
    '/home/katabendamedia',
    '/home/katabendaorang',
    '/home/katabendaoutfit',
    '/home/katabendaperalatanrumahtangga',
    '/home/katabendaposisi',
    '/home/katabendasekolah',
    '/home/katabendatraffic',
    '/home/katabendatubuh',
    '/home/katabendawaktu',
    '/home/katabendawarna',
    '/home/katabendawilayah',
    '/home/katahubung',
    '/home/katakerja',
    '/home/kataketerangan',
    '/home/katasifat',
    '/home/katatanya',
    '/home/particle',
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2025-08-03').toISOString(),
  }));
}
