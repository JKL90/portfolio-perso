// data/projects.js
// Export nommé `projects` — utilisé par app/blog/page.js
export const projects = [
  {
    id: 1,
    // titre affiché (BlogCard utilise title || name)
    title: 'Garage St Jean',
    name: 'Garage St Jean', // optionnel, BlogCard accepte title ou name
    // lien ouvert par le bouton / le titre
    url: 'https://demo.portfolio-v1.com',
    // chemin d'image (depuis /public)
    cover_image: '/images/garage-st-jean.png',
    // description affichée dans la carte
    description: 'Affiche publicitaire pour Garage St Jean.',
    // date ISO utilisée par timeConverter
    published_at: '2024-08-10T10:00:00Z',
    // métriques facultatives (BlogCard les affiche si présentes)
    public_reactions_count: 12,
    comments_count: 0,
    reading_time_minutes: 1,
    // champs additionnels facultatifs
    tags: ['Next.js', 'Tailwind'],
    demo: 'https://demo.portfolio-v1.com',
    code: 'https://github.com/tonrepo/portfolio-v1'
  },
  {
    id: 2,
    title: 'Task Manager',
    name: 'Task Manager',
    url: 'https://demo.task-manager.com',
    cover_image: '/images/travel.jpg',
    description: 'Application de gestion de tâches avec authentification et API REST.',
    published_at: '2024-10-02T08:30:00Z',
    public_reactions_count: 5,
    comments_count: 2,
    reading_time_minutes: 2,
    tags: ['React', 'Node'],
    demo: 'https://demo.task-manager.com',
    code: 'https://github.com/tonrepo/task-manager'
  },
  {
    id: 3,
    title: 'Mobile App (Expo)',
    name: 'Mobile App (Expo)',
    url: 'https://expo.dev/@ton/expo-app',
    cover_image: '/images/screen.png',
    description: 'Prototype mobile (Expo) — synchronisation temps réel et UI componentisée.',
    published_at: '2025-02-15T12:00:00Z',
    public_reactions_count: 3,
    comments_count: 0,
    reading_time_minutes: 1,
    tags: ['Expo', 'React Native'],
    demo: 'https://expo.dev/@ton/expo-app',
    code: 'https://github.com/tonrepo/expo-app'
  },
  {
    id: 4,
    title: 'Mobile App (Expo)',
    name: 'Mobile App (Expo)',
    url: 'https://expo.dev/@ton/expo-app',
    cover_image: '/images/screen.png',
    description: 'Prototype mobile (Expo) — synchronisation temps réel et UI componentisée.',
    published_at: '2025-02-15T12:00:00Z',
    public_reactions_count: 3,
    comments_count: 0,
    reading_time_minutes: 1,
    tags: ['Expo', 'React Native'],
    demo: 'https://expo.dev/@ton/expo-app',
    code: 'https://github.com/tonrepo/expo-app'
  },
  {
    id: 5,
    title: 'Mobile App (Expo)',
    name: 'Mobile App (Expo)',
    url: 'https://expo.dev/@ton/expo-app',
    cover_image: '/images/screen.png',
    description: 'Prototype mobile (Expo) — synchronisation temps réel et UI componentisée.',
    published_at: '2025-02-15T12:00:00Z',
    public_reactions_count: 3,
    comments_count: 0,
    reading_time_minutes: 1,
    tags: ['Expo', 'React Native'],
    demo: 'https://expo.dev/@ton/expo-app',
    code: 'https://github.com/tonrepo/expo-app'
  },
  {
    id: 6,
    title: 'Mobile App (Expo)',
    name: 'Mobile App (Expo)',
    url: 'https://expo.dev/@ton/expo-app',
    cover_image: '/images/screen.png',
    description: 'Prototype mobile (Expo) — synchronisation temps réel et UI componentisée.',
    published_at: '2025-02-15T12:00:00Z',
    public_reactions_count: 3,
    comments_count: 0,
    reading_time_minutes: 1,
    tags: ['Expo', 'React Native'],
    demo: 'https://expo.dev/@ton/expo-app',
    code: 'https://github.com/tonrepo/expo-app'
  },
];