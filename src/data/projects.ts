interface Project {
  id: number;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  githubUrl: string;
}

export const projects: readonly Project[] = [
  {
    id: 1,
    image: '/projects/portfolio.png',
    imageAlt: 'Portfolio App Screenshot',
    title: 'Portfolio',
    description:
      'A responsive portfolio website built with React, TypeScript, and Tailwind CSS. It showcases my CV, skills, and pet projects. The project is modular, easy to extend, and deployed on Vercel for fast and reliable hosting',
    githubUrl: 'https://github.com/Human-Beta/portfolio',
  },
];
