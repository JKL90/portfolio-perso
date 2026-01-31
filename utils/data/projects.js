// data/projects.js
// Export nommé `projects` — utilisé par app/blog/page.js
export const projects = [
  {
    id: 1,
    // titre affiché (BlogCard utilise title || name)
    title: 'Garage St Jean',
    name: 'Garage St Jean', // optionnel, BlogCard accepte title ou name
    // lien ouvert par le bouton / le titre
    url: '#',
    // chemin d'image (depuis /public)
    cover_image: '/images/garage-st-jean.png',
    // description affichée dans la carte
    description: 'Affiche publicitaire pour Garage St Jean dans le cadre de sa campagne marketing.',
    // date ISO utilisée par timeConverter
    published_at: '2024-08-10T10:00:00Z',
    // métriques facultatives (BlogCard les affiche si présentes)
    public_reactions_count: 12,
    comments_count: 0,
    reading_time_minutes: 1,
    // champs additionnels facultatifs
    tags: ['Canva', 'Design'],
    demo: 'https://demo.portfolio-v1.com',
    code: 'https://github.com/tonrepo/portfolio-v1'
  },
  {
    id: 2,
    title: 'Mobile App (Design)',
    name: 'Mobile App (Design)',
    url: '#',
    cover_image: '/images/travel.jpg',
    description: 'Application de gestion de tâches avec authentification et API REST.',
    published_at: '2024-10-02T08:30:00Z',
    public_reactions_count: 5,
    comments_count: 2,
    reading_time_minutes: 2,
    tags: ['Canva', 'Picsart']
  },
  {
    id: 3,
    title: 'Find&Fix (Design Figma)',
    name: 'Find&Fix (Design Figma)',
    url: 'https://www.figma.com/design/bsZQqBRA66YD2qRUnqZfhT/Find-Fix?node-id=0-1&t=1XVb7H9MgtSFumss-1',
    cover_image: '/images/Mockup_Figma.png',
    description: 'Design Figma pour une application mobile Find&Fix, une application de géolocalisation de garage automobile à proximité et de gestion des entretiens.',
    published_at: '2025-02-15T12:00:00Z',
    public_reactions_count: 3,
    comments_count: 0,
    reading_time_minutes: 1,
    tags: ['Figma', 'FlutterFlow', 'App Inventor'],
    // demo: 'https://expo.dev/@ton/expo-app',
    // code: 'https://github.com/tonrepo/expo-app'
  },
  {
    id: 4,
    title: 'Portfolio',
    name: 'Portfolio',
    url: 'https://portfolio-codja-rodiath.vercel.app/',
    cover_image: '/images/Design_portfolio.png',
    description: 'Prototype mobile (Expo) — synchronisation temps réel et UI componentisée.',
    published_at: '2025-02-15T12:00:00Z',
    public_reactions_count: 3,
    comments_count: 0,
    reading_time_minutes: 1,
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    demo: 'https://expo.dev/@ton/expo-app',
    code: 'https://github.com/tonrepo/expo-app'
  },
  // {
  //   id: 5,
  //   title: 'Mobile App (Expo)',
  //   name: 'Mobile App (Expo)',
  //   url: 'https://expo.dev/@ton/expo-app',
  //   cover_image: '/images/screen.png',
  //   description: 'Prototype mobile (Expo) — synchronisation temps réel et UI componentisée.',
  //   published_at: '2025-02-15T12:00:00Z',
  //   public_reactions_count: 3,
  //   comments_count: 0,
  //   reading_time_minutes: 1,
  //   tags: ['Expo', 'React Native'],
  //   demo: 'https://expo.dev/@ton/expo-app',
  //   code: 'https://github.com/tonrepo/expo-app'
  // },
  // {
  //   id: 6,
  //   title: 'Mobile App (Expo)',
  //   name: 'Mobile App (Expo)',
  //   url: 'https://expo.dev/@ton/expo-app',
  //   cover_image: '/images/screen.png',
  //   description: 'Prototype mobile (Expo) — synchronisation temps réel et UI componentisée.',
  //   published_at: '2025-02-15T12:00:00Z',
  //   public_reactions_count: 3,
  //   comments_count: 0,
  //   reading_time_minutes: 1,
  //   tags: ['Expo', 'React Native'],
  //   demo: 'https://expo.dev/@ton/expo-app',
  //   code: 'https://github.com/tonrepo/expo-app'
  // },
];