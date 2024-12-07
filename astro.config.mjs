import { defineConfig } from 'astro/config';
import icon from 'astro-icon';  
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic';
import rehypeSlug from 'rehype-slug';

const anchorIcon = `
    <svg width="16" height="16" viewBox="0 0 24 24" data-icon="ri:links-fill">  
        <symbol id="ai:ri:links-fill">
            <path fill="currentColor" d="m13.06 8.111l1.415 1.414a7 7 0 0 1 0 9.9l-.354.353a7 7 0 1 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415zm6.718 6.01l-1.414-1.414a5 5 0 0 0-7.071-7.07l-.354.353a5 5 0 0 0 0 7.07l1.415 1.415l-1.415 1.414l-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 1 1 9.9 9.9"></path>
        </symbol>
        <use xlink:href="#ai:ri:links-fill"</use>
    </svg>
`

// https://astro.build/config
export default defineConfig({
    site: 'https://fwatt.dev',
    markdown: {
        rehypePlugins: [            
            rehypeSlug,
            [
                rehypeAutolinkHeadings,
                {
                    behavior: 'prepend',
                    content: fromHtmlIsomorphic(anchorIcon, { fragment: true }).children,
                    headingProperties: {
                        className: ['anchor-head'],
                    },
                    properties: {
                        className: ['anchor-link'],
                    },
                }
            ]
            
        ]
    },
    integrations: [
        icon({
            iconDir: "src/assets/icons",
            include: {
                ri: ["*"],
            }
        })
    ]
});
