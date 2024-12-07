import type { LinkProps } from "@components/Link.astro";

export const navigation: LinkProps[] = [
    { label: 'Home', target: '/' },
    { label: 'Projects', target: '/projects' },
    { label: 'CV / Résumé', target: '/cv' }
];