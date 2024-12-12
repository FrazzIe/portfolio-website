import Link from "@components/shared/Link.astro";
import type { ComponentProps } from "astro/types";

export const navigation: ComponentProps<typeof Link>[] = [
    { label: 'Home', url: '/' },
    { label: 'Projects', url: '/projects' },
    { label: 'CV / Résumé', url: '/cv' }
];