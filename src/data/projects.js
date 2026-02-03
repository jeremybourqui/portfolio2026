/*Project data for the portfolio */

import { SiAframe, SiObsstudio } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

// Import images
import coverPhotomaton from '../assets/img/photomatonAR/cover_photomaton.jpg';
import loupImg from '../assets/img/photomatonAR/loup.webp';
import photomatonUsageImg from '../assets/img/photomatonAR/photomaton_usage.webp';
import photoImprimeeImg from '../assets/img/photomatonAR/photosimprimee.webp';
import utilisateur from '../assets/img/photomatonAR/utilisateur.webp';

export const projects = [
  {
    slug: 'photomaton-ar',
    name: 'Photomaton AR',
    shortDescription: "Réalisation d'un photomaton avec incrustation d'élément en réalité augmentée.",
    fullDescription: `
      Réalisation d'un photomaton permettant l'incrustation en réalité augmentée d'un masque, à l'aide d'un loup portant un qr code simple, puis de l'impression de la photo. Développé avec des technologies web pour gérer l'interface et la réalité augmentée. Le flux vidéo est géré via le logiciels OBS et connecté a l'interface avec un client websocket, pour changer les arrières-plans.
      Ce travail de groupe à été réalisé pour le Musée suisse de l'appareil photographique, j'ai personnellement gérer la capture vidéo, et la mise en place des masques en réalité augmentée.
  `,
    image: coverPhotomaton,
    gallery: [
      coverPhotomaton,
      photomatonUsageImg,
      loupImg,
      utilisateur,
      photoImprimeeImg,
    ],
    technologies: [
      { icon: IoLogoJavascript, name: 'JavaScript' },
      { icon: SiAframe, name: 'A-Frame' },
      { icon: SiObsstudio, name: 'OBS Studio' }
    ],
    features: [
      'Détection de QR code en temps réel',
      'Superposition de masques 3D',
      'Impression photo instantanée',
    ],
    links: {
      live: 'https://piar.surge.sh/',
      github: 'https://github.com/watermelon-ltd/PB-Turfu',
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