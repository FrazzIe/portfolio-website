import Link from "@components/shared/Link.astro";
import type { OpenGraphImagePages } from "@helpers/models/ogImagePage";
import type { ComponentProps } from "astro/types";

export const navigation: ComponentProps<typeof Link>[] = [
    { label: 'Home', url: '/' },
    { label: 'Projects', url: '/projects' },
    { label: 'CV / Résumé', url: '/cv' }
];

export const ogImagePages: OpenGraphImagePages = {
    home: { 
        title: 'Home', 
        description: 'Fraser Watt\'s portfolio', 
        logo: 'home' 
    },
    projects: { 
        title: 'Projects', 
        description: 'Fraser Watt\'s project showcase', 
        logo: 'projects' 
    },
    cv: { 
        title: 'Curriculum Vitae', 
        description: 'Fraser Watt\'s Curriculum Vitae', 
        logo: 'cv' 
    },
}

export const fullname = 'Fraser Watt';
export const role = 'Full-stack Developer';
export const roles = [
    role,
    'Lego enthusiast',
    'Gaming buff',
    'Homelab enjoyer',
]

export const socials = {
    email: {
        address: 'fwatt@proton.me',
        mailto: 'fwatt@proton.me?subject=Job%20Opportunity'
    },
    linkedin: 'https://linkedin.com/in/fraser-w',
    github: 'https://git.fwatt.dev'
}