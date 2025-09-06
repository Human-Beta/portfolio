interface Link {
  url: string;
  label?: string;
}

export interface Project {
  id: number;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  links: [Link] | [Link, Link];
}

let _id = 1;
function id() {
  return _id++;
}

export const projects: readonly Project[] = [
  {
    id: id(),
    image: '/projects/messenger.png',
    imageAlt: 'Messenger App Screenshot',
    title: 'Messenger',
    description: `A real-time messenger inspired by Telegram with authentication, user search, and one-to-one chats powered by WebSockets. 
      The frontend is built with React and TypeScript; the backend uses Spring Boot with JWT and WebSocket/STOMP. 
      Designed with a clean client–server split for scalability and easy maintenance. Repos are split into UI and Server for clarity.
    `,
    links: [
      { label: 'UI', url: 'https://github.com/Human-Beta/messenger-ui' },
      { label: 'Server', url: 'https://github.com/Human-Beta/messenger-server-spring' },
    ],
  },
  {
    id: id(),
    image: '/projects/portfolio.png',
    imageAlt: 'Portfolio App Screenshot',
    title: 'Portfolio',
    description: `A responsive portfolio website built with React, TypeScript, and Tailwind CSS. It showcases my CV, skills, and pet projects. 
      The project is modular, easy to extend, and deployed on Vercel for fast and reliable hosting
    `,
    links: [{ url: 'https://github.com/Human-Beta/portfolio' }],
  },
];
