import { getCollection } from "astro:content";
import { OGImageRoute } from 'astro-og-canvas';

const projects = await getCollection('projects');

const pages: { [path: string]: any } = {
    home: { title: 'Home', description: 'Fraser Watt\'s portfolio', logo: 'home' },
    projects: { title: 'Projects', description: 'Fraser Watt\'s project showcase', logo: 'projects' },
    cv: { title: 'Curriculum Vitae', description: 'Fraser Watt\'s Curriculum Vitae', logo: 'cv' },
    ...Object.fromEntries(projects.map(({ slug, data }) => [ `/projects/${slug}`, { title: data.name, description: data.blurb, logo: 'projects' }]))
}

export const { getStaticPaths, GET } = OGImageRoute({
    param: 'route',
    pages,

    getSlug(path) {
		path = path.replace(/^\/src\/pages\//, '');
		path = path.replace(/\.[^.]*$/, '') + '.webp';
		path = path.replace(/\/index\.webp$/, '.webp');
		return path;
	},

    getImageOptions: (path, page) => ({
        title: page.title,
        description: page.description,
        format: 'WEBP',
        quality: 90,

        padding: 80,

        logo: {
            path: `./src/assets/opengraph/logo${page.logo ? `-${page.logo}` : ''}.png`,
            size: [ 350, 100 ],
        },        

        border: {
            color: [ 29, 140, 180 ],
            width: 32,
            side: "inline-start"
        },

        bgGradient: [ [ 39, 83, 126 ], [ 20, 29, 40 ] ],

        font: {
            title: {
                families: [ 'Inter', 'Arial', 'sans-serif' ],
                size: 80,
                weight: 'ExtraBold',
                lineHeight: 1.2,
            },
            description: {
                families: [ 'Inter', 'Arial', 'sans-serif' ],
                size: 40,
                weight: 'Light'
            }
        },

        fonts: [ './src/assets/opengraph/inter-400-normal.ttf' ],
    })
})