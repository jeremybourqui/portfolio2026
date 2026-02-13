/*Project data for the portfolio */

import { SiAframe, SiI18Next, SiObsstudio, SiStorybook } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaVuejs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";

// Import images
import coverPhotomaton from '../assets/img/photomatonAR/cover_photomaton.jpg';
import loupImg from '../assets/img/photomatonAR/loup.webp';
import photomatonUsageImg from '../assets/img/photomatonAR/photomaton_usage.webp';
import photoImprimeeImg from '../assets/img/photomatonAR/photosimprimee.webp';
import utilisateur from '../assets/img/photomatonAR/utilisateur.webp';
import library from '../assets/img/reactLibrary/library.png';
import calendar from '../assets/img/calendar/calendar.png'


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
      'Prise de photo',
      'Gestion de fond vert pour affichage de l’arrière-plan personnalisé',
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
    slug: 'maj-react-library',
    name: 'Mise à jour d\'une bibliothèque React',
    shortDescription: 'Mise à jour d\'une bibliothèque React pour définir une uniformité graphique ainsi que différentes mises à jour techniques.',
    fullDescription: 'La bibliothèque React interne de l\'Orif a été mise à jour pour assurer une uniformité graphique à travers les différents projets. J\'ai travaillé sur la refactorisation des composants existants et l\'ajout de nouvelles fonctionnalités pour améliorer l\'expérience utilisateur et la maintenabilité du code.',
    image: library,
    gallery: [
      library,
    ],
    technologies: [
      { icon: FaReact, name: 'React' },
      { icon: RiTailwindCssFill, name: 'Tailwind CSS' },
      { icon: SiStorybook, name: 'Storybook' }
    ],
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
    slug: 'calendar',
    name: 'Calendrier de visites',
    shortDescription: 'Développement d\'un calendrier de droit de visites pour la Justice de paix.',
    fullDescription: 'Conception et développement d\'un outil web pour la création de calendriers de droit de visite pour la justice de paix, prenant en compte les vacances, jours fériés et activités de l\'enfant. L\'application a été développée avec le framework Vuejs 3 et permet l\'export des résultats tout en respectant les lois sur la protection des données personnelles. ',
    image: calendar,
    gallery: [
      calendar
    ],
    technologies: [
      { icon: FaVuejs, name: 'Vue.js 3' },
      { icon: SiVite, name: 'Vite' },
    ],
    features: [],
    links: {
      live: 'https://tbcalendrier2022.surge.sh/',
      github: 'https://github.com/jeremybourqui/TBCalendrier',
      demo: null,
    },
    date: '2022',
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