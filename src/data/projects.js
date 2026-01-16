/**
 * Project data for the portfolio
 * 
 * Structure:
 * - slug: URL-friendly identifier (used in routes)
 * - name: Display name
 * - shortDescription: Brief description for cards
 * - fullDescription: Detailed description for project page
 * - image: Thumbnail/cover image
 * - gallery: Array of additional images
 * - technologies: Tech stack used
 * - features: Key features/highlights
 * - links: External links (live demo, GitHub, etc.)
 * - date: Project date/year
 * - status: 'completed' | 'in-progress' | 'archived'
 * - category: Project type for filtering
 */

export const projects = [
  {
    slug: 'photomaton-ar',
    name: 'Photomaton AR',
    shortDescription: "Réalisation d'un photomaton avec incrustation en réalité augmentée.",
    fullDescription: `
      Réalisation d'un photomaton permettant l'incrustation en réalité augmentée 
      d'un masque, à l'aide d'un loup portant un QR code simple, puis de 
      l'impression de la photo.
    `,
    image: '/images/projects/photomaton-ar/cover.jpg',
    gallery: [
      '/images/projects/photomaton-ar/screenshot-1.jpg',
      '/images/projects/photomaton-ar/screenshot-2.jpg',
    ],
    technologies: ['React', 'AR.js', 'Three.js', 'Node.js'],
    features: [
      'Détection de QR code en temps réel',
      'Superposition de masques 3D',
      'Impression photo instantanée',
    ],
    links: {
      live: null,
      github: 'https://github.com/username/photomaton-ar',
      demo: null,
    },
    date: '2025',
    status: 'completed',
    category: 'Application Web',
  },
  {
    slug: 'projet-2',
    name: 'Projet 2',
    shortDescription: 'Description du projet 2.',
    fullDescription: 'Description complète du projet 2...',
    image: null,
    gallery: [],
    technologies: [],
    features: [],
    links: {
      live: null,
      github: null,
      demo: null,
    },
    date: '2025',
    status: 'in-progress',
    category: 'Application Web',
  },
  {
    slug: 'projet-3',
    name: 'Projet 3',
    shortDescription: 'Description du projet 3.',
    fullDescription: 'Description complète du projet 3...',
    image: null,
    gallery: [],
    technologies: [],
    features: [],
    links: {
      live: null,
      github: null,
      demo: null,
    },
    date: '2024',
    status: 'completed',
    category: 'Autre',
  },
];

// Helper functions for accessing project data
export const getProjectBySlug = (slug) => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category) => {
  return projects.filter((project) => project.category === category);
};

export const getProjectsByStatus = (status) => {
  return projects.filter((project) => project.status === status);
};

export const getAllCategories = () => {
  return [...new Set(projects.map((project) => project.category))];
};

export default projects;
