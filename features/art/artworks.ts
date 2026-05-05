export type Artwork = {
  slug: string;
  title: string;
  description: string;
  medium: string;
  year: string;
  iframeSrc: string;
  notes: string[];
};

export const artworks = [
  {
    slug: 'sasayaki',
    title: 'ささやき',
    description: '意見の伝播とゆらぎを題材にした抽象スケッチ',
    medium: 'p5.js',
    year: '2026',
    iframeSrc: '/art/sasayaki/index.html',
    notes: [
      '六角形の網目を流れる光は、個々の考えが伝播していく痕跡として振る舞います。',
      '色は固定された陣営というより、揺れながら保たれる複数の状態として扱っています。',
      '説明的なラベルを置かず、社会的な変化を自然現象のように感じられる見え方を目指しています。',
    ],
  },
] satisfies Artwork[];

export const getArtwork = (slug: string) => {
  return artworks.find((artwork) => artwork.slug === slug);
};
